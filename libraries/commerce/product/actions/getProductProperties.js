/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import requestProductProperties from '../action-creators/requestProductProperties';
import receiveProductProperties from '../action-creators/receiveProductProperties';
import errorProductProperties from '../action-creators/errorProductProperties';

/**
 * Maybe requests a product description from server.
 * @param {string} productId The product ID.
 * @return {Function} The dispatched action.
 */
const getProductProperties = productId => (dispatch, getState) => {
  const state = getState();
  const properties = state.product.propertiesByProductId[productId];

  if (!shouldFetchData(properties)) {
    return;
  }

  dispatch(requestProductProperties(productId));

  new PipelineRequest('getProductProperties')
    .setInput({ productId })
    .dispatch()
    .then(result => dispatch(receiveProductProperties(productId, result.properties)))
    .catch((error) => {
      logger.error(error);
      dispatch(errorProductProperties(productId));
    });
};

export default getProductProperties;
