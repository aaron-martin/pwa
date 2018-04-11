import {
  ROUTE_WILL_ENTER,
  ROUTE_DID_ENTER,
  ROUTE_WILL_LEAVE,
  ROUTE_DID_LEAVE,
} from '../../constants/ActionTypes';

/**
 * Creates the dispatched ROUTE_WILL_ENTER action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeWillEnter = id => ({
  type: ROUTE_WILL_ENTER,
  id,
});

/**
 * Creates the dispatched ROUTE_DID_ENTER action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeDidEnter = id => ({
  type: ROUTE_DID_ENTER,
  id,
});

/**
 * Creates the dispatched ROUTE_WILL_LEAVE action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeWillLeave = id => ({
  type: ROUTE_WILL_LEAVE,
  id,
});

/**
 * Creates the dispatched ROUTE_DID_LEAVE action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeDidLeave = id => ({
  type: ROUTE_DID_LEAVE,
  id,
});