/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SUCCESS_SHOPIFY_LOGOUT } from '../../constants/ActionTypes';

/**
 * Creates the dispatched SUCCESS_SHOPIFY_LOGOUT action object.
 * @returns {Object} The dispatched action object.
 */
export const successShopifyLogout = () => ({
  type: SUCCESS_SHOPIFY_LOGOUT,
});

export default successShopifyLogout;
