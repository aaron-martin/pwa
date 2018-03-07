/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  TOGGLE_LOGGED_IN,
  ERROR_LOGIN,
  SUCCESS_LOGOUT,
} from '../../constants/ActionTypes';

const defaultState = {
  isLoggedIn: false,
  errors: null,
};

/**
 * Stores the login state
 * @param {Object} [state] The current state.
 * @param {Object} action The action object.
 * @return {Object} The new state.
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        errors: null,
        isFetching: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors: action.messages,
        isLoggedIn: false,
        isFetching: false,
      };
    case TOGGLE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.value,
      };
    case SUCCESS_LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
