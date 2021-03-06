import merge from 'lodash/merge';
import AppCommand from '../classes/AppCommand';
import { PWA_DEFAULT_TAB } from '../constants/Command';
import {
  SCANNER_ANIMATION_FOREGROUND_BOTTON,
  SCANNER_TYPE_BARCODE,
  SCANNER_TYPE_CARD,
  SCANNER_TYPE_IMAGE,
  SCANNER_MODE_ON,
  SCANNER_MODE_OFF,
} from '../constants/Scanner';

/**
 * Data definition the scanner modes parameters. Possible values are "on" or "off".
 * @typedef {Object} ScannerModes
 * @property {string} barcodeRecognition Shall the scanner try to recognize barcodes.
 * @property {string} imageCapturing Shall the scanner try to capture images.
 * @property {string} cardRecognition Shall the scanner try to recognize credit cards.
 */

/**
 * Sends an openScanner command to the app.
 * @param {Object} params The command parameters.
 * @param {string} params.src The URL to the webview which overlays the scanner feed.
 * @param {Object} [params.eventParams] If set the given data will be send as an
 *   "updateTemplateContent" SGEvent to the scanner webview.
 * @param {string} [params.animation] The entry animation for the webview.
 * @param {ScannerModes} params.modes The scanner modes.
 */
export const openScanner = (params) => {
  const defaults = {
    src: 'sgapi:scanner',
    animation: SCANNER_ANIMATION_FOREGROUND_BOTTON,
    modes: {
      [SCANNER_TYPE_BARCODE]: SCANNER_MODE_OFF,
      [SCANNER_TYPE_IMAGE]: SCANNER_MODE_OFF,
      [SCANNER_TYPE_CARD]: SCANNER_MODE_OFF,
    },
  };

  let merged = merge(defaults, params);

  const { barcodeRecognition, imageCapturing, cardRecognition } = merged.modes;

  const eventParams = {
    eventParams: {
      scannerData: {
        modes: {
          [SCANNER_TYPE_BARCODE]: barcodeRecognition === SCANNER_MODE_ON,
          [SCANNER_TYPE_IMAGE]: imageCapturing === SCANNER_MODE_ON,
          [SCANNER_TYPE_CARD]: cardRecognition === SCANNER_MODE_ON,
        },
      },
      sourceTab: PWA_DEFAULT_TAB,
    },
  };

  merged = merge(merged, eventParams);

  const command = new AppCommand();
  command
    .setCommandName('openScanner')
    .dispatch(merged);
};

/**
 * Sends a closeScanner command to the app.
 * @param {Object} params The command parameters.
 * @param {string} [params.animation] The exit animation for the webview.
 */
export const closeScanner = (params) => {
  const defaults = {
    animation: SCANNER_ANIMATION_FOREGROUND_BOTTON,
  };

  const merged = merge(defaults, params);

  const command = new AppCommand();
  command
    .setCommandName('closeScanner')
    .dispatch(merged);
};

/**
 * Sends a startScanner command to the app.
 * It activates the content recognition of the scanner.
 */
export const startScanner = () => {
  const command = new AppCommand();
  command
    .setCommandName('startScanner')
    .dispatch();
};

/**
 * Sends a stopScanner command to the app.
 * It deactivates the content recognition of the scanner.
 */
export const stopScanner = () => {
  const command = new AppCommand();
  command
    .setCommandName('stopScanner')
    .dispatch();
};
