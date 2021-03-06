const csl = console;

/**
 * Converts logs into a readable format for Selenium, if testMode is enabled.
 * @param {Array} args Arguments that should be converted
 * @return {Array} converted arguments
 */
const convertLogArgs = (args) => {
  if (window.stringifyLogs) {
    return [JSON.stringify(args)];
  }

  return args;
};

/**
 * The logging wrapper for the console.
 * @type {Object}
 */
export const logger = {
  ...console,
  debug: (...args) => csl.debug(...convertLogArgs(args)),
  dir: (...args) => csl.dir(...convertLogArgs(args)),
  dirxml: (...args) => csl.dirxml(...convertLogArgs(args)),
  error: (...args) => csl.error(...convertLogArgs(args)),
  info: (...args) => csl.info(...convertLogArgs(args)),
  log: (...args) => csl.log(...convertLogArgs(args)),
  warn: (...args) => csl.warn(...convertLogArgs(args)),
};

/**
 * Returns a URL for performing XHR Requests.
 * @param {string} action The action to request on the server.
 * @return {string} The full URL.
 */
export const ajaxUrl = action => (action ? `sgapi:${action}` : '');

/**
 * Checks if the hasSGJavascriptBridge exists.
 * @return {boolean}
 */
export function hasSGJavaScriptBridge() {
  return (typeof SGJavascriptBridge !== 'undefined');
}
