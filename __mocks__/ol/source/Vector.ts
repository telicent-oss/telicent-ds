export default class MockVectorSource {
  private features: any[] = [];
  constructor() {}

  addFeatures(f: any[]) {
    this.features.push(...f);
  }

  addFeature(feature: any) {
    this.features.push(feature);
  }

  getFeatures() {
    return this.features;
  }

  clear() {
    this.features = [];
  }
}
