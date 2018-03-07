/**
 * Copyright (c) 2017 - present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import {
  requestAddFavorites,
  requestRemoveFavorites,
  requestSyncFavorites,
  receiveSyncFavorites,
  errorSyncFavorites,
  idleSyncFavorites,
} from '../action-creators';
import {
  getProductRelativesOnFavorites,
  getFavoritesProductsIds,
} from '../selectors/';

let syncPendingCount = 0;
let syncInProgress = false;

/**
 * Sends putFavorites requests. Maintains queue and throttling.
 * @returns {function}
 */
export const requestSync = () => (dispatch, getState) => {
  // Syncing in progress. Will request next one on response.
  if (syncInProgress) {
    return;
  }
  // Nothing to sync. Dispatching idle to trigger stream.
  if (!syncPendingCount) {
    dispatch(idleSyncFavorites());
    return;
  }

  // Reset pending count since we always send entire list.
  // Whatever was added before is being synced now.
  syncPendingCount = 0;
  syncInProgress = true;
  const state = getState();
  dispatch(requestSyncFavorites());
  new PipelineRequest('putFavorites')
    .setInput({ productIds: getFavoritesProductsIds(state) })
    .dispatch()
    .then(() => {
      dispatch(receiveSyncFavorites());
      syncInProgress = false;
      // Calling self to check is something maybe changed since last sync request.
      dispatch(requestSync());
    })
    .catch(() => {
      dispatch(errorSyncFavorites());
      syncInProgress = false;
      dispatch(requestSync());
    });
};

/**
 * Add favorites action.
 * @param {string} productId Product identifier.
 * @returns {Promise} PipelineRequest dispatch.
 */
const addFavorites = productId => (dispatch) => {
  dispatch(requestAddFavorites(productId));
  syncPendingCount += 1;
  dispatch(requestSync());
};
/**
 * Removes single product from favorites.
 * @param {string} productId Product id.
 * @param {function} dispatch Disaptch function.
 */
const removeProductFromFavorites = (productId, dispatch) => {
  dispatch(requestRemoveFavorites(productId));
  syncPendingCount += 1;
  dispatch(requestSync());
};

/**
 * Remove favorites action.
 * @param {string} productId Product identifier.
 * @param {bool} withRelatives When true relatives which are on list are also removed.
 * @returns {Promise} PipelineRequest dispatch.
 */
const removeFavorites = (productId, withRelatives = false) => (dispatch, getState) => {
  if (withRelatives) {
    const allIds = getProductRelativesOnFavorites(getState(), productId);
    allIds.forEach(id => removeProductFromFavorites(id, dispatch, getState));
    return;
  }
  removeProductFromFavorites(productId, dispatch);
};

export {
  addFavorites,
  removeFavorites,
};
