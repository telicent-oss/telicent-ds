// __mocks__/ol/Feature.ts
import type { StyleLike } from "ol/style/Style";

class MockFeature {
  props: Record<string, any>;
  geometry: any;
  id: string;
  style: StyleLike | null = null;

  constructor(props: { geometry?: any; [key: string]: any } = {}) {
    this.props = props;
    this.geometry = props.geometry;
  }

  getGeometry() {
    return this.geometry;
  }

  set(key: string, val: any) {
    this.props[key] = val;
  }

  get(key: string) {
    return this.props[key];
  }

  setStyle(style: StyleLike | null) {
    this.style = style;
  }

  getStyle() {
    return this.style;
  }

  setId(id: string) {
    this.id = id;
  }
}

export default MockFeature;
