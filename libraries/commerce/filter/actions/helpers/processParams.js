/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import processFilters from './processFilters';

/**
 * Process the pipeline params to be compatible with the current API specifications.
 * Currently the categoryId field cannot be used in combination with the filter field. In order to
 * use them together the categoryId field has to be extracted into the filter field.
 * TODO: Remove this function once the pipeline specifications have been adjusted.
 * @param {Object} params The request params.
 * @param {Object} filters The current active filters.
 * @returns {Object} A set of compatible params.
 */
const processParams = (params, filters) => {
  const processedFilters = processFilters(filters);

  let newParams = {
    ...params,
    ...(processedFilters && Object.keys(processedFilters).length) && { filters: processedFilters },
  };

  if (params.categoryId && processedFilters && Object.keys(processedFilters).length) {
    newParams = {
      ...params,
      filters: {
        categoryId: params.categoryId,
        ...processedFilters,
      },
    };
    delete newParams.categoryId;
  }

  return newParams;
};

export default processParams;
