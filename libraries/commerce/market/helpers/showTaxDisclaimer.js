/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import appConfig from '@shopgate/pwa-common/helpers/config';
import {
  MARKET_AUSTRIA,
  MARKET_GERMANY,
} from '../constants';

export default [
  MARKET_AUSTRIA,
  MARKET_GERMANY,
].includes(appConfig.marketId);
