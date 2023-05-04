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
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManagementClientBase = void 0;
__exportStar(require('../runtime'), exports);
__exportStar(require('./managers'), exports);
__exportStar(require('./models'), exports);
const managers_1 = require('./managers');
class ManagementClientBase {
  configuration;
  actions;
  anomaly;
  attackProtection;
  blacklists;
  branding;
  clientGrants;
  clients;
  connections;
  customDomains;
  deviceCredentials;
  emailTemplates;
  emails;
  grants;
  guardian;
  hooks;
  jobs;
  keys;
  logStreams;
  logs;
  organizations;
  prompts;
  resourceServers;
  roles;
  rules;
  rulesConfigs;
  stats;
  tenants;
  tickets;
  userBlocks;
  users;
  usersByEmail;
  constructor(configuration) {
    this.configuration = configuration;
    this.actions = new managers_1.ActionsManager(this.configuration);
    this.anomaly = new managers_1.AnomalyManager(this.configuration);
    this.attackProtection = new managers_1.AttackProtectionManager(this.configuration);
    this.blacklists = new managers_1.BlacklistsManager(this.configuration);
    this.branding = new managers_1.BrandingManager(this.configuration);
    this.clientGrants = new managers_1.ClientGrantsManager(this.configuration);
    this.clients = new managers_1.ClientsManager(this.configuration);
    this.connections = new managers_1.ConnectionsManager(this.configuration);
    this.customDomains = new managers_1.CustomDomainsManager(this.configuration);
    this.deviceCredentials = new managers_1.DeviceCredentialsManager(this.configuration);
    this.emailTemplates = new managers_1.EmailTemplatesManager(this.configuration);
    this.emails = new managers_1.EmailsManager(this.configuration);
    this.grants = new managers_1.GrantsManager(this.configuration);
    this.guardian = new managers_1.GuardianManager(this.configuration);
    this.hooks = new managers_1.HooksManager(this.configuration);
    this.jobs = new managers_1.JobsManager(this.configuration);
    this.keys = new managers_1.KeysManager(this.configuration);
    this.logStreams = new managers_1.LogStreamsManager(this.configuration);
    this.logs = new managers_1.LogsManager(this.configuration);
    this.organizations = new managers_1.OrganizationsManager(this.configuration);
    this.prompts = new managers_1.PromptsManager(this.configuration);
    this.resourceServers = new managers_1.ResourceServersManager(this.configuration);
    this.roles = new managers_1.RolesManager(this.configuration);
    this.rules = new managers_1.RulesManager(this.configuration);
    this.rulesConfigs = new managers_1.RulesConfigsManager(this.configuration);
    this.stats = new managers_1.StatsManager(this.configuration);
    this.tenants = new managers_1.TenantsManager(this.configuration);
    this.tickets = new managers_1.TicketsManager(this.configuration);
    this.userBlocks = new managers_1.UserBlocksManager(this.configuration);
    this.users = new managers_1.UsersManager(this.configuration);
    this.usersByEmail = new managers_1.UsersByEmailManager(this.configuration);
  }
}
exports.ManagementClientBase = ManagementClientBase;
//# sourceMappingURL=index.js.map
