/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const CART_PATH = '/cart';

export const CART_ITEM_TYPE_COUPON = 'coupon';
export const CART_ITEM_TYPE_PRODUCT = 'product';
export const CART_TOTALS_TYPE_SUB = 'subTotal';
export const CART_TOTALS_TYPE_SHIPPING = 'shipping';
export const COUPON_TYPE_FIXED = 'fixed';
export const COUPON_TYPE_PERCENTAGE = 'percentage';

export const COUPON_PUSH_NOTIFICATION = 'cart_add_coupon';

export const ADD_PRODUCTS_TO_CART = 'ADD_PRODUCTS_TO_CART';
export const SUCCESS_ADD_PRODUCTS_TO_CART = 'SUCCESS_ADD_PRODUCTS_TO_CART';
export const ERROR_ADD_PRODUCTS_TO_CART = 'ERROR_ADD_PRODUCTS_TO_CART';
export const DELETE_PRODUCTS_FROM_CART = 'DELETE_PRODUCTS_FROM_CART';
export const ERROR_DELETE_PRODUCTS_FROM_CART = 'ERROR_DELETE_PRODUCTS_FROM_CART';
export const SUCCESS_DELETE_PRODUCTS_FROM_CART = 'SUCCESS_DELETE_PRODUCTS_FROM_CART';
export const UPDATE_PRODUCTS_IN_CART = 'UPDATE_PRODUCTS_IN_CART';
export const SUCCESS_UPDATE_PRODUCTS_IN_CART = 'SUCCESS_UPDATE_PRODUCTS_IN_CART';
export const ERROR_UPDATE_PRODUCTS_IN_CART = 'ERROR_UPDATE_PRODUCTS_IN_CART';
export const ADD_COUPONS_TO_CART = 'ADD_COUPONS_TO_CART';
export const SUCCESS_ADD_COUPONS_TO_CART = 'SUCCESS_ADD_COUPONS_TO_CART';
export const ERROR_ADD_COUPONS_TO_CART = 'ERROR_ADD_COUPONS_TO_CART';
export const DELETE_COUPONS_FROM_CART = 'DELETE_COUPONS_FROM_CART';
export const ERROR_DELETE_COUPONS_FROM_CART = 'ERROR_DELETE_COUPONS_FROM_CART';
export const SET_CART_PENDING_PRODUCT_COUNT = 'SET_CART_PENDING_PRODUCT_COUNT';
export const SUCCESS_DELETE_COUPONS_FROM_CART = 'SUCCESS_DELETE_COUPONS_FROM_CART';

export const REQUEST_CART = 'REQUEST_CART';
export const RECEIVE_CART = 'RECEIVE_CART';
export const ERROR_CART = 'ERROR_CART';

/**
 * Event that is called when addToCart failed because not all variants where selected yet.
 * @type {string}
 */
export const EVENT_ADD_TO_CART_MISSING_VARIANT = 'EVENT_ADD_TO_CART_MISSING_VARIANT';
