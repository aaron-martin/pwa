/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import { SORT_RELEVANCE } from '@shopgate/pwa-common/constants/DisplayOptions';
import requestProductReviews from '../action-creators/requestProductReviews';
import receiveProductReviews from '../action-creators/receiveProductReviews';
import errorProductReviews from '../action-creators/errorProductReviews';

/**
 * Request product reviews for a product from server.
 * @param {string} productId The product ID
 * @param {number} limit The maximum number of reviews to fetch
 * @param {('relevance'|'dateDesc'|'dateAsc'|'rateDesc'|'rateAsc')} sort Sorting.
 * @returns {Function} The dispatched action.
 */
const getProductReviews = (productId, limit = 2, sort = SORT_RELEVANCE) => (dispatch) => {
  dispatch(requestProductReviews(productId, limit));

  const request = new PipelineRequest('getProductReviews')
    .setInput({
      productId,
      limit,
      sort,
    })
    .dispatch();

  request
    .then((result) => {
      dispatch(receiveProductReviews(productId, result.reviews, result.totalReviewCount));
    })
    .catch((error) => {
      logger.error(error);
      dispatch(errorProductReviews(productId));
    });

  return request;
};

export default getProductReviews;

