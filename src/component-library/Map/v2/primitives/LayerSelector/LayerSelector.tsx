import React, { useMemo, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import type BaseLayer from "ol/layer/Base";

import { Button, Text, useExtendedTheme } from "../../../../../export";
import { Image } from "../../../primitives/LayerSelector/primitives/Image";
import type { LayerSelectorProps } from "../../types/map-types";
import { getMeta } from "../../utils/layers";

import { Menu, type MenuOption } from "../../../../../v1/components/Navigation/Menu/Menu";

const resolveVisibleBaseLayerIndex = (layers: BaseLayer[]): number => {
  const storedLabel = localStorage.getItem("map.baselayer");
  const baseLayers = layers.filter((l) => l.get("kind") !== "overlay-vector");

  if (storedLabel) {
    const storedIndex = baseLayers.findIndex((l) => getMeta(l)?.label === storedLabel);
    if (storedIndex !== -1) return storedIndex;
  }

  const configIndex = baseLayers.findIndex((l) => getMeta(l)?.visible);
  if (configIndex !== -1) return configIndex;

  return 0;
};

export const LayerSelectorV2: React.FC<LayerSelectorProps> = ({ layers, style = {} }) => {
  const theme = useExtendedTheme();

  const initialIndex = resolveVisibleBaseLayerIndex(layers);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  const baseLayers = useMemo(() => layers.filter((l) => l.get("kind")?.startsWith("base")), [layers]);

  const selectedMeta = useMemo(() => getMeta(baseLayers[selectedIndex]), [baseLayers, selectedIndex]);

  const handleSelect = (label: string) => {
    localStorage.setItem("map.baselayer", label);

    layers.forEach((layer) => {
      const meta = getMeta(layer);
      if (layer.get("kind") === "overlay-vector") return;

      const visible = meta?.label === label;
      layer.setVisible(visible);

      if (visible) {
        const idx = baseLayers.findIndex((bl) => getMeta(bl)?.label === label);
        if (idx !== -1) setSelectedIndex(idx);
      }
    });
  };

  useEffect(() => {
    const storedLabel = localStorage.getItem("map.baselayer");

    if (storedLabel) {
      handleSelect(storedLabel);
      return;
    }

    // If nothing stored, align selector with any layer marked visible in config
    const idx = baseLayers.findIndex((l) => getMeta(l)?.visible);
    setSelectedIndex(idx !== -1 ? idx : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layers]);

  if (baseLayers.length <= 1 || selectedIndex == null) return null;

  const options: MenuOption[] = baseLayers.map((layer, index) => {
    const meta = getMeta(layer);
    const isSelected = index === selectedIndex;

    return {
      id: meta.label,
      onClick: () => handleSelect(meta.label),
      selected: isSelected,

      icon: <Image src={meta.image} role="presentation" title={meta.label} />,
      label: (
        <Text textTransform="capitalize" variant="body2">
          {meta.label}
        </Text>
      ),
    };
  });

  return (
    <div id="layer-selector" style={{ ...style }}>
      <Menu
        aria-label="layer selector"
        menuId="layer-selector-menu"
        options={options}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        button={(btnProps) => (
          <Button
            {...btnProps}
            id="layer-selector"
            variant="text"
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#1D1D1D",
              color: "white",
              "&:hover": { color: theme.palette.primary.main, backgroundColor: "#1D1D1D" },
            }}
          >
            {selectedMeta?.image ? (
              <Image src={selectedMeta.image} alt={selectedMeta.label} title={selectedMeta.label} />
            ) : null}

            <FontAwesomeIcon icon={btnProps["aria-expanded"] ? faAngleUp : faAngleDown} />
          </Button>
        )}
      />
    </div>
  );
};
