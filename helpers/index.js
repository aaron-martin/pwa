/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import core from '@shopgate/tracking-core/core/Core';
import { logger } from '@shopgate/pwa-core/helpers';

/**
 * Converts a price to a formatted string.
 * @param {number} price The original price.
 * @return {string|*} The converted price or the original value, if the price was not convertible.
 */
export const convertPriceToString = (price) => {
  if (typeof price === 'number') {
    return price.toFixed(2);
  }

  return price;
};

/**
 * Re-format a given product form the store.
 * @param {Object} productData The product data from the store
 * @returns {Object|null} The formatted product.
 */
export const formatProductData = (productData) => {
  if (!productData) {
    return null;
  }

  const { id, name, price, manufacturer, tags = [], stock } = productData;

  return {
    name,
    manufacturer,
    tags,
    stock,
    uid: id,
    amount: {
      net: convertPriceToString(price.unitPriceNet),
      gross: convertPriceToString(price.unitPriceWithTax),
      striked: convertPriceToString(price.unitPriceStriked),
      currency: price.currency,
    },
  };
};

/**
 * Reformat product data for addToCart from the store to the format our core expects.
 * @param {Object} product Product from the store
 * @param {Object} quantity Quantity of the product
 * @return {Object}
 */
export const formatAddToCartProductData = ({ product, quantity }) => ({
  ...formatProductData(product),
  quantity,
});

/**
 * Reformat product data from the store to the format our core expects.
 * @param {Object} product Product from the store
 * @param {Object} quantity Quantity of the product
 * @return {Object}
 */
export const formatCartProductData = ({ product, quantity }) => ({
  uid: product.id,
  name: product.name,
  amount: {
    gross: convertPriceToString(product.price.unit),
  },
  quantity,
});

/**
 * Helper to pass the redux state to the tracking core
 * @param {string} event The name of the event.
 * @param {Object} data The tracking data of the event.
 * @param {Object} state The current redux state.
 * @return {Core|boolean}
 */
export const track = (event, data, state) => {
  if (typeof core.track[event] !== 'function') {
    logger.warn('Unknown tracking event:', event);
    return false;
  }

  return core.track[event](data, undefined, undefined, state);
};
