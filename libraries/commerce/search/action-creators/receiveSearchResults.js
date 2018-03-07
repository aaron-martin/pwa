/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RECEIVE_SEARCH_RESULTS } from '../constants';

/**
 * Creates the dispatched RECEIVE_SEARCH_RESULTS action object.
 * @param {string} searchPhrase The search phrase.
 * @param {number} offset The result offset.
 * @param {Object} results The search results.
 * @return {Object} The RECEIVE_SEARCH_RESULTS action.
 */
const receiveSearchResults = (searchPhrase, offset, results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchPhrase,
  offset,
  results,
});

export default receiveSearchResults;
