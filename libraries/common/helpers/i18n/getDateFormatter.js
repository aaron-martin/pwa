/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
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
 * @param {number} timestamp The current date's timestamp.
 * @param {string} format The date format.
 *                        Possible values: 'short', 'medium' (default), 'long','full'
 * @returns {IntlMessageFormat}
 */
const getFormattedDateFromCache = (langCode, timestamp, format) => {
  const hash = `${langCode}_date_${timestamp}_${format}`;

  // Check if a cached instance already exists.
  if (messageCache[hash]) {
    return messageCache[hash];
  }

  messageCache[hash] = new IntlMessageFormat(`{timestamp, date, ${format}}`, langCode);

  return messageCache[hash];
};

/**
 * Get a formatted date from a timestamp.
 * @param {string} langCode A language code.
 * @param {number} timestamp The current date's timestamp.
 * @param {string} [format='medium'] The date format.
 *                                   Possible values: 'short', 'medium', 'long','full'
 * @returns {string}
 */
const formatDate = (langCode, timestamp, format = 'medium') => (
  getFormattedDateFromCache(langCode, timestamp, format).format({ timestamp })
);

export default curry(formatDate);
