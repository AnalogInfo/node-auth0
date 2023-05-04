export function jsonToBase64(json: object): string;
export function generateClientInfo(): object;
export function containsUnsafeChars(s: any): boolean;
export function maybeDecode(url: any): any;
export function sanitizeArguments(
  optionsCandidate: any,
  cbCandidate: any
): {
  cb: any;
  options: any;
};
