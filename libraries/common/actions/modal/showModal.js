import { createModal } from '../../action-creators/modal';
import promiseMap from './promiseMap';

let modalCount = 0;

/**
 * Creates a runtime unique modal id.
 * @returns {number}
 */
const getModalId = () => {
  modalCount += 1;
  return modalCount;
};

/**
 * The modal defaults.
 * @type {Object}
 */
const defaultModalOptions = {
  id: null,
  type: null, // In this case the template should display a fallback dialog type.
  title: '',
  confirm: 'modal.confirm',
  dismiss: 'modal.dismiss',
  params: {}, // Any parameters for special modal types go here.
};

/**
 * Dispatches the createModal action creator and returns
 * a promise that will be resolved when the modal closes.
 * @param {Object} options The modal options.
 * @return {Function} A Redux thunk.
 */
const showModal = options => (dispatch) => {
  const id = getModalId();

  const enrichedOptions = {
    ...defaultModalOptions,
    ...options,
    id,
  };

  dispatch(createModal(enrichedOptions));

  return new Promise((resolve, reject) => {
    promiseMap.set(id, {
      resolve,
      reject,
    });
  });
};

export default showModal;
