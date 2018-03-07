/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';

css.global('table', {
  borderCollapse: 'collapse',
  minWidth: '100%',
});

css.global('td, th', {
  verticalAlign: 'top',
});