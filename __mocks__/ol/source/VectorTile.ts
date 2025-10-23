export default class MockVectorTileSource {
  constructor(public options?: any) {}
  setUrl = jest.fn();
  getTileGrid = jest.fn();
}
