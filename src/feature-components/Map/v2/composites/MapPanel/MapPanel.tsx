import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import type BaseLayer from "ol/layer/Base";

import { BasicMapV2 } from "../BasicMap/BasicMap";
import { LayerSelectorV2 } from "../../primitives/LayerSelector/LayerSelector";
import type {
  BasicMapProperties,
  BasicMapV2Handle,
} from "../../types/map-types";

import { FloatingPanel } from "../../../../../components/surfaces/FloatingPanel";

export interface MapPanelProps extends BasicMapProperties {
  /** Title shown in the panel's chrome. */
  title: string;
  /** FloatingPanel target id — must match an entry in FloatingPanelProvider state. */
  targetId: string;
  /** Optional count badge beside the title. */
  count?: number;
  /** Movement bounds. See react-rnd. */
  bounds?: "parent" | "window" | "body" | string | Element;
  /** Initial panel position. */
  defaultPosition?: { x: number; y: number };
  /** Extra className forwarded to the panel chrome. */
  className?: string;
}

/**
 * MapPanel — DraggablePanel chrome around BasicMapV2, with LayerSelectorV2
 * lifted into the panel's `menu` slot. Mirrors the composition used in
 * apps/graph. Requires a `FloatingPanel.Provider` upstream so the panel's
 * visibility state is tracked.
 */
export const MapPanel = forwardRef<BasicMapV2Handle, MapPanelProps>(
  (
    {
      title,
      targetId,
      count,
      bounds,
      defaultPosition,
      className,
      controls,
      onLayersReady,
      ...mapProps
    },
    ref
  ) => {
    const mapRef = useRef<BasicMapV2Handle>(null);
    const [layers, setLayers] = useState<BaseLayer[]>([]);

    useImperativeHandle(ref, () => mapRef.current as BasicMapV2Handle, []);

    return (
      <FloatingPanel.DraggablePanel
        title={title}
        targetId={targetId}
        count={count}
        bounds={bounds}
        defaultPosition={defaultPosition}
        className={className}
        menu={<LayerSelectorV2 layers={layers} />}
      >
        <BasicMapV2
          ref={mapRef}
          {...mapProps}
          controls={{ ...controls, showLayerSelector: false }}
          onLayersReady={(ready) => {
            if (ready) setLayers(mapRef.current?.layers ?? []);
            onLayersReady?.(ready);
          }}
        />
      </FloatingPanel.DraggablePanel>
    );
  }
);

MapPanel.displayName = "MapPanel";
