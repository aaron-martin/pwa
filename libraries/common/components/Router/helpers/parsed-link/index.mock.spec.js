import ParsedLink from './index.mock';

describe('ParsedLink mock', () => {
  const testedUrl = 'http://example.com';
  let parsedLink;

  it('should create an object', () => {
    parsedLink = new ParsedLink(testedUrl);
    expect(typeof parsedLink).toBe('object');
  });

  it('should have an .open method which is a mock', () => {
    expect(typeof parsedLink.open).toBe('function');
    expect(typeof parsedLink.openFunctionMock).toBe('function');
    parsedLink.open();
    expect(parsedLink.openFunctionMock.mock.calls.length).toBe(1);
  });
});
