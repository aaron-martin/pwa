import filterAndSanitizeGridWidgets from './filterAndSanitizeGridWidgets';

describe('filterAndSanitizeGridWidgets', () => {
  it('should do nothing when all widgets are visible', () => {
    const widgets = [
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 2,
        settings: {},
      },
    ];
    expect(filterAndSanitizeGridWidgets(widgets)).toEqual(widgets);
  });
  it('should filter out middle widget and adjust the position of following one', () => {
    const widgets = [
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 0,
        height: 8,
        settings: {
          published: false,
        },
      },
      {
        row: 8,
        height: 2,
        settings: {},
      },
    ];
    expect(filterAndSanitizeGridWidgets(widgets)).toEqual([
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 2,
        settings: {},
      },
    ]);
  });
  it('should filter out many and adjust position of the others', () => {
    const widgets = [
      {
        row: 0,
        height: 2,
        settings: {
          published: false,
        },
      },
      {
        row: 2,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 8,
        settings: {
          published: false,
        },
      },
      {
        row: 10,
        height: 2,
        settings: {},
      },
    ];
    expect(filterAndSanitizeGridWidgets(widgets)).toEqual([
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 2,
        settings: {},
      },
    ]);
  });
  it('should filter out many and adjust position of the others', () => {
    const widgets = [
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 2,
        settings: {
          published: false,
        },
      },
      {
        row: 4,
        height: 8,
        settings: {},
      },
    ];
    expect(filterAndSanitizeGridWidgets(widgets)).toEqual([
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 0,
        height: 2,
        settings: {},
      },
      {
        row: 2,
        height: 8,
        settings: {},
      },
    ]);
  });
});
