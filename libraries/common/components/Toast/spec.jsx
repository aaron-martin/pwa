/**
 * Copyright (c) 2017 - present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Drawer from '../Drawer';
import Toast from './index';
import configureStore from '../../store';
import toastReducer from '../../reducers/toast';
import createToast from '../../actions/toast/createToast';
import removeToast from '../../actions/toast/removeToast';
import { getToast } from '../../selectors/toast';
import mockRenderOptions from '../../helpers/mocks/mockRenderOptions';

const mockedStore = configureStore({ toast: toastReducer });

/* eslint-disable react/prop-types */
/**
 * Container Mock
 * @param {Object} props Props
 * @returns {JSX}
 */
const MockContainer = props => (<div>{props.children}</div>);

/**
 * Message Mock
 * @param {string} text Message text
 * @returns {JSX}
 */
const MockMessage = ({ text }) => (<span>{text}</span>);

/**
 * Action Button.
 * @param {string} text Action text.
 * @param {function} onClick OnClick callback.
 * @returns {JSX}
 */
const MockActionButton = ({ text, onClick }) => (<button onClick={onClick} >{text}</button>);
/* eslint-enable react/prop-types */

/**
 * Creates the component
 * @param {function} onClose Close callback
 * @return {*} ReactWrapper
 */
const createComponent = (onClose) => {
  /* eslint-disable global-require */
  const Toast = require('./index').default; // eslint-disable-line no-shadow
  /* eslint-enable global-require */
  return mount(
    <Provider store={mockedStore}>
      <Toast
        container={MockContainer}
        message={MockMessage}
        actionButton={MockActionButton}
        toast={getToast}
        onClose={onClose}
      />
    </Provider>,
    mockRenderOptions
  );
};

jest.mock('redux-logger', () => ({
  /**
   * Create logger
   * @returns {*} action
   */
  createLogger: () => () => next => action => next(action),
}));

describe('<Toast />', () => {
  const { dispatch, getState } = mockedStore;
  let wrapper;

  beforeEach(() => {
    // Reset the toasts state before each test.
    getState().toast = [];
    wrapper = createComponent();
  });

  it('should dispatch a toast message', () => {
    dispatch(createToast({ message: 'Toast Message', duration: 0 }));
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MockMessage).exists()).toBe(true);
    expect(wrapper.find(MockContainer).exists()).toBe(true);
  });

  it('should remove after timeout', (done) => {
    const wrapperWithTimeout = createComponent(() => {
      const drawerCallback = wrapperWithTimeout.find(Drawer).prop('onDidClose');
      drawerCallback();
      expect(getState().toast.length).toBe(0);
      done();
    });
    dispatch(createToast({ message: 'Timeout Message', duration: 10 }));
    wrapperWithTimeout.update();
  });

  it('should dispatch multiple toast messages', () => {
    const messages = ['Toast Message 2', 'Toast Message 3'];
    const getNextToast = wrapper.find(Toast).prop('toast');

    messages.forEach((message) => {
      dispatch(createToast({ message, duration: 0 }));
    });
    wrapper.update();

    const msg1 = getNextToast(getState());
    expect(wrapper.find(MockMessage).prop('text')).toEqual(msg1.message);
    dispatch(removeToast(msg1.id));
    wrapper.update();

    const msg2 = getNextToast(getState());
    expect(wrapper.find(MockMessage).prop('text')).toEqual(msg2.message);
  });
  it('should call actionOnClick on action click', (done) => {
    const mockedActionOnClick = jest.fn();
    dispatch(createToast({
      message: 'hello world',
      action: 'click me',
      actionOnClick: mockedActionOnClick,
      duration: 2,
    }));
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MockMessage).exists()).toBe(true);
    expect(wrapper.find(MockActionButton).exists()).toBe(true);
    wrapper.find(MockActionButton).simulate('click');
    wrapper.update();
    setTimeout(() => {
      wrapper.update();
      expect(typeof mockedActionOnClick.mock.calls[0][0] === 'function').toBe(true);
      expect(typeof mockedActionOnClick.mock.calls[0][1] === 'function').toBe(true);
      expect(wrapper.find(MockMessage).exists()).toBe(false);
      expect(wrapper).toMatchSnapshot();
      done();
    }, 0);
  });
});
