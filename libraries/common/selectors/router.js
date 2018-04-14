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
  getRouterStack,
  (stack) => {
    if (!stack.length) {
      return null;
    }

    return stack[stack.length - 1];
  }
);

/**
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

/**
 * Retrieves the search phrase from the URL query parameters.
 * @param {Object} state The global state.
 * @returns {Object|null} The current route state.
 */
export const getCurrentRouteTitle = createSelector(
  getCurrentRoute,
  (route) => {
    if (!route || !route.state.title) {
      return null;
    }

    return route.state.title;
  }
);