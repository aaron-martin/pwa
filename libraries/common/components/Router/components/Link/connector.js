import { connect } from 'react-redux';
import { navigate } from '../../../../action-creators/history';

/**
 * Maps action dispatchers to the component props.
 * @param {function} dispatch The store dispatcher.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  navigate: (action, href, historyState) => dispatch(navigate(action, href, historyState)),
});

export default connect(null, mapDispatchToProps);