/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  APP_WILL_START,
  APP_DID_START,
  WILL_REGISTER_LINK_EVENTS,
  DID_REGISTER_LINK_EVENTS,
  OPEN_DEEP_LINK,
  OPEN_PUSH_NOTIFICATION,
} from '../../constants/ActionTypes';

import {
  appWillStart,
  appDidStart,
  willRegisterLinkEvents,
  didRegisterLinkEvents,
  openDeepLink,
  openPushNotification,
} from './index';

const dataMock = { some: 'data' };

describe('Action Creators: app', () => {
  describe('appWillStart()', () => {
    it('should work as expected', () => {
      const expected = {
        type: APP_WILL_START,
        location: dataMock,
      };
      expect(appWillStart(dataMock)).toEqual(expected);
    });
  });

  describe('appDidStart()', () => {
    it('should work as expected', () => {
      const expected = { type: APP_DID_START };
      expect(appDidStart()).toEqual(expected);
    });
  });

  describe('willRegisterLinkEvents()', () => {
    it('should work as expected', () => {
      const expected = { type: WILL_REGISTER_LINK_EVENTS };
      expect(willRegisterLinkEvents()).toEqual(expected);
    });
  });

  describe('didRegisterLinkEvents()', () => {
    it('should work as expected', () => {
      const expected = { type: DID_REGISTER_LINK_EVENTS };
      expect(didRegisterLinkEvents()).toEqual(expected);
    });
  });

  describe('openDeepLink()', () => {
    it('should work as expected', () => {
      const expected = {
        type: OPEN_DEEP_LINK,
        payload: dataMock,
      };
      expect(openDeepLink(dataMock)).toEqual(expected);
    });
  });

  describe('openPushNotification()', () => {
    const notificationId = 'abc123';
    const link = '/link/to/somewhere';

    it('should work as expected', () => {
      const expected = {
        type: OPEN_PUSH_NOTIFICATION,
        notificationId,
        link,
      };
      expect(openPushNotification(notificationId, link)).toEqual(expected);
    });

    it('should work as expected when the link is empty', () => {
      const expected = {
        type: OPEN_PUSH_NOTIFICATION,
        notificationId,
        link: '',
      };
      expect(openPushNotification(notificationId)).toEqual(expected);
    });
  });
});
