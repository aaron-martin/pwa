import { ERROR_UPDATE_PRODUCTS_IN_CART } from '../constants';

/**
 * Creates the dispatched ERROR_UPDATE_PRODUCTS_IN_CART action object.
 * @param {Array} updateData The update data from the failed UPDATE_PRODUCTS_IN_CART action.
 * @param {Array} [errors] A list of errors messages for the products.
 * @param {boolean} [requestsPending=false] Tells if other cart related requests are pending.
 * @returns {Object} The dispatched action object.
 */
const errorUpdateProductsInCart = (updateData, errors = [], requestsPending = true) => ({
  type: ERROR_UPDATE_PRODUCTS_IN_CART,
  updateData,
  errors,
  requestsPending,
});

export default errorUpdateProductsInCart;
