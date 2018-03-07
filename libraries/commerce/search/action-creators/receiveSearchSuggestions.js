/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RECEIVE_SEARCH_SUGGESTIONS } from '../constants';

/**
 * Creates the dispatched RECEIVE_SEARCH_SUGGESTIONS action object.
 * @param {string} searchPhrase The search phrase.
 * @param {Array} suggestions Array of strings. The suggestions for the search phrase.
 * @return {Object} The RECEIVE_SEARCH_SUGGESTIONS action.
 */
const receiveSearchSuggestions = (searchPhrase, suggestions) => ({
  type: RECEIVE_SEARCH_SUGGESTIONS,
  searchPhrase,
  suggestions,
});

export default receiveSearchSuggestions;
