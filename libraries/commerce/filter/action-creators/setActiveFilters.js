import { SET_ACTIVE_FILTERS } from '../constants';

/**
 * Creates the dispatched SET_ACTIVE_FILTERS action object.
 * @param {Object} activeFilters Active filters.
 * @param {Object} [params] Parameters for the action object
 * @param {string} [params.categoryId] A category id which the filters relate to
 * @param {string} [params.searchPhrase] A search phrase which the filters relate to
 * @return {Object} The SET_ACTIVE_FILTERS action.
 */
const setActiveFilters = (activeFilters, { categoryId, searchPhrase } = {}) => ({
  type: SET_ACTIVE_FILTERS,
  activeFilters,
  ...categoryId && { categoryId },
  ...searchPhrase && { searchPhrase },
});

export default setActiveFilters;
