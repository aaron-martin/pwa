/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const CART = 'cart';
const NAV_MENU = 'nav-menu';

const ITEM_LIST = 'item-list';
const ITEM = 'item';
const PAYMENT_BAR = 'payment-bar';
const COUPON_FIELD = 'coupon-field';

const NAME = 'name';
const IMAGE = 'image';
const PRICE = 'price';
const PRICE_STRIKED = 'price-striked';
const COUPON_CODE = 'coupon-code';

const BEFORE = 'before';
const AFTER = 'after';

export const CART_COUPON_FIELD_BEFORE = `${CART}.${COUPON_FIELD}.${BEFORE}`;
export const CART_COUPON_FIELD = `${CART}.${COUPON_FIELD}`;
export const CART_COUPON_FIELD_AFTER = `${CART}.${COUPON_FIELD}.${AFTER}`;

export const CART_ITEM_LIST_BEFORE = `${CART}.${ITEM_LIST}.${BEFORE}`;
export const CART_ITEM_LIST = `${CART}.${ITEM_LIST}`;
export const CART_ITEM_LIST_AFTER = `${CART}.${ITEM_LIST}.${AFTER}`;

export const CART_ITEM_BEFORE = `${CART}.${ITEM}.${BEFORE}`;
export const CART_ITEM = `${CART}.${ITEM}`;
export const CART_ITEM_AFTER = `${CART}.${ITEM}.${AFTER}`;

export const CART_ITEM_NAME_BEFORE = `${CART}.${ITEM}.${NAME}.${BEFORE}`;
export const CART_ITEM_NAME = `${CART}.${ITEM}.${NAME}`;
export const CART_ITEM_NAME_AFTER = `${CART}.${ITEM}.${NAME}.${AFTER}`;

export const CART_ITEM_IMAGE_BEFORE = `${CART}.${ITEM}.${IMAGE}.${BEFORE}`;
export const CART_ITEM_IMAGE = `${CART}.${ITEM}.${IMAGE}`;
export const CART_ITEM_IMAGE_AFTER = `${CART}.${ITEM}.${IMAGE}.${AFTER}`;

export const CART_ITEM_PRICE_BEFORE = `${CART}.${ITEM}.${PRICE}.${BEFORE}`;
export const CART_ITEM_PRICE = `${CART}.${ITEM}.${PRICE}`;
export const CART_ITEM_PRICE_AFTER = `${CART}.${ITEM}.${PRICE}.${AFTER}`;

export const CART_ITEM_PRICE_STRIKED_BEFORE = `${CART}.${ITEM}.${PRICE_STRIKED}.${BEFORE}`;
export const CART_ITEM_PRICE_STRIKED = `${CART}.${ITEM}.${PRICE_STRIKED}`;
export const CART_ITEM_PRICE_STRIKED_AFTER = `${CART}.${ITEM}.${PRICE_STRIKED}.${AFTER}`;

export const CART_ITEM_COUPON_CODE_BEFORE = `${CART}.${ITEM}.${COUPON_CODE}.${BEFORE}`;
export const CART_ITEM_COUPON_CODE = `${CART}.${ITEM}.${COUPON_CODE}`;
export const CART_ITEM_COUPON_CODE_AFTER = `${CART}.${ITEM}.${COUPON_CODE}.${AFTER}`;

export const CART_PAYMENT_BAR_BEFORE = `${CART}.${PAYMENT_BAR}.${BEFORE}`;
export const CART_PAYMENT_BAR = `${CART}.${PAYMENT_BAR}`;
export const CART_PAYMENT_BAR_AFTER = `${CART}.${PAYMENT_BAR}.${AFTER}`;

export const NAV_MENU_CART_BEFORE = `${NAV_MENU}.${CART}.${BEFORE}`;
export const NAV_MENU_CART = `${NAV_MENU}.${CART}`;
export const NAV_MENU_CART_AFTER = `${NAV_MENU}.${CART}.${AFTER}`;
