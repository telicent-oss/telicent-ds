import type { FeatureLike } from "ol/Feature";

interface SelectOptions {
  layers?: any[]; // can mock layers
  style?: any;
  condition?: any;
  toggleCondition?: any;
  filter?: (feature: FeatureLike) => boolean;
}

export default class MockSelectInteraction {
  private _selectedFeatures: FeatureLike[] = [];
  private _options: SelectOptions;

  constructor(options: SelectOptions = {}) {
    this._options = options;
  }

  // Returns currently selected features
  getFeatures(): FeatureLike[] {
    return this._selectedFeatures;
  }

  // Adds a feature to selection
  select(feature: FeatureLike) {
    if (!this._selectedFeatures.includes(feature)) {
      this._selectedFeatures.push(feature);
    }
  }

  // Removes a feature from selection
  deselect(feature: FeatureLike) {
    this._selectedFeatures = this._selectedFeatures.filter(
      (f) => f !== feature
    );
  }

  // Clears all selections
  clear() {
    this._selectedFeatures = [];
  }

  // Simulate dispatching a 'select' event
  dispatchSelectEvent(
    selected: FeatureLike[] = [],
    deselected: FeatureLike[] = []
  ) {
    this._selectedFeatures = this._selectedFeatures.filter(
      (f) => !deselected.includes(f)
    );
    selected.forEach((f) => {
      if (!this._selectedFeatures.includes(f)) this._selectedFeatures.push(f);
    });
  }

  // Stubs for OpenLayers API
  on() {
    /* no-op */
  }
  once() {
    /* no-op */
  }
  un() {
    /* no-op */
  }
}
