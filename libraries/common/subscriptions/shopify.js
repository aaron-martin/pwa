/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { userLoginRequest$, userLogoutRequest$ } from '../streams/user';
import { hasShopifyCheckout } from '../selectors/shopify';
import login from '../actions/shopify/login';
import logout from '../actions/shopify/logout';

/**
 * Shopify subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function shopify(subscribe) {
  if (!hasShopifyCheckout()) {
    return;
  }

  /**
   * Gets triggered when the user wants to log in.
   */
  subscribe(userLoginRequest$, ({ dispatch, action }) => {
    dispatch(login(action.user, action.password));
  });

  /**
   * Gets triggered when the user wants to log out.
   */
  subscribe(userLogoutRequest$, ({ dispatch }) => {
    dispatch(logout());
  });
}
