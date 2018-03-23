import { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

/**
 * The Portal component.
 */
class Portal extends Component {
  static propTypes = {
    components: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  /**
   * Constructor.
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      hasChildren: !!props.children,
      hasComponents: props.components.length > 0,
      hasError: false,
    };
  }

  /**
   * @param {Object} nextProps The next component props.
   * @param {Object} nextState The next component state.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.hasChildren !== nextState.hasChildren
      || this.state.hasComponents !== nextState.hasComponents
      || this.state.hasError !== nextState.hasError
    );
  }

  /**
   * Catches errors.
   */
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  /**
   * Renders the component.
   * @return {JSX}
   */
  render() {
    const { children, components } = this.props;
    const { hasChildren, hasComponents, hasError } = this.state;

    /**
     * Render nothing if there are no children, matching components
     * via name or an error occured.
     */
    if (hasError || !(hasComponents || hasChildren)) {
      return null;
    }

    /**
     *  If there are matching components then render them.
     */
    if (hasComponents) {
      /**
       * If there is a child component then we treat the match as an override
       * and we render the last match only.
       */
      if (hasChildren) {
        return components[components.length - 1];
      }

      return components;
    }

    return children;
  }
}

export default connect(Portal);
