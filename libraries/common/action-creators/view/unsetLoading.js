/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { UNSET_VIEW_LOADING } from '../../constants/ActionTypes';

/**
 * Creates the dispatched UNSET_VIEW_LOADING action object.
 * @param {boolean} pathname The target pathname.
 * @return {Function} The dispatched action.
 */
const unsetLoading = pathname => ({
  type: UNSET_VIEW_LOADING,
  pathname,
});

export default unsetLoading;