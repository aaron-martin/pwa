/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TODO: This is an illegal dependency. Do we even want the settings to be in theme_gmd?
 * import { webCheckoutShopify } from 'Settings/general';
 */
const webCheckoutShopify = null;

/**
 * Checks if shopify checkout is available.
 * @returns {boolean}
 */
export const hasShopifyCheckout = () => (
  webCheckoutShopify !== null
);

/**
 * Returns the shopify checkout configuration.
 * @returns {Object|null}
 */
export const getShopifyCheckout = () => {
  if (typeof webCheckoutShopify === 'string') {
    // TODO remove when SGXS-1223 is done and the config service delivers parsed JSON strings.
    return JSON.parse(webCheckoutShopify);
  }

  return webCheckoutShopify;
};

/**
 * Gets the aliased shopify URL.
 * @returns {string}
 */
export const getShopifyUrl = () => (
  `https://${getShopifyCheckout().alias}.myshopify.com`
);
