/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// FEATURES
const PRODUCT_ITEM = 'product-item';
const PRODUCT = 'product';

// CONTENTS
const IMAGE = 'image';
const HEADER = 'header';
const VARIANT_SELECT = 'variant-select';
const OPTIONS = 'options';
const DESCRIPTION = 'description';
const PROPERTIES = 'properties';
const REVIEWS = 'reviews';
const TAX_DISCLAIMER = 'tax-disclaimer';
const CTAS = 'ctas';
const ADD_TO_CART_CTA = 'add-to-cart-cta';
const RATING = 'rating';
const NAME = 'name';
const INFO = 'info';
const MANUFACTURER = 'manufacturer';
const SHIPPING = 'shipping';
const AVAILABILITY = 'availability';
const PRICE_STRIKED = 'price-striked';
const PRICE = 'price';
const PRICE_INFO = 'price-info';
const TIERS = 'tiers';

// POSITIONS
const BEFORE = 'before';
const AFTER = 'after';
const ROW1 = 'row1';
const ROW2 = 'row2';

/* PRODUCT ITEM */

export const PRODUCT_ITEM_NAME_BEFORE = `${PRODUCT_ITEM}.${NAME}.${BEFORE}`;

/* PRODUCT DETAILS */

// IMAGE
export const PRODUCT_IMAGE_BEFORE = `${PRODUCT}.${IMAGE}.${BEFORE}`;
export const PRODUCT_IMAGE = `${PRODUCT}.${IMAGE}`;
export const PRODUCT_IMAGE_AFTER = `${PRODUCT}.${IMAGE}.${AFTER}`;

// HEADER
export const PRODUCT_HEADER_BEFORE = `${PRODUCT}.${HEADER}.${BEFORE}`;
export const PRODUCT_HEADER = `${PRODUCT}.${HEADER}`;
export const PRODUCT_HEADER_AFTER = `${PRODUCT}.${HEADER}.${AFTER}`;

// CTAs
export const PRODUCT_CTAS_BEFORE = `${PRODUCT}.${CTAS}.${BEFORE}`;
export const PRODUCT_CTAS = `${PRODUCT}.${CTAS}`;
export const PRODUCT_CTAS_AFTER = `${PRODUCT}.${CTAS}.${AFTER}`;

// AddToCartButton
export const PRODUCT_ADD_TO_CART_CTA_BEFORE = `${PRODUCT}.${ADD_TO_CART_CTA}.${BEFORE}`;
export const PRODUCT_ADD_TO_CART_CTA = `${PRODUCT}.${ADD_TO_CART_CTA}`;
export const PRODUCT_ADD_TO_CART_CTA_AFTER = `${PRODUCT}.${ADD_TO_CART_CTA}.${AFTER}`;

// RATING
export const PRODUCT_RATING_BEFORE = `${PRODUCT}.${RATING}.${BEFORE}`;
export const PRODUCT_RATING = `${PRODUCT}.${RATING}`;
export const PRODUCT_RATING_AFTER = `${PRODUCT}.${RATING}.${AFTER}`;

// NAME
export const PRODUCT_NAME_BEFORE = `${PRODUCT}.${NAME}.${BEFORE}`;
export const PRODUCT_NAME = `${PRODUCT}.${NAME}`;
export const PRODUCT_NAME_AFTER = `${PRODUCT}.${NAME}.${AFTER}`;

// INFO
export const PRODUCT_INFO_BEFORE = `${PRODUCT}.${INFO}.${BEFORE}`;
export const PRODUCT_INFO = `${PRODUCT}.${INFO}`;
export const PRODUCT_INFO_ROW1 = `${PRODUCT}.${INFO}.${ROW1}`;
export const PRODUCT_INFO_ROW2 = `${PRODUCT}.${INFO}.${ROW2}`;
export const PRODUCT_INFO_AFTER = `${PRODUCT}.${INFO}.${AFTER}`;

// MANUFACTURER
export const PRODUCT_MANUFACTURER_BEFORE = `${PRODUCT}.${MANUFACTURER}.${BEFORE}`;
export const PRODUCT_MANUFACTURER = `${PRODUCT}.${MANUFACTURER}`;
export const PRODUCT_MANUFACTURER_AFTER = `${PRODUCT}.${MANUFACTURER}.${AFTER}`;

// SHIPPING
export const PRODUCT_SHIPPING_BEFORE = `${PRODUCT}.${SHIPPING}.${BEFORE}`;
export const PRODUCT_SHIPPING = `${PRODUCT}.${SHIPPING}`;
export const PRODUCT_SHIPPING_AFTER = `${PRODUCT}.${SHIPPING}.${AFTER}`;

// AVAILABILITY
export const PRODUCT_AVAILABILITY_BEFORE = `${PRODUCT}.${AVAILABILITY}.${BEFORE}`;
export const PRODUCT_AVAILABILITY = `${PRODUCT}.${AVAILABILITY}`;
export const PRODUCT_AVAILABILITY_AFTER = `${PRODUCT}.${AVAILABILITY}.${AFTER}`;

// PRICE STRIKED
export const PRODUCT_PRICE_STRIKED_BEFORE = `${PRODUCT}.${PRICE_STRIKED}.${BEFORE}`;
export const PRODUCT_PRICE_STRIKED = `${PRODUCT}.${PRICE_STRIKED}`;
export const PRODUCT_PRICE_STRIKED_AFTER = `${PRODUCT}.${PRICE_STRIKED}.${AFTER}`;

// PRICE
export const PRODUCT_PRICE_BEFORE = `${PRODUCT}.${PRICE}.${BEFORE}`;
export const PRODUCT_PRICE = `${PRODUCT}.${PRICE}`;
export const PRODUCT_PRICE_AFTER = `${PRODUCT}.${PRICE}.${AFTER}`;

// PRICE INFO
export const PRODUCT_PRICE_INFO_BEFORE = `${PRODUCT}.${PRICE_INFO}.${BEFORE}`;
export const PRODUCT_PRICE_INFO = `${PRODUCT}.${PRICE_INFO}`;
export const PRODUCT_PRICE_INFO_AFTER = `${PRODUCT}.${PRICE_INFO}.${AFTER}`;

// TIERS
export const PRODUCT_TIERS_BEFORE = `${PRODUCT}.${TIERS}.${BEFORE}`;
export const PRODUCT_TIERS = `${PRODUCT}.${TIERS}`;
export const PRODUCT_TIERS_AFTER = `${PRODUCT}.${TIERS}.${AFTER}`;

// VARIANT SELECT
export const PRODUCT_VARIANT_SELECT_BEFORE = `${PRODUCT}.${VARIANT_SELECT}.${BEFORE}`;
export const PRODUCT_VARIANT_SELECT = `${PRODUCT}.${VARIANT_SELECT}`;
export const PRODUCT_VARIANT_SELECT_AFTER = `${PRODUCT}.${VARIANT_SELECT}.${AFTER}`;

// OPTIONS
export const PRODUCT_OPTIONS_BEFORE = `${PRODUCT}.${OPTIONS}.${BEFORE}`;
export const PRODUCT_OPTIONS = `${PRODUCT}.${OPTIONS}`;
export const PRODUCT_OPTIONS_AFTER = `${PRODUCT}.${OPTIONS}.${AFTER}`;

// DESCRIPTION
export const PRODUCT_DESCRIPTION_BEFORE = `${PRODUCT}.${DESCRIPTION}.${BEFORE}`;
export const PRODUCT_DESCRIPTION = `${PRODUCT}.${DESCRIPTION}`;
export const PRODUCT_DESCRIPTION_AFTER = `${PRODUCT}.${DESCRIPTION}.${AFTER}`;

// PROPERTIES
export const PRODUCT_PROPERTIES_BEFORE = `${PRODUCT}.${PROPERTIES}.${BEFORE}`;
export const PRODUCT_PROPERTIES = `${PRODUCT}.${PROPERTIES}`;
export const PRODUCT_PROPERTIES_AFTER = `${PRODUCT}.${PROPERTIES}.${AFTER}`;

// REVIEWS
export const PRODUCT_REVIEWS_BEFORE = `${PRODUCT}.${REVIEWS}.${BEFORE}`;
export const PRODUCT_REVIEWS = `${PRODUCT}.${REVIEWS}`;
export const PRODUCT_REVIEWS_AFTER = `${PRODUCT}.${REVIEWS}.${AFTER}`;

// TAX DISCLAIMER
export const PRODUCT_TAX_DISCLAIMER_BEFORE = `${PRODUCT}.${TAX_DISCLAIMER}.${BEFORE}`;
export const PRODUCT_TAX_DISCLAIMER = `${PRODUCT}.${TAX_DISCLAIMER}`;
export const PRODUCT_TAX_DISCLAIMER_AFTER = `${PRODUCT}.${TAX_DISCLAIMER}.${AFTER}`;
