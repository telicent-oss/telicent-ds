import { pathToOLFeature } from "../paths";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";
import { MultiLineString } from "ol/geom";
import { Style } from "ol/style";
import { PathFeature } from "../../types/paths";

describe("pathToOLFeature", () => {
  it("creates a Feature with LineString geometry and id", () => {
    const path = {
      id: "p1",
      type: "LineString",
      name: "Test Path",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
    } as PathFeature;

    const feature = pathToOLFeature(path);

    expect(feature).toBeInstanceOf(Feature);
    expect(feature.getId()).toBe("p1");
    expect(feature.getGeometry()).toBeInstanceOf(LineString);
  });

  it("creates a Feature with MultiLineString geometry", () => {
    const path = {
      id: "p2",
      type: "MultiLineString",
      name: "Multi Path",
      coordinates: [
        [
          [-0.1, 51.5],
          [2.3, 48.8],
        ],
        [
          [13.4, 52.5],
          [12.5, 41.9],
        ],
      ],
    } as PathFeature;

    const feature = pathToOLFeature(path);

    expect(feature).toBeInstanceOf(Feature);
    expect(feature.getId()).toBe("p2");
    expect(feature.getGeometry()).toBeInstanceOf(MultiLineString);
  });

  it("applies stroke style matching config values", () => {
    const path: PathFeature = {
      id: "p3",
      type: "LineString",
      name: "Styled Path",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
      style: { color: "#FF0000", width: 4, lineDash: [5, 3] },
    };

    const feature = pathToOLFeature(path);
    const style = feature.getStyle() as Style;
    const stroke = style.props.stroke;

    expect(stroke.props.color).toBe("#FF0000");
    expect(stroke.props.width).toBe(4);
    expect(stroke.props.lineDash).toEqual([5, 3]);
    expect(feature.get("originalStyle")).toBe(style);
  });

  it("does not set style when none provided", () => {
    const path = {
      id: "p4",
      type: "LineString",
      name: "Unstyled Path",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
    } as PathFeature;

    const feature = pathToOLFeature(path);

    expect(feature.getStyle()).toBeNull();
    expect(feature.get("originalStyle")).toBeUndefined();
  });

  it("sets an array of styles when direction is provided", () => {
    const path = {
      id: "p6",
      type: "LineString",
      name: "Directed Path",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
        [5.0, 46.0],
      ],
      style: { color: "#FF0000", width: 3, direction: {} },
    } as PathFeature;

    const feature = pathToOLFeature(path);
    const appliedStyle = feature.getStyle();

    expect(Array.isArray(appliedStyle)).toBe(true);
    expect((appliedStyle as Style[]).length).toBe(3);
    expect(Array.isArray(feature.get("originalStyle"))).toBe(true);
  });

  it("uses direction.color over style.color and creates RegularShape", () => {
    const path: PathFeature = {
      id: "p7",
      type: "LineString",
      name: "Custom Direction",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
      style: {
        color: "#FF0000",
        direction: { color: "#00FF00", size: 20 },
      },
    };

    const feature = pathToOLFeature(path);
    const styles = feature.getStyle() as Style[];
    const arrowStyle = styles[1];
    const shape = arrowStyle.props.image;

    expect(shape.options.points).toBe(3);
    expect(shape.options.radius).toBe(20);
    expect(shape.options.fill.props.color).toBe("#00FF00");
  });

  it("creates Icon with encoded SVG data URI for svg marker", () => {
    const path: PathFeature = {
      id: "p9",
      type: "LineString",
      name: "SVG Direction",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
      style: {
        color: "#FF0000",
        direction: {
          size: 24,
          marker: { type: "svg", markup: "<svg></svg>" },
        },
      },
    };

    const feature = pathToOLFeature(path);
    const styles = feature.getStyle() as Style[];
    const arrowStyle = styles[1];
    const icon = arrowStyle.props.image;

    expect(icon.props.src).toContain("data:image/svg+xml;charset=utf-8,");
    expect(icon.props.src).toContain(encodeURIComponent("<svg></svg>"));
    expect(icon.props.scale).toBe(24 / 12);
    expect(icon.props.rotateWithView).toBe(true);
  });

  it("sets a single style when no direction provided", () => {
    const path = {
      id: "p8",
      type: "LineString",
      name: "No Direction",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
      style: { color: "#FF0000" },
    } as PathFeature;

    const feature = pathToOLFeature(path);

    expect(Array.isArray(feature.getStyle())).toBe(false);
  });

  it("generates direction arrows for MultiLineString", () => {
    const path: PathFeature = {
      id: "multi-dir",
      type: "MultiLineString",
      name: "Multi Directed",
      coordinates: [
        [
          [-0.1, 51.5],
          [2.3, 48.8],
        ],
        [
          [13.4, 52.5],
          [12.5, 41.9],
        ],
      ],
      style: {
        color: "#FF0000",
        width: 3,
        direction: { size: 10 },
      },
    };

    const feature = pathToOLFeature(path);
    const appliedStyle = feature.getStyle();

    // 1 stroke + 1 arrow per segment (2 lines × 1 segment each = 2 arrows)
    expect(Array.isArray(appliedStyle)).toBe(true);
    expect((appliedStyle as Style[]).length).toBe(3);
  });

  it("spreads meta properties onto the feature", () => {
    const path = {
      id: "p5",
      type: "LineString",
      name: "Meta Path",
      coordinates: [
        [-0.1, 51.5],
        [2.3, 48.8],
      ],
      meta: { category: "route" },
    } as PathFeature;

    const feature = pathToOLFeature(path);
    expect(feature.get("category")).toBe("route");
  });
});
