import React from "react";
import { Marker } from "react-map-gl/maplibre";
import { MarkerEvent, MarkerInstance } from "react-map-gl/dist/esm/types";
import TeliTypeIcon from "../TeliTypeIcon/TeliTypeIcon";

type Feature = GeoJSON.Feature<GeoJSON.Point, OntologyClassMarkerProperties>;

export type OntologyClassMarkerProperties<FeatureProperties = unknown> =
  FeatureProperties & {
    uri: string;
    classUri: string;
    id: string;
  } & Partial<{
      selected: boolean;
    }>;

export type OntologyClassMarkerProps = Partial<{
  features: Feature[];
  onClick: (
    event: MarkerEvent<MarkerInstance, MouseEvent>,
    feature: Feature
  ) => void;
}>;

const OntologyClassMarker: React.FC<OntologyClassMarkerProps> = ({
  features = [],
  onClick,
}) => {
  const handleClick =
    (feature: Feature) => (event: MarkerEvent<MarkerInstance, MouseEvent>) => {
      if (onClick) onClick(event, feature);
    };

  return features.map((feature) => (
    <Marker
      key={feature.properties.uri}
      longitude={feature.geometry.coordinates[0]}
      latitude={feature.geometry.coordinates[1]}
      onClick={handleClick(feature)}
      anchor="bottom"
      style={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <TeliTypeIcon
        type={feature.properties.classUri}
        size="xs"
        borderColor={feature.properties.selected ? "#f5f5f5" : "inherit"}
      />
    </Marker>
  ));
};

export default OntologyClassMarker;
