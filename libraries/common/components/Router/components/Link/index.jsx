/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ParsedLink from '../../helpers/parsed-link';
import getStyle from './style';

/**
 * Link component.
 * @param {Object} props Props for the component.
 * @returns {JSX}
 */
export default class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    styles: PropTypes.shape(),
  };

  static defaultProps = {
    styles: {},
  };

  /**
   * Opens the link.
   * @param {Object} e Event
   */
  handleOpenLink = (e) => {
    e.preventDefault();

    const link = new ParsedLink(this.props.href);
    link.open();
  };

  /**
   * Renders the component.
   * @returns {XML}
   */
  render() {
    const { styles, children } = this.props;
    const style = getStyle(styles);

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div role="link" className={`${style}`} onClick={this.handleOpenLink}>
        {children}
      </div>
    );
  }
}
