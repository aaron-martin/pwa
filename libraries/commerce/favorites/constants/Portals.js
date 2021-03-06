/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// FEATURES
const NAV_MENU = 'nav-menu';

// CONTENTS
const FAVORITES = 'favorites';
const ADD_TO_CART = 'add-to-cart';

// POSITIONS
const BEFORE = 'before';
const AFTER = 'after';

export const NAV_MENU_FAVORITES_BEFORE = `${NAV_MENU}.${FAVORITES}.${BEFORE}`;
export const NAV_MENU_FAVORITES = `${NAV_MENU}.${FAVORITES}`;
export const NAV_MENU_FAVORITES_AFTER = `${NAV_MENU}.${FAVORITES}.${AFTER}`;

export const FAVORITES_ADD_TO_CART_BEFORE = `${FAVORITES}.${ADD_TO_CART}.${BEFORE}`;
export const FAVORITES_ADD_TO_CART = `${FAVORITES}.${ADD_TO_CART}`;
export const FAVORITES_ADD_TO_CART_AFTER = `${FAVORITES}.${ADD_TO_CART}.${AFTER}`;
