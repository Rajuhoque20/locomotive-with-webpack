// jest.require-context.mock.js
if (typeof require.context === 'undefined') {
  require.context = () => {
    const keys = () => [];
    return { keys, resolve: keys, id: 'mocked' };
  };
}
