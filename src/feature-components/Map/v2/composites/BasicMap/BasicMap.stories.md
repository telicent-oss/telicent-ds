import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { BasicMapV2 } from './BasicMap';
import React, { useRef } from 'react';
import { BaseLayer } from '../../types';

<Meta title="Map/BasicMapV2" component={BasicMapV2} />

# BasicMapV2

`BasicMapV2` is a flexible OpenLayers-based map component. It supports multiple base layers and overlays, and automatically includes the `LayerSelector` for switching layers interactively.

<Canvas>
  <Story name="Default">
    {() => {
      const layersRef = useRef<BaseLayer[]>([
        {
          kind: "base-vector-tiles",
          provider: "mapbox",
          label: "ESRI World Imagery",
          url: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/arcgis/streets-night?token=ARC_GIS_API_TOKEN`,
          accessToken: "ARC_GIS_API_TOKEN",
          previewImage: "/images/default.png",
          visible: true,
        },
        {
          kind: "base-raster",
          provider: "xyz",
          label: "OpenStreetMap",
          url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          previewImage: "/images/street.png",
          visible: false,
        },
        {
          kind: "base-vector-tiles",
          provider: "arcgis",
          label: "ArcGIS Streets",
          url: "https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_GCS_v2/VectorTileServer",
          previewImage: "/images/satellite.png",
          accessToken: "ARC_GIS_API_TOKEN",
          visible: false,
        },
      ]);

      return (
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <BasicMapV2 zoom={5} center={[0, 0]} layersRef={layersRef} />
        </div>
      );
    }}
  </Story>
</Canvas>

## Base Layer Types

### Raster Layers (`base-raster`)

```ts
{
  kind: 'base-raster',
  provider: 'xyz', // 'osm', 'xyz', 'wmts'
  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  label: 'OpenStreetMap',
  previewImage: '/images/street.png',
  visible: true,
}
```
