// jest.setup.js
global.console = {
  log: jest.fn(),
  error: jest.fn(),
}
