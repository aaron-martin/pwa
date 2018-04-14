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
export const routeWillEnter = (route, action) => ({
  type: ROUTE_WILL_ENTER,
  id: route.id,
  route,
  action,
});

/**
 * Creates the dispatched ROUTE_DID_ENTER action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeDidEnter = (route, action) => ({
  type: ROUTE_DID_ENTER,
  id: route.id,
  route,
  action,
});

/**
 * Creates the dispatched ROUTE_WILL_LEAVE action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeWillLeave = (route, action) => ({
  type: ROUTE_WILL_LEAVE,
  id: route.id,
  route,
  action,
});

/**
 * Creates the dispatched ROUTE_DID_LEAVE action object.
 * @param {Object} id The id of the route.
 * @return {Object} The dispatched action object.
 */
export const routeDidLeave = (route, action) => ({
  type: ROUTE_DID_LEAVE,
  id: route.id,
  route,
  action,
});
