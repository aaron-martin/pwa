import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getActualImageSource } from '../../helpers/data';
import Transition from '../Transition';
import styles from './style';

/**
 * The image component. It supports lazy and progressive loading of images.
 */
class Image extends Component {
  static propTypes = {
    alt: PropTypes.string,
    animating: PropTypes.bool,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    forcePlaceholder: PropTypes.bool,
    highestResolutionLoaded: PropTypes.func,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    ratio: PropTypes.arrayOf(PropTypes.number),
    resolutions: PropTypes.arrayOf((
      PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        blur: PropTypes.number,
      })
    )),
    src: PropTypes.string,
    transition: PropTypes.shape(),
  };

  static defaultProps = {
    alt: null,
    animating: true,
    backgroundColor: '#f2f2f2',
    className: '',
    forcePlaceholder: false,
    highestResolutionLoaded: () => {},
    onError: null,
    onLoad: null,
    ratio: null,
    resolutions: [
      {
        width: 50,
        height: 50,
        blur: 2,
      },
      {
        width: 440,
        height: 440,
      },
    ],
    src: null,
    transition: null,
  };

  /**
   * Sets the initial state, to not render image slider component yet.
   * @param {Object} props The components props.
   */
  constructor(props) {
    super(props);

    /**
     * The initial component state.
     * Preloads all resolutions if already cached will
     * set the state for the resolution to true.
     * @type {Object}
     */
    this.state = {
      loaded: props.resolutions.map((resolution, index) => this.loadImage(this.props.src, index)),
    };
    this.mounted = false;
  }

  /**
   * When component is added to the DOM.
   */
  componentDidMount() {
    this.mounted = true;
  }

  /**
   * 
   * @param {*} nextState 
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.loaded.every((item, index) => (
      item === nextState.loaded[index]
    ));
  }

  /**
   * When component was removed from DOM.
   */
  componentWillUnmount() {
    this.mounted = false;
  }

  /**
   * Sets the image ratio based on width and height.
   * @return {number} The image ratio.
   */
  get imageRatio() {
    if (this.props.ratio) {
      const [x, y] = this.props.ratio;

      return ((y / x) * 100).toFixed(3);
    }

    const { width, height } = this.props.resolutions[this.props.resolutions.length - 1];

    return ((height / width) * 100).toFixed(3);
  }

  /**
   * Image loaded event listener
   * @param {number} resolutionIndex The index of the loaded resolution
   */
  imageLoaded(resolutionIndex) {
    if (!this.mounted) {
      return;
    }

    this.setState({
      loaded: this.state.loaded.map((loaded, index) => {
        if (resolutionIndex === index) {
          return true;
        }

        return loaded;
      }),
    });

    if (resolutionIndex === (this.props.resolutions.length - 1)) {
      this.props.highestResolutionLoaded();
    }
  }

  /**
   * Preloads the given image in given resolution
   * @param {string} src Source to the image.
   * @param {number} resolutionIndex The index of the loaded resolution.
   * @returns {number} true if image is already in cache.
   */
  loadImage(src, resolutionIndex) {
    const image = new window.Image();
    image.onload = () => {
      this.imageLoaded(resolutionIndex);
      if (this.props.onLoad) {
        this.props.onLoad();
      }
    };
    image.onerror = () => {
      if (this.props.onError) {
        this.props.onError();
      }
    };

    image.src = getActualImageSource(src, this.props.resolutions[resolutionIndex]);

    return image.complete;
  }

  /**
   * Renders the smooth image component.
   * @returns {JSX}
   */
  render() {
    const index = this.state.loaded.lastIndexOf(true);
    let src = null;

    if (index > -1) {
      src = getActualImageSource(this.props.src, this.props.resolutions[index]);
    }

    let innerImage = null;

    if (src && !this.props.forcePlaceholder) {
      // Applies a blur effect to every resolution that has the blur flag set to true.
      const inlineStyles = {};

      if (this.props.resolutions[index].blur) {
        inlineStyles.filter = `blur(${this.props.resolutions[index].blur}px)`;
        inlineStyles.width = '100%';
      }

      // Renders the actual image.
      innerImage = (
        <img
          className={styles.image}
          src={src}
          style={inlineStyles}
          alt={this.props.alt}
          role="presentation"
        />
      );
    }

    const containerStyle = styles.container(this.props.backgroundColor, `${this.imageRatio}%`);

    if (
      !this.props.animating ||
      !this.props.transition
    ) {
      return (
        <div className={`${containerStyle} ${this.props.className}`}>
          {innerImage}
        </div>
      );
    }

    return (
      <Transition
        childrenStyles={this.props.transition}
        className={`${containerStyle} ${this.props.className}`}
      >
        {innerImage}
      </Transition>
    );
  }
}

export default Image;
