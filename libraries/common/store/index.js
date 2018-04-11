import { logger, hasSGJavaScriptBridge } from '@shopgate/pwa-core/helpers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyWorker } from 'redux-worker';
import { isDev, isRemote } from '../helpers/environment';
import observableMiddleware from './observable-middleware';
import { initPersistentStorage } from './persistent';

let composeEnhancers = compose;

/**
 * Used to enable the Redux DevTools Extension in the browser in development mode.
 */
if (isDev) {
  if (hasSGJavaScriptBridge() && isRemote) {
    const { composeWithDevTools } = require('remote-redux-devtools'); // eslint-disable-line global-require
    // Use the Remote DevTools if we are inside the app.
    composeEnhancers = composeWithDevTools({
      name: 'Shopgate App',
      realtime: true,
      hostname: process.env.IP,
      port: 8008,
    });
  // eslint-disable-next-line no-underscore-dangle
  } else if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // Use the browsers DevTools Extension.
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const reduxLogger = createLogger({
  logger,
  collapsed: true,
  duration: true,
});

/**
 * Configures the redux store with all it's middleware and enhancers.
 * @param {Object} reducers The reducers from the theme.
 * @param {Function} Worker The web worker.
 * @return {Object} The redux store.
 */
const configureStore = (reducers, Worker) => {
  const store = createStore(
    // Append the reducers.
    reducers,
    // Append the pre-loaded state.
    initPersistentStorage(),
    // Compose the enhancers.
    composeEnhancers(
      applyMiddleware(thunk, observableMiddleware, reduxLogger),
      applyWorker(new Worker())
    )
  );

  // // Do the HMR only if in development mode.
  // If (isDev && module.hot) {
  //   // Enable Webpack hot module replacement for reducers.
  //   Module.hot.accept('../reducers', () => {
  //     Const nextReducers = require('../reducers').default; // eslint-disable-line global-require
  //     Store.replaceReducer(() => nextReducers(customReducers));
  //   });
  // }

  return store;
};

export default configureStore;
