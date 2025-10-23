import MockVectorSource from "../source/Vector";

// __mocks__/ol/layer/Base.ts
export default class MockBaseLayer {
  private meta: any;
  private visible: boolean = true;
  private zIndex: number = 0;
  private source: any;

  constructor(options?: any) {
    this.source = options?.source || new MockVectorSource();
  }

  set(key: string, val: any) {
    (this as any)[key] = val;
  }

  get(key: string) {
    return (this as any)[key];
  }

  getZIndex() {
    return this.zIndex;
  }

  setZIndex(z: number) {
    this.zIndex = z;
  }
  setVisible(visible: boolean) {
    this.visible = visible;
  }
  getVisible() {
    return this.visible;
  }
  setDeclutter() {}
  getSource() {
    return this.source;
  }
}
