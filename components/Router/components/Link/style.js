/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';

export default (styles) => {
  let style = {
    padding: 0,
    margin: 0,
    border: 'none',
    textAlign: 'left',
    alignItems: 'stretch',
    cursor: 'pointer',
  };

  if (styles) {
    style = {
      ...style,
      styles,
    };
  }

  return css(style).toString();
};
