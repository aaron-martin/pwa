/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import IntlMessageFormat from 'intl-messageformat';
import curry from 'lodash/curry';
import messageCache from './messageCache';

/**
 * Returns an instance of IntlMessageFormat from cache based on a hash.
 * The hash is generated from given language code and translation key.
 * If no instance exists yet, a new instance will be created and returned.
 * @param {string} langCode A language code.
 * @param {number} price The price to format.
 * @param {string} currency The current currency.
 * @param {boolean} fractions With or without fraction digits.
 * @returns {IntlMessageFormat}
 */
const getFormattedPriceFromCache = (langCode, price, currency, fractions) => {
  const hash = `${langCode}_${price}_${currency}_${fractions}`;

  // Check if a cached instance already exists.
  if (messageCache[hash]) {
    return messageCache[hash];
  }

  messageCache[hash] = new IntlMessageFormat(
    `{price, number, ${currency}}`,
    langCode,
    {
      number: {
        [currency]: {
          style: 'currency',
          currency,
          minimumFractionDigits: fractions ? 2 : 0,
          maximumFractionDigits: fractions ? 2 : 0,
        },
      },
    }
  );

  return messageCache[hash];
};

/**
 * Get a formatted price by currency and language code.
 * @param {string} langCode A language code.
 * @param {number} price The price to format.
 * @param {string} currency The current currency.
 * @param {boolean} fractions With or without fraction digits.
 * @returns {string}
 */
const formatPrice = (langCode, price, currency, fractions) => (
  getFormattedPriceFromCache(langCode, price, currency, fractions).format({ price })
);

const getPriceFormatter = curry(formatPrice);

export default getPriceFormatter;
