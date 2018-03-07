/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import event from '@shopgate/pwa-core/classes/Event';
import registerEvents from '@shopgate/pwa-core/commands/registerEvents';
import appConfig from '../helpers/config';
import redirectRoute from '../actions/history/redirectRoute';
import resetHistory from '../actions/history/resetHistory';
import { userDidLogin$, userDidLogout$ } from '../streams/user';
import { appDidStart$ } from '../streams/app';

/**
 * History subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function history(subscribe) {
  /**
   * Gets triggered when the app starts.
   */
  subscribe(appDidStart$, ({ dispatch }) => {
    registerEvents(['checkoutSuccess']);
    event.addCallback('checkoutSuccess', () => dispatch(resetHistory()));
  });

  /**
   * For the moment, we need to explicitly check for the Shopify webcheckout.
   * If it's there then we let that module handle the user login.
   */
  if (appConfig.webCheckoutShopify === null) {
    /**
     * Gets triggered when the user did log in.
     */
    subscribe(userDidLogin$, ({ dispatch }) => {
      dispatch(redirectRoute());
    });
  }

  /**
   * Gets triggered when the user did log out.
   */
  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(resetHistory());
  });
}
