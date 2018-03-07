/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SUCCESS_ADD_COUPONS_TO_CART } from '../constants';

/**
 * Creates the dispatched SUCCESS_ADD_COUPONS_TO_CART action object.
 * @param {Array} couponsIds The coupon ids from the successful ADD_COUPONS_TO_CART action.
 * @param {boolean} [requestsPending=false] Tells if other cart related requests are pending.
 * @returns {Object} The dispatched action object.
 */
const successAddCouponsToCart = (couponsIds, requestsPending = false) => ({
  type: SUCCESS_ADD_COUPONS_TO_CART,
  couponsIds,
  requestsPending,
});

export default successAddCouponsToCart;