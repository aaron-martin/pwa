/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ITEMS_PER_LOAD } from '@shopgate/pwa-common/constants/DisplayOptions';
import { getSortOrder } from '@shopgate/pwa-common/selectors/history';
import getProducts from '../../product/actions/getProducts';
import requestSearchResults from '../action-creators/requestSearchResults';
import receiveSearchResults from '../action-creators/receiveSearchResults';
import errorSearchResults from '../action-creators/errorSearchResults';
import { getSearchPhrase } from '../selectors';

/**
 * Retrieves products for a certain search query.
 * @param {number} offset The offset for the products to request.
 * @return {Function} The dispatched action.
 */
const getSearchResults = (offset = 0) => (dispatch, getState) => {
  const state = getState();
  const limit = ITEMS_PER_LOAD;
  const searchPhrase = getSearchPhrase(state);

  if (!searchPhrase) {
    return;
  }

  const sort = getSortOrder(state);

  const promise = dispatch(getProducts({
    params: {
      searchPhrase,
      offset,
      limit,
      sort,
    },
    onBeforeDispatch: () => {
      // Dispatch the request action before the related pipeline request is executed.
      dispatch(requestSearchResults(searchPhrase, offset));
    },
  }));

  /**
   * Whenever getProducts is able to deliver product data - either via a request or from the cache -
   * it returns a promise which will be resolved with the response data.
   */
  if (promise instanceof Promise) {
    promise.then((response) => {
      // Inspect the response object to determine, if it represents a search result, or an error.
      if (response && response.products && Array.isArray(response.products)) {
        // Dispatch the receive action when the response contains valid data.s
        dispatch(receiveSearchResults(searchPhrase, offset, response));
      } else {
        // If no valid data is delivered within the response the error action is dispatched.
        dispatch(errorSearchResults(searchPhrase, offset));
      }
    });
  }
};

export default getSearchResults;
