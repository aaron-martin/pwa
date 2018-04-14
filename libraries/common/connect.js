import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import emitter from '@virtuous/conductor/emitter';
import getCurrentRoute from '@virtuous/conductor-helpers/getCurrentRoute';

/**
 * Connects a components to the store that takes care about the current route.
 * The component will only be updated when the current route matches the route
 * where it was initially mounted.
 * @param {function} mapStateToProps The map state to props callback.
 * @param {function} mapDispatchToProps The map dispatch to props callback.
 * @param {function} mergeProps The merge props callback.
 * @param {Object} options The connect options.
 * @return {function} The connected component.
 */
const routeConnect = (
  mapStateToProps = null,
  mapDispatchToProps = null,
  mergeProps = null,
  options = {},
  componentOptions = {
    deferUpdates: true,
  }
) => {

  // Wrap the real connect method with the local map state to props callback.
  const reduxConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
  );

  /**
   * Creates a wrapping component that takes care about the current path.
   * @param {Component} WrappedComponent The component to wrap.
   * @return {Component} The component wrapper.
   */
  const RouteConnect = WrappedComponent => class extends Component {
    static propTypes = {
      dispatch: PropTypes.func,
    };

    static defaultProps = {
      dispatch: () => { },
    };

    static contextTypes = {
      routeId: PropTypes.func,
    };

    static displayName = 'ConductorConnect';

    /**
     * @param {Object} props The component props.
     */
    constructor(props) {
      super(props);

      /**
       * A flag the represents if the props have changed since
       * this component was last allowed to update.
       */
      this.havePropsChanged = false;

      // if (WrappedOptions.deferUpdates) {
      // emitter.on('router.pushed', (pathname) => {
      //   if (pathname === this.context.route.path) {
      //     this.shouldUpdate = true;
      //     this.forceUpdate();
      //   } else {
      //     this.shouldUpdate = false;
      //   }
      // });
      // }
    }

    /**
     * 
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
      const wrappedProps = this.getWrappedProps(this.props);
      const wrappedNextProps = this.getWrappedProps(nextProps);

      if (!isEqual(wrappedProps, wrappedNextProps)) {
        this.havePropsChanged = true;
      }
    }

    /**
     * Only allows component updates when the current route matches the components mounting route.
     * @return {boolean} Whether to update the component.
     */
    shouldComponentUpdate() {
      const { id } = getCurrentRoute();
      const contextId = this.context.routeId();

      console.warn(WrappedComponent.name, id, contextId);

      // Only render if the next route matches the mounted route and the props changed.
      if (id === contextId) {
        if (this.havePropsChanged) {
          this.havePropsChanged = false;
          return true;
        }
      }

      return false;
    }

    getWrappedProps = (props) => {
      const { dispatch, ...wrappedProps } = props;
      return wrappedProps;
    }

    /**
     * Renders the component.
     * @return {Node} The rendered component.
     */
    render() {
      // TODO: convert to React.createElement()
      return <WrappedComponent {...this.getWrappedProps(this.props)} />;
    }
  };

  // Return the connected wrapper.
  return RealComponent => reduxConnect(RouteConnect(RealComponent));
};

export default routeConnect;
