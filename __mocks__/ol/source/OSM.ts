export default class MockOSM {
  constructor(options?: any) {
    Object.assign(this, options);
  }

  // stub any used methods
  getTileUrl() {
    return "";
  }
}
