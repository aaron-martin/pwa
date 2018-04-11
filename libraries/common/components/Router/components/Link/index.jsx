import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import style from './style';

/**
 * Link component.
 * @param {Object} props Props for the component.
 * @returns {JSX}
 */
class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    className: PropTypes.string,
    replace: PropTypes.bool,
    state: PropTypes.shape(),
  };

  static defaultProps = {
    className: '',
    replace: false,
    state: {},
  };

  /**
   * Opens the link.
   */
  handleOpenLink = () => {
    const action = this.props.replace ? 'REPLACE' : 'PUSH';
    this.props.navigate(action, this.props.href, this.props.state);
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return (
      <div
        aria-hidden
        className={`${style} ${this.props.className}`}
        onClick={this.handleOpenLink}
        role="link"
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(Link);