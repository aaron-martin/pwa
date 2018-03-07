/**
 *  Copyright (c) 2017 - present, Shopgate, Inc. All rights reserved.
 *
 *  This source code is licensed under the Apache 2.0 license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer';
import connect from './connector';

/**
 * Toast component.
 */
class Toast extends Component {
  static propTypes = {
    actionButton: PropTypes.func.isRequired,
    container: PropTypes.func.isRequired,
    dispatchAction: PropTypes.func.isRequired,
    message: PropTypes.func.isRequired,
    removeToast: PropTypes.func.isRequired,
    className: PropTypes.string,
    onClose: PropTypes.func,
    toast: PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      action: PropTypes.string,
      actionOnClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    className: null,
    onClose: () => {},
    toast: null,
  };

  /**
   * Constructs.
   * @param {Object} props Props.
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: !!props.toast,
    };
    this.timeout = null;
  }

  /**
   * ComponentWillReceiveProps.
   * @param {Object} nextProps NextProps.
   */
  componentWillReceiveProps(nextProps) {
    const hasToast = !!nextProps.toast;

    if (hasToast) {
      this.handleTimeout(nextProps.toast);
    }

    if (!this.state.isOpen) {
      this.setState({
        isOpen: hasToast,
      });
    }
  }

  /**
   * ShouldComponentUpdate.
   * @param {Object} nextProps NextProps.
   * @param {Object} nextState NextState.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    const toastUpdate = nextProps.toast && this.props.toast
      && nextProps.toast.id !== this.props.toast.id;
    const toastDidChange = toastUpdate || !this.props.toast;

    if (nextState.isOpen !== this.state.isOpen) {
      return true;
    }

    return toastDidChange;
  }

  /**
   * Closes the drawer and call onClose callback.
   */
  closeDrawer = () => {
    this.setState({
      isOpen: false,
    });
    this.props.onClose();
  };
  /**
   * Removes the message if available.
   */
  handleRemoveMessage = () => {
    if (this.props.toast) {
      this.props.removeToast(this.props.toast.id);
    }
  };

  /**
   * Handles timeout.
   * @param {Object} toast Toast.
   */
  handleTimeout = (toast) => {
    if (toast.duration) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.closeDrawer();
      }, toast.duration);
    }
  };

  /**
   * Handles button click action.
   */
  handleButtonClick = () => {
    if (this.props.toast.actionOnClick) {
      this.props.dispatchAction(this.props.toast.actionOnClick);
    }
    this.closeDrawer();
  };

  /**
   * Renders.
   * @returns {JSX}
   */
  render() {
    const Container = this.props.container;
    const Message = this.props.message;
    const ActionButton = this.props.actionButton;

    return (
      <div
        aria-live="polite"
        aria-relevant="additions"
      >
        <Drawer
          isOpen={this.state.isOpen}
          onDidClose={this.handleRemoveMessage}
          className={this.props.className}
        >
          {
            this.props.toast &&
            <Container>
              <Message text={this.props.toast.message} />
              {
                this.props.toast.action
                && <ActionButton
                  text={this.props.toast.action}
                  onClick={this.handleButtonClick}
                />
              }
            </Container>
          }
        </Drawer>
      </div>
    );
  }
}

export default connect(Toast);
