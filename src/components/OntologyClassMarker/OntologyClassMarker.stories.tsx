import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Map from "react-map-gl/maplibre";
import OntologyService from "@telicent-io/ontologyservice";

import OntologyClassMarker, {
  OntologyClassMarkerProperties,
} from "./OntologyClassMarker";
import { DSProviders } from "../../providers";

import "maplibre-gl/dist/maplibre-gl.css";

const ontologyService = new OntologyService(
  "http://localhost:3030/",
  "ontology"
);

const meta = {
  component: OntologyClassMarker,
  decorators: [
    (Story) => (
      <DSProviders ontologyService={ontologyService}>
        <Map
          initialViewState={{
            latitude: 50.66206632912732,
            longitude: -1.3480234953335598,
            zoom: 9,
          }}
          mapStyle="https://api.maptiler.com/maps/streets-v2-dark/style.json?key=AgCsD3bXojrU2bAN3cVe"
          style={{ width: 600, height: 400 }}
        >
          <Story />
        </Map>
      </DSProviders>
    ),
  ],
} satisfies Meta<typeof OntologyClassMarker>;
export default meta;

type Story = StoryObj<typeof OntologyClassMarker>;

type Feature = GeoJSON.Feature<
  GeoJSON.Point,
  OntologyClassMarkerProperties<{ criticality: number }>
>;

const features: Feature[] = [
  {
    type: "Feature",
    properties: {
      uri: "https://www.iow.gov.uk/DigitalTwin#E003",
      id: "E003",
      criticality: 12,
      classUri:
        "http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex",
    },
    geometry: {
      type: "Point",
      coordinates: [-1.2862864, 50.745509],
    },
  },
  {
    type: "Feature",
    properties: {
      uri: "https://www.iow.gov.uk/DigitalTwin#E004",
      id: "E004",
      criticality: 12,
      classUri:
        "http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex",
    },
    geometry: {
      type: "Point",
      coordinates: [-1.2539468, 50.710424],
    },
  },
  {
    type: "Feature",
    properties: {
      uri: "https://www.iow.gov.uk/DigitalTwin#E025",
      id: "E025",
      criticality: 8,
      classUri:
        "http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex",
      selected: true,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.3292354, 50.817705],
    },
  },
];

export const Example: Story = {
  args: { features },
  render: (args) => <OntologyClassMarker {...args} />,
};

export const Selected: Story = {
  args: {
    features: [
      {
        ...features[0],
        properties: { ...features[0].properties, selected: true },
      },
      { ...features[1] },
    ],
  },
};
