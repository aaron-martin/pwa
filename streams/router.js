/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  NAVIGATE,
  ROUTE_WILL_ENTER,
  ROUTE_DID_ENTER,
  ROUTE_WILL_LEAVE,
  ROUTE_DID_LEAVE,
} from '../constants/ActionTypes';
import { main$ } from './main';

/**
 * @type {Observable}
 */
export const navigate$ = main$
  .filter(({ action }) => action.type === NAVIGATE);

/**
 * @type {Observable}
 */
export const conductorDidPush$ = main$
  .filter(({ action }) => action.type === 'CONDUCTOR_PUSH');

/**
 * @type {Observable}
 */
export const routeWillEnter$ = main$
  .filter(({ action }) => action.type === ROUTE_WILL_ENTER);

/**
 * @type {Observable}
 */
export const routeDidEnter$ = main$
  .filter(({ action }) => action.type === ROUTE_DID_ENTER);

/**
 * @type {Observable}
 */
export const routeWillLeave$ = main$
  .filter(({ action }) => action.type === ROUTE_WILL_LEAVE);

/**
 * @type {Observable}
 */
export const routeDidLeave$ = main$
  .filter(({ action }) => action.type === ROUTE_DID_LEAVE);
