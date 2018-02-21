/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  REQUEST_PAGE_CONFIG,
  RECEIVE_PAGE_CONFIG,
} from '../../constants/ActionTypes';

/**
 * Enrich the widget data.
 * @param {Object} action The action that was received.
 * @return {Object} An enriched set of widgets.
 */
const enrichWidgets = action =>
  action.config.widgets.map((widget, index) => ({
    ...widget,
    id: `${action.pageId}-${index}-${widget.type}`,
  }));

/**
 * The page config reducer.
 * @param {Object} [state={}] The current application state.
 * @param {Object} action The action object.
 * @return {Object} The store data.
 */
const page = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PAGE_CONFIG:
      return {
        ...state,
        [action.pageId]: {
          ...state[action.pageId],
          isFetching: true,
          expires: 0,
        },
      };
    case RECEIVE_PAGE_CONFIG: {
      return {
        ...state,
        [action.pageId]: {
          title: action.config.title,
          widgets: enrichWidgets(action),
          isFetching: false,
          expires: Date.now(),
        },
      };
    }
    default:
      return state;
  }
};

export default page;
