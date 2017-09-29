/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ERROR_SHOPIFY_LOGIN } from '../../constants/ActionTypes';

/**
 * Creates the dispatched ERROR_SHOPIFY_LOGIN action object.
 * @param {Array} [messages=[]] Array of error messages
 * @returns {Object} The dispatched action object.
 */
export const errorShopifyLogin = (messages = []) => ({
  type: ERROR_SHOPIFY_LOGIN,
  messages,
});

export default errorShopifyLogin;
