import React, { useEffect } from "react";
import {
  Marker,
  Source,
  useMap,
} from "react-map-gl/maplibre";
import classNames from "classnames";
import { getLabelCharacters } from "./helper";
import { splitURIForNamespaceAndTerm } from "./strings";
import { FlattenedStyleType } from "@telicent-oss/ontologyservice";
import { ClassIcon } from "./FeatureMap";
import geohash from "./geohash";

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
  markers: ResultMarker[];

};

const ResultsMarkers: React.FC<ResultsMarkersProps> = ({
  markers = [],
  selected,
  findByClassUri,
  onClick
}) => {

  return (
    <Source
      id="document-locations"
      type={GEOJSON}
      data={{ type: FEATURE_COLLECTION, features: markers }}
      generateId
    >
      {markers.map((marker: ResultMarker) => (
        <DocumentMarker key={marker.uri} marker={marker} onClick={onClick} findByClassUri={findByClassUri} selected={selected} />
      ))}
    </Source>
  );
};


export type ResultMarker = {
  geohash: string;
  type: string;
  uri: string;
  name: string;
};

type DocumentMarkerProps = {
  marker: ResultMarker;
  selected: any;
  onClick: (uri: string) => void;
  findByClassUri: (maybeClassUri: string) => ClassIcon;
};

const DocumentMarker: React.FC<DocumentMarkerProps> = ({ marker, findByClassUri, selected, onClick }) => {
  const { TelicentMap: map } = useMap();

  const { latitude, longitude } = geohash.decode(marker.geohash.split("http://geohash.org/")[1]);

  // TODO Don't cast as FlattenedStyleType
  // WHY its not accurate (but doesn't currently impact this code)
  // HOW Fix upstream types
  // WHEN have time; Perhaps after TELFE-652, TELFE-653, TELFE-654
  const iconProps = findByClassUri(marker.type) as FlattenedStyleType;
  const faIcon = iconProps.faIcon;
  const color = iconProps.color;
  const [namespace, term] = splitURIForNamespaceAndTerm(marker.type);
  const label = term !== "" ? term : namespace;
  const labelCharacters = getLabelCharacters(label);
  const isSelected = selected.includes(marker.uri);

  useEffect(() => {
    if (isSelected && map) {
      map.panTo([longitude, latitude], { duration: 1000 });
    }
  }, [selected]);

  const handleOnClick = () => {
    console.log(marker.uri)
    onClick(marker.uri)
  };

  return (
    <span data-name={marker.name}>
      <Marker
        key={marker.uri}
        longitude={longitude}
        latitude={latitude}
        onClick={handleOnClick}
        pitchAlignment="map"
        anchor="center"
        style={{
          backgroundColor: iconProps.backgroundColor,
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: isSelected ? "rgb(220, 98, 251)" : color,
          borderRadius: "9999px",
          cursor: "pointer",
          borderWidth: isSelected ? "2px" : "1px",
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
