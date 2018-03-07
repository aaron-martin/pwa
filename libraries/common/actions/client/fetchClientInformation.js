/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { logger } from '@shopgate/pwa-core/helpers';
import { getWebStorageEntry } from '@shopgate/pwa-core/commands/webStorage';
import requestClientInformation from '../../action-creators/client/requestClientInformation';
import receiveClientInformation from '../../action-creators/client/receiveClientInformation';
import errorClientInformation from '../../action-creators/client/errorClientInformation';

/**
 * Requests the client information from the web storage.
 * @return {Function} A redux thunk.
 */
const fetchClientInformation = () => (dispatch) => {
  dispatch(requestClientInformation());

  getWebStorageEntry({ name: 'clientInformation' })
    .then(response => dispatch(receiveClientInformation(response.value)))
    .catch((error) => {
      logger.error(error);
      dispatch(errorClientInformation());
    });
};

export default fetchClientInformation;