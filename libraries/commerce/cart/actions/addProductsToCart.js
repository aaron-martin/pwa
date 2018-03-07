/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import { getCurrentFormattedOptions } from '../../product/selectors/options';
import addProductsToCart from '../action-creators/addProductsToCart';
import successAddProductsToCart from '../action-creators/successAddProductsToCart';
import errorAddProductsToCart from '../action-creators/errorAddProductsToCart';
import setCartProductPendingCount from '../action-creators/setCartProductPendingCount';
import { getProductPendingCount } from '../selectors';

/**
 * Adds a product to the cart.
 * @param {Array} productData The options for the products to be added.
 * @return {Function} A redux thunk.
 */
const addToCart = productData => (dispatch, getState) => {
  const state = getState();
  const pendingProductCount = getProductPendingCount(state);
  const productOptions = getCurrentFormattedOptions(state);

  const cartData = [{
    ...productData[0],
    ...productOptions && { properties: productOptions },
  }];

  dispatch(addProductsToCart(cartData));
  dispatch(setCartProductPendingCount(pendingProductCount + 1));

  new PipelineRequest('addProductsToCart')
    .setInput({ products: cartData })
    .dispatch()
    .then(({ messages }) => {
      dispatch(successAddProductsToCart());

      if (messages) {
        /**
         * If the addProductsToCart request fails, the pipeline doesn't respond with an error,
         * but a messages array within the response payload. So by now we also have to dispatch
         * the error action here.
         */
        dispatch(errorAddProductsToCart(cartData, messages));
      }
    })
    .catch((error) => {
      dispatch(errorAddProductsToCart(cartData));
      logger.error('addProductsToCart', error);
    });
};

export default addToCart;
