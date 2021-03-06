import { PWA_DEFAULT_TAB } from '../constants/Command';
import {
  SCANNER_ANIMATION_FOREGROUND_BOTTON,
  SCANNER_ANIMATION_FOREGROUND_LEFT,
  SCANNER_TYPE_BARCODE,
  SCANNER_TYPE_CARD,
  SCANNER_TYPE_IMAGE,
  SCANNER_MODE_ON,
  SCANNER_MODE_OFF,
} from '../constants/Scanner';

import {
  mockedSetCommandName,
  mockedDispatch,
} from '../classes/AppCommand';

import {
  openScanner,
  closeScanner,
  startScanner,
  stopScanner,
} from './scanner';

jest.mock('../classes/AppCommand');

describe('scanner commands', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('openScanner()', () => {
    it('should work as expected', () => {
      const expected = {
        src: 'sgapi:scanner',
        modes: {
          [SCANNER_TYPE_BARCODE]: SCANNER_MODE_OFF,
          [SCANNER_TYPE_CARD]: SCANNER_MODE_OFF,
          [SCANNER_TYPE_IMAGE]: SCANNER_MODE_OFF,
        },
        animation: SCANNER_ANIMATION_FOREGROUND_BOTTON,
        eventParams: {
          scannerData: {
            modes: {
              barcodeRecognition: false,
              cardRecognition: false,
              imageCapturing: false,
            },
          },
          sourceTab: PWA_DEFAULT_TAB,
        },
      };

      openScanner();

      expect(mockedSetCommandName).toHaveBeenCalledTimes(1);
      expect(mockedSetCommandName).toHaveBeenCalledWith('openScanner');
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('should merge passed parameters properly', () => {
      const expected = {
        src: 'sgapi:scanner',
        modes: {
          [SCANNER_TYPE_BARCODE]: SCANNER_MODE_OFF,
          [SCANNER_TYPE_IMAGE]: SCANNER_MODE_ON,
          [SCANNER_TYPE_CARD]: SCANNER_MODE_OFF,
        },
        animation: SCANNER_ANIMATION_FOREGROUND_BOTTON,
        eventParams: {
          scannerData: {
            modes: {
              [SCANNER_TYPE_BARCODE]: false,
              [SCANNER_TYPE_IMAGE]: true,
              [SCANNER_TYPE_CARD]: false,
            },
          },
          sourceTab: PWA_DEFAULT_TAB,
        },
      };

      openScanner({
        modes: {
          imageCapturing: SCANNER_MODE_ON,
        },
      });

      expect(mockedDispatch).toHaveBeenCalledTimes(1);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });
  });

  describe('closeScanner()', () => {
    it('should work as expected', () => {
      const expected = {
        animation: SCANNER_ANIMATION_FOREGROUND_BOTTON,
      };

      closeScanner();

      expect(mockedSetCommandName).toHaveBeenCalledTimes(1);
      expect(mockedSetCommandName).toHaveBeenCalledWith('closeScanner');
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('should merge passed parameters properly', () => {
      const expected = {
        animation: SCANNER_ANIMATION_FOREGROUND_LEFT,
      };

      closeScanner({
        animation: SCANNER_ANIMATION_FOREGROUND_LEFT,
      });

      expect(mockedSetCommandName).toHaveBeenCalledTimes(1);
      expect(mockedSetCommandName).toHaveBeenCalledWith('closeScanner');
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });
  });

  describe('startScanner()', () => {
    it('should work as expected', () => {
      startScanner();

      expect(mockedSetCommandName).toHaveBeenCalledTimes(1);
      expect(mockedSetCommandName).toHaveBeenCalledWith('startScanner');
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe('stopScanner()', () => {
    it('should work as expected', () => {
      stopScanner();

      expect(mockedSetCommandName).toHaveBeenCalledTimes(1);
      expect(mockedSetCommandName).toHaveBeenCalledWith('stopScanner');
      expect(mockedDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
