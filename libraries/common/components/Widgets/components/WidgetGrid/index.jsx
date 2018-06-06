import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import filterAndSanitizeGridWidgets from '../../helpers/filterAndSanitizeGridWidgets';
import Widget from '../Widget';
import styles from './style';

// One grid row has 12 columns.
const GRID_COLUMNS = 12;

/**
 * Iterate through all widgets and return the maximum
 * height based on row and height information.
 * @param {Array} widgets Array of widgets.
 * @returns {number} Height of the widget grid.
 */
const getMaxHeight = widgets => (
  widgets.reduce(
    (max, widget) => Math.max(widget.row + widget.height, max),
    0
  )
);

/**
 * The widget grid widget component.
 * @param {Object} props The component properties.
 * @returns {JSX} The widget grid.
 */
const WidgetGrid = (props) => {
  // Sort the widgets by row. This has to happen to take care of the z-index flow.
  const widgets = filterAndSanitizeGridWidgets(sortBy(props.config, ['row']));
  const rowCount = getMaxHeight(widgets);

  // The cell size is 1/12 of the viewport width.
  const cellSize = Math.floor(window.innerWidth / GRID_COLUMNS);

  if (!widgets.length || !rowCount) {
    return null;
  }

  // The height of the widget area.
  const height = `${rowCount * cellSize}px`;

  return (
    <div className={styles} style={{ height }}>
      {Object.keys(widgets).map((key) => {
        const widget = widgets[key];
        const widgetKey = `w${key}`;

        // Map to the correct widget component using the `type` key inside the widget.
        const WidgetComponent = props.components[widget.type];

        return (
          <Widget
            cellSize={cellSize}
            config={widget}
            component={WidgetComponent}
            key={widgetKey}
          />
        );
      })}
    </div>
  );
};

WidgetGrid.propTypes = {
  components: PropTypes.shape().isRequired,
  config: PropTypes.arrayOf(PropTypes.shape()),
};

WidgetGrid.defaultProps = {
  config: [],
};

export default WidgetGrid;
