/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  requestLogin,
  successLogin,
  errorLogin,
  requestLogout,
  successLogout,
  errorLogout,
  requestUser,
  receiveUser,
  errorUser,
  toggleLoggedIn,
} from './index';

import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGOUT,
  ERROR_LOGOUT,
  REQUEST_USER,
  RECEIVE_USER,
  ERROR_USER,
  TOGGLE_LOGGED_IN,
} from '../../constants/ActionTypes';

const messages = [{
  type: 'EUNKNOWN',
  message: 'Something went wrong',
  code: 1337,
}];

describe('Action Creators: user', () => {
  describe('requestLogin()', () => {
    it('should work as expected', () => {
      const user = 'super@user.com';
      const password = 'super#password';
      const expected = {
        type: REQUEST_LOGIN,
        user,
        password,
      };
      expect(requestLogin(user, password)).toEqual(expected);
    });
  });

  describe('successLogin()', () => {
    it('should work as expected', () => {
      const expected = { type: SUCCESS_LOGIN };
      expect(successLogin()).toEqual(expected);
    });
  });

  describe('errorLogin()', () => {
    it('should work as expected', () => {
      const expected = {
        type: ERROR_LOGIN,
        messages,
      };
      expect(errorLogin(messages)).toEqual(expected);
    });

    it('should work as expected when the messages parameter is empty', () => {
      const expected = {
        type: ERROR_LOGIN,
        messages: [],
      };
      expect(errorLogin()).toEqual(expected);
    });
  });

  describe('requestLogout()', () => {
    it('should work as expected', () => {
      const expected = { type: REQUEST_LOGOUT };
      expect(requestLogout()).toEqual(expected);
    });
  });

  describe('successLogout()', () => {
    it('should work as expected', () => {
      const expected = { type: SUCCESS_LOGOUT };
      expect(successLogout()).toEqual(expected);
    });
  });

  describe('errorLogout()', () => {
    it('should work as expected', () => {
      const expected = {
        type: ERROR_LOGOUT,
        messages,
      };
      expect(errorLogout(messages)).toEqual(expected);
    });

    it('should work as expected when the messages parameter is empty', () => {
      const expected = {
        type: ERROR_LOGOUT,
        messages: [],
      };
      expect(errorLogout()).toEqual(expected);
    });
  });

  describe('requestUser()', () => {
    it('should work as expected', () => {
      const expected = { type: REQUEST_USER };
      expect(requestUser()).toEqual(expected);
    });
  });

  describe('receiveUser()', () => {
    it('should work as expected', () => {
      const user = {
        firstName: 'John',
        lastName: 'Doe',
        mail: 'john@doe.com',
      };
      const expected = {
        type: RECEIVE_USER,
        user,
      };
      expect(receiveUser(user)).toEqual(expected);
    });
  });

  describe('errorUser()', () => {
    it('should work as expected', () => {
      const expected = { type: ERROR_USER };
      expect(errorUser()).toEqual(expected);
    });
  });

  describe('toggleLoggedIn()', () => {
    it('should toggle to true', () => {
      const expected = {
        type: TOGGLE_LOGGED_IN,
        value: true,
      };
      expect(toggleLoggedIn(true)).toEqual(expected);
    });

    it('should toggle to false', () => {
      const expected = {
        type: TOGGLE_LOGGED_IN,
        value: false,
      };
      expect(toggleLoggedIn(false)).toEqual(expected);
    });
  });
});
