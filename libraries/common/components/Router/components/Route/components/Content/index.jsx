import React from 'react';
import PropTypes from 'prop-types';

/**
 * Route Content Wrapper.
 * @param {Function|Class} WrappedComponent [description]
 * @returns {Function} The Route Content component.
 */
const RouteContentWrapper = (WrappedComponent) => {
  /**
   * RouteContent HOC
   * @param {Object} props The component props.
   * @returns {JSX}
   */
  const RouteContent = (props) => {
    const { setRef, setComponentRef, ...componentProps } = props;

    return (
      <div ref={setRef}>
        <WrappedComponent {...componentProps} ref={setComponentRef} />
      </div>
    );
  };

  RouteContent.propTypes = {
    setComponentRef: PropTypes.func.isRequired,
    setRef: PropTypes.func.isRequired,
  };

  return RouteContent;
};

export default RouteContentWrapper;
