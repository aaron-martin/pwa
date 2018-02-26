/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import conductor from '@virtuous/conductor';
import appConfig from '../helpers/config';
import redirectRoute from '../actions/history/redirectRoute';
import resetHistory from '../actions/history/resetHistory';
import fetchRegisterUrl from '../actions/user/fetchRegisterUrl';
import goBackHistory from '../actions/history/goBackHistory';
import { getRegisterUrl } from '../selectors/user';
import ParsedLink from '../components/Router/helpers/parsed-link';
import {
  openedRegisterLink$,
  routeDidLeave,
  navigate$,
} from '../streams/history';
import {
  userDidLogin$,
  userDidLogout$,
} from '../streams/user';
import openRegisterUrl from './helpers/openRegisterUrl';
import { LEGACY_URL } from '../constants/Registration';
import { setRedirectLocation } from '../action-creators/history';
import {
  LOGIN_PATH,
  REGISTER_PATH,
} from '../constants/RoutePaths';
import { getCurrentPathname } from '../selectors/router';

/**
 * History subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function history(subscribe) {
  /**
   * Gets triggered when the intends to navigate.
   */
  subscribe(navigate$, ({ action, getState }) => {
    const { action: historyAction, location, state } = action;
    const currentPathname = getCurrentPathname(getState());

    if (historyAction === 'POP') {
      // TODO: Take care when there is nothing to pop back to (replace to homepage?)
      conductor.pop();
    } else if (historyAction === 'PUSH') {
      if (currentPathname !== location) {
        conductor.push(location, state);
      }
    } else if (historyAction === 'REPLACE') {
      if (currentPathname !== location) {
        conductor.replace(location, state);
      }
    }
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

  /**
   * Gets triggered when the register link is opened.
   */
  subscribe(openedRegisterLink$, async ({ dispatch, getState }) => {
    const state = getState();

    const hasRegistrationUrl = !!getRegisterUrl(state);

    // Open the registration url if one is found.
    if (hasRegistrationUrl) {
      await dispatch(fetchRegisterUrl())
        .then(url => openRegisterUrl(url, state))
        .catch(e => e);
    } else {
      const link = new ParsedLink(LEGACY_URL);
      link.open();
    }

    dispatch(goBackHistory(1));
  });

  /**
   * Gets triggered when the LOGIN_PATH is left but the REGISTER_PATH is not entered.
   */
  const loginRouteDidLeave$ = routeDidLeave(LOGIN_PATH).filter(({ pathname }) => (
    pathname !== REGISTER_PATH
  ));

  subscribe(loginRouteDidLeave$, ({ dispatch }) => {
    dispatch(setRedirectLocation(null));
  });
}
