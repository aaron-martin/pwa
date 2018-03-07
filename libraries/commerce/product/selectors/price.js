/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createSelector } from 'reselect';
import { validateSelectorParams } from '@shopgate/pwa-common/helpers/data';
import {
  getCurrentProduct,
  getProductBasePrice,
} from '../selectors/product';
import {
  getCurrentProductOptions,
  getRawProductOptions,
  hasProductOptions,
  areProductOptionsSet,
} from '../selectors/options';
import {
  hasCurrentProductVariants,
  isProductChildrenSelected,
} from '../selectors/variants';

/**
 * Calculates the additional price for the current product.
 * @param {Object} state The application state.
 * @returns {number}
 */
export const getProductPriceAddition = createSelector(
  getCurrentProductOptions,
  getRawProductOptions,
  validateSelectorParams(
    (currentOptions, productOptions) => {
      // Get all item modifiers.
      const modifiers = Object.keys(currentOptions).map((optionId) => {
        const itemId = currentOptions[optionId];
        const optionItems = productOptions.find(item => item.id === optionId).values;
        const selectedItem = optionItems.find(item => item.id === itemId);

        return selectedItem.unitPriceModifier;
      });

      // Sum up all active option item modifiers to calculate the additional price of the product.
      return modifiers.reduce((a, b) => a + b, 0);
    },
    // If product has no options return 0
    0
  )
);
/**
 * Calculates the total price by summing up additional product option costs.
 * @param {Object} state The application state.
 * @returns {number}
 */
export const getProductTotalPrice = createSelector(
  getProductBasePrice,
  getProductPriceAddition,
  validateSelectorParams((basePrice, priceAddition) => basePrice + priceAddition)
);

/**
 * Checks if the full price is already available.
 * When a product has variants with different prices the full price is not available.
 * If the children is selected the full price is available.
 * @param {Object} state The application state.
 * @returns {boolean} The product options.
 */
export const isFullPriceAvailable = createSelector(
  hasCurrentProductVariants,
  isProductChildrenSelected,
  hasProductOptions,
  areProductOptionsSet,
  (hasVariants, isChildrenSelected, hasOptions, areOptionsSet) => {
    // If product has neither variants nor options the full price is available.
    if (!hasVariants && !hasOptions) {
      return true;
    }

    /**
     * If the product has variants and options,
     * the full price is only available if options and children are set.
     */
    if (hasVariants && hasOptions) {
      return isChildrenSelected && areOptionsSet;
    }

    /**
     * If the product has only options,
     * the full price is only available if the options are set.
     */
    if (!hasVariants && hasOptions) {
      return areOptionsSet;
    }

    /**
     * If the product has only variants,
     * the full price is only available if the children is set.
     */
    if (hasVariants && !hasOptions) {
      return isChildrenSelected;
    }

    return false;
  }
);

/**
 * Retrieves the current product and adds the total price and manipulates the min price
 * to be always 0 when it is not needed.
 * @param {Object} state The application state.
 * @returns {Object} The extended product data.
 */
export const getCalculatedProduct = createSelector(
  getCurrentProduct,
  getProductTotalPrice,
  isFullPriceAvailable,
  validateSelectorParams((product, totalPrice, hasFullPrice) => ({
    ...product,
    price: {
      ...product.price,
      totalPrice,
      // A min price of 0 signals that the full price can be displayed, @see Price component
      unitPriceMin: !hasFullPrice ? product.price.unitPriceMin : 0,
    },
  }))
);

/**
 * Retrieves the current product price data.
 * @param {Object} state The current application state.
 * @return {Object|null}
 */
export const getProductPrice = createSelector(
  getCalculatedProduct,
  (product) => {
    if (!product || !product.price) {
      return null;
    }

    return product.price;
  }
);
