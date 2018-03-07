/**
 * Copyright (c) 2018, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import goBackHistory from './goBackHistory';
import pushHistory from './pushHistory';
import {
  historyDidReset,
  historyWillReset,
} from '../../action-creators/history';
import { getHistoryLength } from '../../selectors/history';

/**
 * Resets the history and clears any previous entries. Optionally, a new location can be pushed
 * directly into the history stack afterwards.
 * @param {Object|string|null} [location=null] The location to set after the reset.
 * @returns {Function} A redux thunk.
 */
const resetHistory = (location = null) => (dispatch, getState) => {
  dispatch(historyWillReset());

  const numEntries = getHistoryLength(getState());
  // Go back the exact amount of entries stored in the history.
  dispatch(goBackHistory(numEntries - 1));

  // Set the new location if one was passed with the parameters.
  if (location) {
    dispatch(pushHistory(location));
  }

  dispatch(historyDidReset());
};

export default resetHistory;
