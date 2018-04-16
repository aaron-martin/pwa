import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import * as pipelines from '../constants/Pipelines';
import requestCategory from '../action-creators/requestCategory';
import receiveCategory from '../action-creators/receiveCategory';
import errorCategory from '../action-creators/errorCategory';

/**
 * Fetches the data for a given category ID (including child categories).
 * @param {string} categoryId The category ID.
 * @return {Function} The dispatched action.
 */
const fetchCategory = categoryId => (dispatch, getState) => {
  const category = getState().category.categoriesById[categoryId];

  if (!shouldFetchData(category)) {
    dispatch(receiveCategory(categoryId, category, category.children));
    return;
  }

  dispatch(requestCategory(categoryId));

  new PipelineRequest(pipelines.SHOPGATE_CATALOG_GET_CATEGORY)
    .setInput({
      categoryId,
      includeChildren: true,
    })
    .dispatch()
    .then(result => dispatch(receiveCategory(categoryId, result, (result.children || []))))
    .catch((error) => {
      logger.error(error);
      dispatch(errorCategory(categoryId));
    });
};

export default fetchCategory;
