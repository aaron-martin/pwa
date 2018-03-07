/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createSelector } from 'reselect';
import sumBy from 'lodash/sumBy';
import {
  getRawProductOptions,
  getCurrentProductOptions,
  hasProductOptions,
  areProductOptionsSet,
} from '../../product/selectors/options';
import { getProductMetadata } from '../../product/selectors/product';
import { getSelectedVariantMetadata } from '../../product/selectors/variants';
import {
  CART_ITEM_TYPE_PRODUCT,
  CART_ITEM_TYPE_COUPON,
  CART_TOTALS_TYPE_SUB,
  CART_TOTALS_TYPE_SHIPPING,
} from '../constants';

/**
 * Selects the cart data from the store.
 * @param {Object} state The current state.
 * @return {Object}
 */
const getCart = state => state.cart;

/**
 * Selects the cartItems from the current cart in the state.
 * @param {Object} state The current state.
 * @return {Array} The cartItems.
 */
const cartItemsSelector = state => state.cart.items;

/**
 * Selects the total amounts stack from the cart data.
 * @param {Object} state The current application state.
 * @return {Object} The total amount stack.
 */
const getTotals = createSelector(
  getCart,
  cart => cart.totals
);

/**
 * Selects all items from the cart.
 * @param {Object} state The current state.
 * @return {Array} The cart items.
 */
export const getCartItems = createSelector(
  cartItemsSelector,
  cartItems => cartItems
);

/**
 * Selects the products from the cart.
 * @param {Object} state The current state.
 * @return {Array} The cart products.
 */
export const getCartProducts = createSelector(
  cartItemsSelector,
  cartItems => cartItems.filter(item => item.type === CART_ITEM_TYPE_PRODUCT)
);

/**
 * Selects the coupons from the cart.
 * @param {Object} state The current state.
 * @return {Array} The cart coupons.
 */
export const getCartCoupons = createSelector(
  cartItemsSelector,
  cartItems => cartItems.filter(item => item.type === CART_ITEM_TYPE_COUPON)
);

/**
 * Calculates the current number of product in the cart.
 * @param {Object} state The current state.
 * @return {number} The current number of products within the cart.
 */
export const getCartProductCount = createSelector(
  cartItemsSelector,
  cartItems => sumBy(
    cartItems,
    cartItem => (cartItem.type === CART_ITEM_TYPE_PRODUCT ? cartItem.quantity : 0)
  ) || 0
);

/**
 * Selects the pending product count from the cart.
 * @param {Object} state The current application state.
 * @return {number}
 */
export const getProductPendingCount = createSelector(
  getCart,
  cart => cart.productPendingCount
);

/**
 * Selects the total, theoretical, number of products in the cart.
 * @param {Object} state The current application state.
 * @return {number}
 */
export const getCartProductDisplayCount = createSelector(
  getCartProductCount,
  getProductPendingCount,
  (productCount, pendingCount) => productCount + pendingCount
);

/**
 * Selects the orderable status from the cart data.
 * @param {Object} state The current application state.
 * @return {boolean}
 */
export const getOrderableStatus = createSelector(
  getCart,
  cart => cart.isOrderable
);

/**
 * Selects the currency from the cart data.
 * @param {Object} state The current application state.
 * @return {string}
 */
export const getCurrency = createSelector(
  getCart,
  cart => cart.currency
);

/**
 * Get specific total by type.
 * @param {Array} totals Array of total objects.
 * @param {string} type Type of the total.
 * @param {number|null} fallbackValue The return value if no total entry is found.
 * @return {number|null}
 */
const getTotalByType = (totals, type, fallbackValue) => {
  const index = totals.findIndex(element => element.type === type);

  if (index === -1) {
    return fallbackValue;
  }

  const { amount = 0 } = totals[index];

  return amount;
};

/**
 * Selects the sub total value the total amounts stack.
 * @param {Object} state The current application state.
 * @return {string}
 */
export const getSubTotal = createSelector(
  getTotals,
  totals => getTotalByType(totals, CART_TOTALS_TYPE_SUB, 0)
);

/**
 * Selects the summed up shipping costs of the cart.
 * @type {number}
 */
export const getShippingCosts = createSelector(
  getTotals,
  totals => getTotalByType(totals, CART_TOTALS_TYPE_SHIPPING, null)
);

/**
 * Selects the received messages from the cart.
 * @param {Object} state The current application state.
 * @return {Array}
 */
export const getCartMessages = createSelector(
  getCart,
  cart => cart.messages
);

/**
 * Builds the data for the 'metadata' property of addProductsToCart pipeline request payload.
 * @returns {Object|null} The data if it was determinable, otherwise NULL.
 */
export const getAddToCartMetadata = createSelector(
  getProductMetadata,
  getSelectedVariantMetadata,
  (metaData, variantMetaData) => {
    if (variantMetaData) {
      // Use the metadata from the getProductVariants data if available.
      return variantMetaData;
    } else if (metaData) {
      // Use the metadata from the selected product if available.
      return metaData;
    }

    return null;
  }
);

/**
 * Builds the data for the 'options' property of addProductsToCart pipeline request payload.
 * @param {Object} state The application state.
 * @returns {Object|null} The data if it was determinable, otherwise NULL.
 */
export const getAddToCartOptions = createSelector(
  hasProductOptions,
  areProductOptionsSet,
  getRawProductOptions,
  getCurrentProductOptions,
  (hasOptions, areOptionsSet, options, currentOptions) => {
    // Check if options are ready to be added to a pipeline request.
    if (!hasOptions || !areOptionsSet) {
      return null;
    }

    // Create the data structure.
    return Object.keys(currentOptions).map((id) => {
      const value = currentOptions[id];
      const { type } = options.find(option => option.id === id);

      return {
        type,
        id,
        value,
      };
    });
  }
);
