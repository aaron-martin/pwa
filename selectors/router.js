/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createSelector } from 'reselect';

/**
 * Selects the router state.
 * @param {Object} state The global state.
 * @return {Object}
 */
export const getRouterState = state => state.router;

/**
 * Selects the current query params from history state.
 * @param {Object} state The global state.
 * @return {Object}
 */
export const getRouterStack = state => getRouterState(state).stack;

/**
 * Retrieves the search phrase from the URL query parameters.
 * @param {Object} state The global state.
 * @returns {string|null} The current search phrase.
 */
export const getCurrentRoute = createSelector(
  state => state.router.stack,
  (stack) => {
    if (!stack.length) {
      return null;
    }

    return stack[stack.length - 1];
  }
);/**
 * Retrieves the search phrase from the URL query parameters.
 * @param {Object} state The global state.
 * @returns {string|null} The current search phrase.
 */
export const getCurrentPathname = createSelector(
  getCurrentRoute,
  (route) => {
    if (!route || !route.pathname) {
      return null;
    }

    return route.pathname;
  }
);
