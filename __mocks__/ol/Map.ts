export default class MockMap {
  private target: string | HTMLElement | null = null;
  private view: any = null;
  private layers: any[] = [];

  setTarget(target: string | HTMLElement | null) {
    this.target = target;
  }

  getTarget() {
    return this.target;
  }

  setView(view: any) {
    this.view = view;
  }

  getView() {
    return this.view;
  }

  addLayer(layer: any) {
    this.layers.push(layer);
  }

  getLayers() {
    return {
      getArray: () => this.layers,
    };
  }

  updateSize() {}
  dispose() {}
}
