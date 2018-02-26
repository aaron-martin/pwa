/**
 * Copyright (c) 2017 - present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Gets toast message which should be shown.
 * Always the first one, and always just one.
 * There should be only one toast message at a time shown to the user.
 * If selector returns null, toast drawer should be hidden.
 * @param {Object} state State of the app.
 * @returns {Object|null}
 */
export const getToast = (state) => {
  if (state.toast.length) {
    return state.toast[0];
  }
  return null;
};
/**
 * Checks if there is a toast message which should be shown.
 * @param {Object} state State of the app.
 * @returns {Object|null}
 */
export const hasNextToast = state => state.toast.length > 1;

