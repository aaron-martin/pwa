/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import fetchCategoryChildren from './fetchCategoryChildren';
import requestCategory from '../action-creators/requestCategory';
import receiveCategory from '../action-creators/receiveCategory';
import errorCategory from '../action-creators/errorCategory';

/**
 * Fetches the data for a given category ID (including child categories).
 * @param {string} categoryId The category ID.
 * @return {Function} The dispatched action.
 */
const fetchCategory = categoryId => (dispatch, getState) => {
  const state = getState();
  const category = state.category.categoriesById[categoryId];

  if (!shouldFetchData(category)) {
    /**
     * Child categories are maybe missing.
     * So we need to check it (check happens inside fetchCategoryChildren).
     * This is the case if we got categories from getRootCategory
    */
    dispatch(fetchCategoryChildren(categoryId));
    return;
  }

  // No data at all. So we have the fetch the category with children included
  dispatch(requestCategory(categoryId));

  new PipelineRequest('getCategory')
    .setInput({
      categoryId,
      includeChildren: true,
    })
    .dispatch()
    .then(result => dispatch(receiveCategory(categoryId, result, (result.children || []))))
    .catch((error) => {
      logger.error(error);
      dispatch(errorCategory(categoryId));
    });
};

export default fetchCategory;
