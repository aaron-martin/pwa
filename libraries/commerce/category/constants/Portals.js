/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// FEATURES
const CATEGORY = 'category';
const PRODUCT = 'product';
const NAV_MENU = 'nav-menu';

// CONTENTS
const LIST = 'list';
const ITEM = 'item';
const IMAGE = 'image';
const PRICE = 'price';
const DISCOUNT = 'discount';
const FAVORITES_BUTTON = 'favorites-button';
const NAME = 'name';
const MANUFACTURER = 'manufacturer';
const AVAILABILITY = 'availability';
const CATEGORIES = 'categories';

// POSITIONS
const BEFORE = 'before';
const AFTER = 'after';

export const CATEGORY_LIST = `${CATEGORY}.${LIST}`;
export const CATEGORY_LIST_BEFORE = `${CATEGORY}.${LIST}.${BEFORE}`;
export const CATEGORY_LIST_AFTER = `${CATEGORY}.${LIST}.${AFTER}`;

export const CATEGORY_ITEM = `${CATEGORY}.${ITEM}`;

export const PRODUCT_LIST = `${PRODUCT}.${LIST}`;
export const PRODUCT_LIST_BEFORE = `${PRODUCT}.${LIST}.${BEFORE}`;
export const PRODUCT_LIST_AFTER = `${PRODUCT}.${LIST}.${AFTER}`;

export const PRODUCT_ITEM_BEFORE = `${PRODUCT}.${ITEM}.${BEFORE}`;
export const PRODUCT_ITEM = `${PRODUCT}.${ITEM}`;
export const PRODUCT_ITEM_AFTER = `${PRODUCT}.${ITEM}.${AFTER}`;

export const PRODUCT_ITEM_IMAGE_BEFORE = `${PRODUCT}-${ITEM}.${IMAGE}.${BEFORE}`;
export const PRODUCT_ITEM_IMAGE = `${PRODUCT}-${ITEM}.${IMAGE}`;
export const PRODUCT_ITEM_IMAGE_AFTER = `${PRODUCT}-${ITEM}.${IMAGE}.${AFTER}`;

export const PRODUCT_ITEM_DISCOUNT_BEFORE = `${PRODUCT}-${ITEM}.${DISCOUNT}.${BEFORE}`;
export const PRODUCT_ITEM_DISCOUNT = `${PRODUCT}-${ITEM}.${DISCOUNT}`;
export const PRODUCT_ITEM_DISCOUNT_AFTER = `${PRODUCT}-${ITEM}.${DISCOUNT}.${AFTER}`;

export const PRODUCT_ITEM_FAVORITES_BUTTON_BEFORE = `${PRODUCT}-${ITEM}.${FAVORITES_BUTTON}.${BEFORE}`;
export const PRODUCT_ITEM_FAVORITES_BUTTON = `${PRODUCT}-${ITEM}.${FAVORITES_BUTTON}`;
export const PRODUCT_ITEM_FAVORITES_BUTTON_AFTER = `${PRODUCT}-${ITEM}.${FAVORITES_BUTTON}.${AFTER}`;

export const PRODUCT_ITEM_NAME_BEFORE = `${PRODUCT}-${ITEM}.${NAME}.${BEFORE}`;
export const PRODUCT_ITEM_NAME = `${PRODUCT}-${ITEM}.${NAME}`;
export const PRODUCT_ITEM_NAME_AFTER = `${PRODUCT}-${ITEM}.${NAME}.${AFTER}`;

export const PRODUCT_ITEM_PRICE_BEFORE = `${PRODUCT}-${ITEM}.${PRICE}.${BEFORE}`;
export const PRODUCT_ITEM_PRICE = `${PRODUCT}-${ITEM}.${PRICE}`;
export const PRODUCT_ITEM_PRICE_AFTER = `${PRODUCT}-${ITEM}.${PRICE}.${AFTER}`;

export const PRODUCT_ITEM_MANUFACTURER_BEFORE = `${PRODUCT}-${ITEM}.${MANUFACTURER}.${BEFORE}`;
export const PRODUCT_ITEM_MANUFACTURER = `${PRODUCT}-${ITEM}.${MANUFACTURER}`;
export const PRODUCT_ITEM_MANUFACTURER_AFTER = `${PRODUCT}-${ITEM}.${MANUFACTURER}.${AFTER}`;

export const PRODUCT_ITEM_AVAILABILITY_BEFORE = `${PRODUCT}-${ITEM}.${AVAILABILITY}.${BEFORE}`;
export const PRODUCT_ITEM_AVAILABILITY = `${PRODUCT}-${ITEM}.${AVAILABILITY}`;
export const PRODUCT_ITEM_AVAILABILITY_AFTER = `${PRODUCT}-${ITEM}.${AVAILABILITY}.${AFTER}`;

export const NAV_MENU_CATEGORIES_BEFORE = `${NAV_MENU}.${CATEGORIES}.${BEFORE}`;
export const NAV_MENU_CATEGORIES = `${NAV_MENU}.${CATEGORIES}`;
export const NAV_MENU_CATEGORIES_AFTER = `${NAV_MENU}.${CATEGORIES}.${AFTER}`;
