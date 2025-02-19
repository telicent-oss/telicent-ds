import React, { useEffect } from "react";
import {
  LngLatBoundsLike,
  Marker,
  Source,
  useMap,
} from "react-map-gl/maplibre";
import classNames from "classnames";
import { getBounds } from "./utils";
import { getLabelCharacters } from "./helper";
import { splitURIForNamespaceAndTerm } from "./strings";
import { FlattenedStyleType } from "@telicent-oss/ontologyservice";
import { ClassIcon } from "./FeatureMap";

export const GEOJSON = "geojson";
export const FEATURE_COLLECTION = "FeatureCollection";


export type LocationFeature = {
  type: "Feature";
  properties: {
    id: string;
    longitude: number;
    latitude: number;
    name: string;
    types: string[];
    uri: string;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
};


type ResultsMarkersProps = {
  onClick: (uri: string) => void;
  selected: any;
  findByClassUri: (maybeClassUri: string) => ClassIcon;
  geoPoints: LocationFeature[];

};

const ResultsMarkers: React.FC<ResultsMarkersProps> = ({
  geoPoints,
  selected,
  findByClassUri,
  onClick
}) => {
  const { TelicentMap: map } = useMap();

  useEffect(() => {
    if (!geoPoints || !map) return;
    const bounds = getBounds(geoPoints);

    console.log({ geoPoints })
    // Wait until next cycle to perform animation
    setTimeout(() => {
      map.fitBounds(bounds, { padding: 24, duration: 1000, maxZoom: 9 });
    }, 100)
  }, [map, geoPoints])

  return (
    <Source
      id="document-locations"
      type={GEOJSON}
      data={{ type: FEATURE_COLLECTION, features: geoPoints }}
      generateId
    >
      {geoPoints.map((location: LocationFeature) => (
        <DocumentMarker key={location.properties.uri} feature={location} onClick={onClick} findByClassUri={findByClassUri} selected={selected} />
      ))}
    </Source>
  );
};

type DocumentMarkerProps = {
  feature: LocationFeature;
  selected: any;
  onClick: (uri: string) => void;
  findByClassUri: (maybeClassUri: string) => ClassIcon;
};

const DocumentMarker: React.FC<DocumentMarkerProps> = ({ feature, findByClassUri, selected, onClick }) => {
  const { TelicentMap: map } = useMap();

  const { properties, geometry } = feature;
  const type = properties.types[0];

  // TODO Don't cast as FlattenedStyleType
  // WHY its not accurate (but doesn't currently impact this code)
  // HOW Fix upstream types
  // WHEN have time; Perhaps after TELFE-652, TELFE-653, TELFE-654
  const iconProps = findByClassUri(type) as FlattenedStyleType;
  const faIcon = iconProps.faIcon;
  const color = iconProps.color;
  const [namespace, term] = splitURIForNamespaceAndTerm(type);
  const label = term !== "" ? term : namespace;
  const labelCharacters = getLabelCharacters(label);
  const isSelected = selected.includes(properties.uri);


  useEffect(() => {
    if (isSelected && map) {
      map.panTo(geometry.coordinates, { duration: 1000 });
    }
  }, [selected]);

  const handleOnClick = () => {
    onClick(feature.properties.uri)
  };

  return (
    <span data-name={properties.name}>
      <Marker
        key={properties.uri}
        longitude={geometry.coordinates[0]}
        latitude={geometry.coordinates[1]}
        onClick={handleOnClick}
        pitchAlignment="map"
        anchor="center"
        style={{
          backgroundColor: iconProps.backgroundColor,
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // borderColor: isSelected ? "rgb(220, 98, 251)" : color,
          borderColor: "rgb(220, 98, 251)",
          borderRadius: "9999px",
          cursor: "pointer",
          borderWidth: "1px",
          // borderWidth: isSelected ? "2px" : "1px",
          width: "28px",
          height: "28px",
        }}
      >
        {faIcon ? (
          <i data-icon={faIcon} className={classNames(faIcon, "px-1")} />
        ) : (
          <p className="p-1 font-body">{labelCharacters}</p>
        )}
      </Marker>
    </span>
  );
};

export default ResultsMarkers;
