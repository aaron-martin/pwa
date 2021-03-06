import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import connect from './index';

let expectedValue = -1;
let changeProp = true;

// eslint-disable-next-line require-jsdoc
const mapStateToProps = () => {
  if (changeProp) {
    expectedValue += 1;
  }
  return { testProp: expectedValue };
};

/**
 * The store reducer.
 * @param {Object} state The current state.
 * @param {Object} action The dispatched action.
 * @return {Object} The new state.
 */
const reducer = (state = {}, action) => (
  action.type === 'PATH_CHANGE'
    ? {
      ...state,
      history: {
        pathname: action.pathname,
      },
    } : {
      ...state,
      test: Math.random(),
    }
);

let timesRendered = 0;
let store;

// eslint-disable-next-line react/prefer-stateless-function
const TestComponent = class extends Component {
  /**
   * Renders the component
   * @returns {JSX}
   */
  render() {
    timesRendered += 1;
    return <div />;
  }
};

const ConnectedTestComponent = connect(mapStateToProps)(TestComponent);

describe('SGConnect', () => {
  let renderedElement;

  /**
   * The rendered component.
   */
  const renderComponent = () => {
    renderedElement = mount(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>,
      {
        context: { routePath: '/' },
        childContextTypes: { routePath: PropTypes.string },
      }
    );
  };

  /**
   * Sets the current path in the mock store.
   * @param {string} path The new path.
   */
  const setPath = (path) => {
    store.dispatch({
      pathname: path,
      type: 'PATH_CHANGE',
    });
  };

  /**
   * Simulates a random change in the store forcing it to update.
   */
  const forceStateUpdate = () => {
    store.dispatch({ type: 'STATE_UPDATE' });
  };

  beforeEach(() => {
    // Reset the path and expected value before running each test.
    store = createStore(reducer);
    expectedValue = -1;
    timesRendered = 0;
    setPath('/');
    renderComponent();
  });

  describe('Given the component was mounted to the DOM', () => {
    it('should match snapshot', () => {
      expect(renderedElement).toMatchSnapshot();
    });

    it('should receive the correct props', () => {
      expect(renderedElement.find(TestComponent).props().testProp === expectedValue);
    });

    it('should receive the correct props', () => {
      expect(renderedElement.find(TestComponent).props().testProp === expectedValue);
    });

    it('should only render on route where mounted', () => {
      // Simulate a prop change in the component.
      forceStateUpdate();
      expect(timesRendered).toBe(2);

      // Simulate transition to another route. No re-rendering.
      setPath('/foo');
      expect(timesRendered).toBe(2);

      // Again, simulate a prop change. This should not trigger rendering.
      forceStateUpdate();
      expect(timesRendered).toBe(2);

      // Go back. Should trigger re-rendering because path changed.
      setPath('/');
      expect(timesRendered).toBe(3);

      // Advance and go back. Should NOT trigger re-rendering because prop did not change.
      changeProp = false;
      setPath('/foo');
      expect(timesRendered).toBe(3);
      setPath('/');
      expect(timesRendered).toBe(3);
      changeProp = true;

      // This prop change should trigger re-rendering.
      forceStateUpdate();
      expect(timesRendered).toBe(4);
    });
  });
});
