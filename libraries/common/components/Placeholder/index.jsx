import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * PlaceHolder component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const PlaceHolder = ({
  height, left, top, width,
}) => (
    <div
      className={styles}
      style={{
        height,
        left,
        top,
        width,
      }}
    />
  );

PlaceHolder.propTypes = {
  height: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
};

PlaceHolder.defaultProps = {
  height: 0,
  left: 0,
  top: 0,
  width: 0,
};

export default PlaceHolder;