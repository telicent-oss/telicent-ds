import { default as Feature } from 'ol/Feature';
import { default as Polygon } from 'ol/geom/Polygon';
import { PolygonFeature } from '../types/polygons';
import { MultiPolygon } from 'ol/geom';
export declare const polygonToOLFeature: (polygon: PolygonFeature) => Feature<Polygon | MultiPolygon>;
