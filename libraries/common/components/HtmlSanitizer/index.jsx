/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParsedLink from '../../helpers/parsed-link';
import parseHTML from '../../helpers/html/parseHTML';

/**
 * HtmlSanitizer component.
 */
class HtmlSanitizer extends Component {
  static propTypes = {
    children: PropTypes.string,
    decode: PropTypes.bool,
    settings: PropTypes.shape(),
  };

  static defaultProps = {
    children: '',
    decode: false,
    settings: {},
  };

  /**
   * Registers the event handler for when the user taps inside the html content.
   */
  componentDidMount() {
    this.htmlContainer.addEventListener('touchstart', this.handleTap, true);
    this.htmlContainer.addEventListener('click', this.handleTap, true);
  }

  /**
   * Only update if the HTML changed.
   * @param {Object} nextProps The next props for the component.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  /**
   * Removes the event handler.
   */
  componentWillUnmount() {
    this.htmlContainer.removeEventListener('touchstart', this.handleTap, true);
    this.htmlContainer.removeEventListener('click', this.handleTap, true);
  }

  /**
   * If the user tapped a link element, prevent the default behaviour.
   * and handle them via ParsedLink.
   * @param {Object} event The touchstart event.
   */
  handleTap = (event) => {
    const aTag = event.target.closest('a');

    if (aTag && aTag.attributes.href) {
      const href = aTag.attributes.href.value;
      const link = new ParsedLink(href);

      event.preventDefault();
      link.open(history);
    }
  };

  /**
   * Renders the component.
   * @returns {XML}
   */
  render() {
    const innerHTML = {
      __html: parseHTML(
        this.props.children,
        this.props.decode,
        this.props.settings
      ),
    };

    return (
      <div
        dangerouslySetInnerHTML={innerHTML}
        ref={(domElm) => { this.htmlContainer = domElm; }}
      />
    );
  }
}

export default HtmlSanitizer;
