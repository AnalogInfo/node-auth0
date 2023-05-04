'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.applyQueryParams =
  exports.validateRequiredRequestParams =
  exports.TextApiResponse =
  exports.BlobApiResponse =
  exports.VoidApiResponse =
  exports.JSONApiResponse =
  exports.canConsumeForm =
  exports.querystring =
  exports.COLLECTION_FORMATS =
  exports.RequiredError =
  exports.FetchError =
  exports.ResponseError =
  exports.BaseAPI =
  exports.FormData =
  exports.Blob =
    void 0;
const form_data_1 = __importDefault(require('form-data'));
Object.defineProperty(exports, 'FormData', {
  enumerable: true,
  get: function () {
    return form_data_1.default;
  },
});
const node_fetch_1 = __importStar(require('node-fetch'));
Object.defineProperty(exports, 'Blob', {
  enumerable: true,
  get: function () {
    return node_fetch_1.Blob;
  },
});
const retry_1 = require('./retry');
/**
 * This is the base class for all generated API classes.
 */
class BaseAPI {
  configuration;
  middleware;
  queryParamsStringify;
  fetchApi;
  parseError;
  constructor(configuration) {
    this.configuration = configuration;
    if (configuration.baseUrl === null || configuration.baseUrl === undefined) {
      throw new Error('Must provide a base URL for the API');
    }
    if ('string' !== typeof configuration.baseUrl || configuration.baseUrl.length === 0) {
      throw new Error('The provided base URL is invalid');
    }
    this.middleware = configuration.middleware || [];
    this.queryParamsStringify = this.configuration.queryParamsStringify || querystring;
    this.fetchApi = configuration.fetchApi || node_fetch_1.default;
    this.parseError = configuration.parseError;
  }
  async request(context, initOverrides) {
    const { url, init } = await this.createFetchParams(context, initOverrides);
    const response = await this.fetch(url, init);
    if (response && response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = await this.parseError(response);
    throw error;
  }
  async createFetchParams(context, initOverrides) {
    let url = this.configuration.baseUrl + context.path;
    if (context.query !== undefined && Object.keys(context.query).length !== 0) {
      // only add the querystring to the URL if there are query parameters.
      // this is done to avoid urls ending with a "?" character which buggy webservers
      // do not handle correctly sometimes.
      url += `?${this.queryParamsStringify(context.query)}`;
    }
    const headers = Object.assign({}, this.configuration.headers, context.headers);
    Object.keys(headers).forEach((key) => (headers[key] === undefined ? delete headers[key] : {}));
    const initOverrideFn =
      typeof initOverrides === 'function' ? initOverrides : async () => initOverrides;
    const initParams = {
      method: context.method,
      headers,
      body: context.body,
    };
    const overriddenInit = {
      ...initParams,
      ...(await initOverrideFn({
        init: initParams,
        context,
      })),
    };
    const init = {
      ...overriddenInit,
      body:
        isFormData(overriddenInit.body) ||
        overriddenInit.body instanceof URLSearchParams ||
        isBlob(overriddenInit.body)
          ? overriddenInit.body
          : JSON.stringify(overriddenInit.body),
    };
    return { url, init };
  }
  fetch = async (url, init) => {
    let fetchParams = { url, init };
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams =
          (await middleware.pre({
            fetch: this.fetchApi,
            ...fetchParams,
          })) || fetchParams;
      }
    }
    let response = undefined;
    try {
      response =
        this.configuration.retry?.enabled !== false
          ? await (0, retry_1.retry)(() => this.fetchApi(fetchParams.url, fetchParams.init), {
              ...this.configuration.retry,
            })
          : await this.fetchApi(fetchParams.url, fetchParams.init);
    } catch (e) {
      for (const middleware of this.middleware) {
        if (middleware.onError) {
          response =
            (await middleware.onError({
              fetch: this.fetchApi,
              ...fetchParams,
              error: e,
              response: response ? response.clone() : undefined,
            })) || response;
        }
      }
      if (response === undefined) {
        if (e instanceof Error) {
          throw new FetchError(
            e,
            'The request failed and the interceptors did not return an alternative response'
          );
        } else {
          throw e;
        }
      }
    }
    for (const middleware of this.middleware) {
      if (middleware.post) {
        response =
          (await middleware.post({
            fetch: this.fetchApi,
            ...fetchParams,
            response: response.clone(),
          })) || response;
      }
    }
    return response;
  };
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
}
exports.BaseAPI = BaseAPI;
function isBlob(value) {
  return typeof node_fetch_1.Blob !== 'undefined' && value instanceof node_fetch_1.Blob;
}
function isFormData(value) {
  return typeof form_data_1.default !== 'undefined' && value instanceof form_data_1.default;
}
class ResponseError extends Error {
  statusCode;
  body;
  headers;
  name = 'ResponseError';
  constructor(statusCode, body, headers, msg) {
    super(msg);
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
  }
}
exports.ResponseError = ResponseError;
class FetchError extends Error {
  cause;
  name = 'FetchError';
  constructor(cause, msg) {
    super(msg);
    this.cause = cause;
  }
}
exports.FetchError = FetchError;
class RequiredError extends Error {
  field;
  name = 'RequiredError';
  constructor(field, msg) {
    super(msg);
    this.field = field;
  }
}
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};
function querystring(params, prefix = '') {
  return Object.keys(params)
    .map((key) => querystringSingleKey(key, params[key], prefix))
    .filter((part) => part.length > 0)
    .join('&');
}
exports.querystring = querystring;
function querystringSingleKey(key, value, keyPrefix = '') {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value
      .map((singleValue) => encodeURIComponent(String(singleValue)))
      .join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
  }
  if (value instanceof Object) {
    return querystring(value, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
function canConsumeForm(consumes) {
  for (const consume of consumes) {
    if ('multipart/form-data' === consume.contentType) {
      return true;
    }
  }
  return false;
}
exports.canConsumeForm = canConsumeForm;
class JSONApiResponse {
  data;
  headers;
  status;
  statusText;
  constructor(data, headers, status, statusText) {
    this.data = data;
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
  static async fromResponse(raw) {
    const value = await raw.json();
    return new JSONApiResponse(value, raw.headers, raw.status, raw.statusText);
  }
}
exports.JSONApiResponse = JSONApiResponse;
class VoidApiResponse {
  headers;
  status;
  statusText;
  data;
  constructor(headers, status, statusText) {
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
  static async fromResponse(raw) {
    return new VoidApiResponse(raw.headers, raw.status, raw.statusText);
  }
}
exports.VoidApiResponse = VoidApiResponse;
class BlobApiResponse {
  data;
  headers;
  status;
  statusText;
  constructor(data, headers, status, statusText) {
    this.data = data;
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
  static async fromResponse(raw) {
    const value = await raw.blob();
    return new BlobApiResponse(value, raw.headers, raw.status, raw.statusText);
  }
}
exports.BlobApiResponse = BlobApiResponse;
class TextApiResponse {
  data;
  headers;
  status;
  statusText;
  constructor(data, headers, status, statusText) {
    this.data = data;
    this.headers = headers;
    this.status = status;
    this.statusText = statusText;
  }
  static async fromResponse(raw) {
    const value = await raw.text();
    return new TextApiResponse(value, raw.headers, raw.status, raw.statusText);
  }
}
exports.TextApiResponse = TextApiResponse;
function validateRequiredRequestParams(requestParameters, keys) {
  keys.forEach((key) => {
    if (requestParameters[key] === null || requestParameters[key] === undefined) {
      throw new RequiredError(
        key,
        `Required parameter requestParameters.${key} was null or undefined.`
      );
    }
  });
}
exports.validateRequiredRequestParams = validateRequiredRequestParams;
function applyQueryParams(requestParameters, keys) {
  return keys.reduce((acc, { key, config }) => {
    let value;
    if (config.isArray) {
      if (config.isCollectionFormatMulti) {
        value = requestParameters[key];
      } else {
        value = requestParameters[key].join(exports.COLLECTION_FORMATS[config.collectionFormat]);
      }
    } else {
      if (requestParameters[key] !== undefined) {
        if (config.isDateTimeType) {
          value = requestParameters[key].toISOString();
        } else if (config.isDateType) {
          value = requestParameters[key].toISOString().substr(0, 10);
        } else {
          value = requestParameters[key];
        }
      }
    }
    return value !== undefined ? { ...acc, [key]: value } : acc;
  }, {});
}
exports.applyQueryParams = applyQueryParams;
//# sourceMappingURL=index.js.map
