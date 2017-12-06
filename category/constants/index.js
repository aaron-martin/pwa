/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const CATEGORY_PATH = '/category';

export const CATEGORY_PATH_REGEX = new RegExp(`^${CATEGORY_PATH}/?[^/]*/?$`, 'g');

export const CATEGORY_LIFETIME = 3600000; // 1 hour in milliseconds

export const SET_CURRENT_CATEGORY_ID = 'SET_CURRENT_CATEGORY_ID';

export const REQUEST_ROOT_CATEGORIES = 'REQUEST_ROOT_CATEGORIES';
export const RECEIVE_ROOT_CATEGORIES = 'RECEIVE_ROOT_CATEGORIES';
export const ERROR_ROOT_CATEGORIES = 'ERROR_ROOT_CATEGORIES';

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const ERROR_CATEGORY = 'ERROR_CATEGORY';

export const REQUEST_CATEGORY_CHILDREN = 'REQUEST_CATEGORY_CHILDREN';
export const RECEIVE_CATEGORY_CHILDREN = 'RECEIVE_CATEGORY_CHILDREN';
export const ERROR_CATEGORY_CHILDREN = 'ERROR_CATEGORY_CHILDREN';
