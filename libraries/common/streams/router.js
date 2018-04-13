import getRouteById from '@virtuous/conductor-helpers/getRouteById';
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
