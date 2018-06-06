import shouldShowWidget from './shouldShowWidget';

/**
 * Filters out widgets which should not be shown and adjusts the row attributes so the sizing
 * is correct.
 * @param {Array} widgets Widgets.
 * @returns {Array}
 */
function filterAndSanizeGridWidgets(widgets) {
  // [oldRow: newRow]
  const rowMapping = {};
  // [oldRow: heightOfOldRow]
  const rowToHeightMapping = {};
  // Widgets without ones which are not published.
  const filteredWidgets = widgets.filter(w => shouldShowWidget(w.settings));
  // Lowest row index after filtering.
  const lowestIndex = filteredWidgets.reduce((lowest, w) => Math.min(lowest, w.row), Infinity);
  // Final sanitization
  const newWidgets = JSON.parse(JSON.stringify(filteredWidgets))
    .map(w => {
      // Adjust rows to start from 0
      w.row = w.row - lowestIndex;
      return w;
    })
    .map((w) => {
      // Prepare
      if (
        !rowToHeightMapping[w.row]
        || rowToHeightMapping[w.row] < w.height
      ) {
        rowToHeightMapping[w.row] = w.height;
      }
      return w;
    })
    .map((w) => {
      if (!rowMapping.hasOwnProperty(w.row)) {
        rowMapping[w.row] = w.row === 0 ? 0 : rowToHeightMapping[w.row];
      }
      return w;
    })
    .map((w) => {
      w.row = rowMapping[w.row];
      return w;
    });
  console.warn('rowMapping', rowMapping);
  console.warn('rowToHeightMapping', rowToHeightMapping);
  console.warn('widgets', widgets);
  console.warn('newWidgets', newWidgets);
  console.warn();
  return newWidgets;
}

export default filterAndSanizeGridWidgets;
