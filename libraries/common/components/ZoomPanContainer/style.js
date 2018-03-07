/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';

const fullSize = {
  width: '100%',
  height: '100%',
};

const container = css({
  ...fullSize,
  overflow: 'hidden',
  position: 'relative',
}).toString();

const zoomPanWrapper = css({
  ...fullSize,
  position: 'absolute',
}).toString();

const contentWrapper = css({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}).toString();

export default {
  container,
  zoomPanWrapper,
  contentWrapper,
};
