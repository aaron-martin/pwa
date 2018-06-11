import { routeDidEnter$, routeDidLeave$ } from '@shopgate/pwa-common/streams/router';
import { FILTER_PATH } from '../constants';

export const filterRouteDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pattern === FILTER_PATH);

export const filterRouteDidLeave$ = routeDidLeave$
  .filter(({ action }) => action.route.pattern === FILTER_PATH);
