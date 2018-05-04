import {
  REQUEST_PAGE_CONFIG,
  RECEIVE_PAGE_CONFIG,
} from '../../constants/ActionTypes';
import { persist } from '../../store/persistent';

/**
 * The current version of the state created by this reducer.
 * @type {string}
 */
const STATE_VERSION = 'v1';

/**
 * Check the published and schedule states of the widget and perform
 * necessary operations to hide the widget
 * @param {Object} setting - widget settings
 * @param {Date} nowDate - Current date object
 * @return {boolean} hide widget or don't hide widget
 */
const shouldHideWidget = (setting, nowDate) => {
  // Show widget if flag does not exist (old widgets)
  if (!setting.hasOwnProperty('published')) {
    return false;
  }

  if (!setting.published) {
    return true;
  }

  if (setting.hasOwnProperty('plan') && setting.plan) {
    let startDate = null;
    let endDate = null;
    let notStartedYet = false;
    let finishedAlready = false;

    if (setting.planDate.valid_from) {
      startDate = new Date(setting.planDate.valid_from);
      notStartedYet = nowDate <= startDate;
    }

    if (setting.planDate.valid_to) {
      endDate = new Date(setting.planDate.valid_to);
      finishedAlready = nowDate >= endDate;
    }

    // Don't hide if no dates found
    if (!startDate && !endDate) {
      return false;
    }

    // Hide if some wrong dates are passed
    if (startDate && endDate && (startDate >= endDate)) {
      return true;
    }

    // Hide if start date is set but it is not there yet
    // Hide if end date is reached
    if ((startDate && notStartedYet) || (endDate && finishedAlready)) {
      return true;
    }
  }

  return false;
}

const filterWidgets = (widgets, nowDate) => {
  return widgets.map((widget) => {
    if (Array.isArray(widget.settings.widgets)) {
      return {
        ...widget,
        settings: {
          ...widget.settings,
          widgets: filterWidgets(widget.settings.widgets),
        },
      };
    }

    if (!shouldHideWidget(widget.settings, nowDate)) {
      return widget;
    }

    return null;
  }).filter(w => !!w);
}

/**
 * Enrich the widget data.
 * @param {Object} action The action that was received.
 * @return {Object} An enriched set of widgets.
 */
const processWidgets = (action) => {
  const widgets = action.config.widgets.map((widget, index) => ({
    ...widget,
    id: `${action.pageId}-${index}-${widget.type}`,
  }));

  return filterWidgets(widgets, new Date());
}

/**
 * The page config reducer.
 * @param {Object} [state={}] The current application state.
 * @param {Object} action The action object.
 * @return {Object} The store data.
 */
const page = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PAGE_CONFIG:
      return {
        ...state,
        [action.pageId]: {
          ...state[action.pageId],
          isFetching: true,
          expires: 0,
        },
      };
    case RECEIVE_PAGE_CONFIG: {
      return {
        ...state,
        [action.pageId]: {
          title: action.config.title,
          widgets: processWidgets(action),
          isFetching: false,
          expires: Date.now(),
        },
      };
    }
    default:
      return state;
  }
};

export default persist('page', page, STATE_VERSION);
