import ScannerManager from '@shopgate/pwa-core/classes/ScannerManager';
import { openedScannerLink$ } from '../streams/history';

/**
 * App Scanner subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function scanner(subscribe) {
  /**
   * Gets triggered when the app starts.
   */
  subscribe(openedScannerLink$, () => {
    /**
     * The handler to process scanned content from the scanner.
     * @param {Object} data The scanned data
     * @param {string} data.format The format of the scanned content.
     * @param {string} data.code The code that has been scanned.
     */
    const scanHandler = async () => {
      // TODO Add scan logic here
    };

    const scannerManager = new ScannerManager();
    scannerManager.registerScanHandler(scanHandler);
    scannerManager.openScanner();
  });
}
