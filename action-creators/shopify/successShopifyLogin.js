/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SUCCESS_SHOPIFY_LOGIN } from '../../constants/ActionTypes';

/**
 * Creates the dispatched SUCCESS_SHOPIFY_LOGIN action object.
 * @returns {Object} The dispatched action object.
 */
export const successShopifyLogin = () => ({
  type: SUCCESS_SHOPIFY_LOGIN,
});

export default successShopifyLogin;
