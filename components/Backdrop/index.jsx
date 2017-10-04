/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import styles from './style';

/**
 * Backdrop component.
 */
class Backdrop extends Component {
  /**
   * The component prop types.
   * @type {Object}
   */
  static propTypes = {
    color: PropTypes.string,
    duration: PropTypes.number,
    isVisible: PropTypes.bool,
    level: PropTypes.number,
    onClick: PropTypes.func,
    opacity: PropTypes.number,
  };

  /**
   * The component default props.
   * @type {Object}
   */
  static defaultProps = {
    color: '#000',
    duration: 200,
    isVisible: false,
    level: 2,
    onClick: () => {},
    opacity: 50,
  };

  /**
   * Only update when the `isVisible` prop changes.
   * @param {Object} nextProps The next set of component props.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return (this.props.isVisible !== nextProps.isVisible);
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    // Convert opacity value to be CSS compatible (0 -> 1).
    const opacity = (this.props.opacity / 100);

    const defaultStyles = {
      background: this.props.color,
      transitionDuration: `${this.props.duration}ms`,
      zIndex: this.props.level,
    };

    const transitionStyles = {
      entering: {
        opacity,
      },
      entered: {
        opacity,
      },
      exited: {
        top: '100%', // Move the element off-screen when not visible.
        opacity: 0,
      },
      exiting: {
        opacity: 0,
      },
    };

    return (
      <Transition in={this.props.isVisible} timeout={this.props.duration}>
        {state => (
          <div
            aria-hidden
            className={styles}
            style={{
              ...defaultStyles,
              ...transitionStyles[state],
            }}
            onClick={this.props.onClick}
          />
        )}
      </Transition>
    );
  }
}

export default Backdrop;
