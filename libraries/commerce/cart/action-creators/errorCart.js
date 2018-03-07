/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ERROR_CART } from '../constants';

/**
 * Creates the dispatched ERROR_CART action object.
 * @return {Object} The ERROR_CART action.
 */
const errorCart = () => ({
  type: ERROR_CART,
});

export default errorCart;
