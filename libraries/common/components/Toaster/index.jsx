import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import emitter from './emitter';
import styles from './style';
import transition from './transition';

/**
 * 
 */
class Toaster extends Component {
  static propTypes = {
    // render: PropTypes.func.isRequired,
  }

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      visible: false,
    };

    this.defaultToast = {
      actionClick: () => {},
      actionLabel: null,
      duration: 2500,
    };

    this.timer = null;

    emitter.addListener('toast', this.handleAdd);
  }

  /**
   * 
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.visible !== nextState.visible;
  }

  /**
   * 
   */
  get toast() {
    return this.state.messages[0] || null;
  }

  /**
   * 
   */
  handleAdd = (toast) => {
    if (!toast.message) {
      return;
    }

    const messages = [
      ...this.state.messages,
      {
        ...this.defaultToast,
        ...toast,
      },
    ];

    this.setState({
      messages,
      visible: true,
    });
  }

  /**
   * 
   */
  handleEntered = () => {
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
    }, this.toast.duration);
  }

  /**
   * 
   */
  handleExited = () => {
    const { messages } = this.state;
    messages.shift();

    this.setState({
      messages,
      visible: messages.length > 0,
    });
  }

  /**
   * 
   */
  render() {
    return (
      <div className={styles}>
        <Transition
          in={this.state.visible}
          timeout={300}
          onEntered={this.handleEntered}
          onExited={this.handleExited}
        >
          {state => (
            <div style={{
              ...transition[state],
              background: 'black',
              color: 'white',
              transition: 'transform 300ms linear'}}
            >
              {this.toast && this.toast.message}
            </div>
          )}
        </Transition>
      </div>
    );
    // return this.props.render();
  }
}

/**
 * 
 * @param {Object} toast 
 */
export const add = toast => emitter.emit('toast', toast);
// hide too

setTimeout(() => {
  add({
    message: 'I`m a toast message 1',
  });

  add({
    message: 'I`m a toast message 2',
  });

  add({
    message: 'I`m a toast message 3',
  });
}, 10000);

export default Toaster;
