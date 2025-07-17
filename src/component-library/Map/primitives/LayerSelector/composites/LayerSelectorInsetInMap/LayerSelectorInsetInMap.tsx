import React from "react";
import { useMapCanvasContext } from "../../../MapCanvas/MapCanvasProvider";
import {
  LayerSelectorPresentationalPopOver,
  PresentationalProps,
} from "../../primitives/LayerSelectorPresentational";
import { useLayerSelector } from "../../primitives/useLayerSelector";
import { Image } from "../../primitives/Image";
import { Box, Paper } from "@mui/material";
import SecondaryButton from "../../../../../../v1/components/inputs/Button/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useExtendedTheme } from "../../../../../../export";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// ignore story-coverage.test.ts

export const PresentationalButton: React.FC<PresentationalProps> = ({
  data,
  selectedIndex,
  anchorEl,
  onClickDropdown,
}) => {
  const extendedTheme = useExtendedTheme();
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "layer-selector-popover" : undefined;
  return (
    <Box>
      <Paper>
        <SecondaryButton
          id="layer-selector"
          aria-describedby={id}
          onClick={onClickDropdown}
        >
          <Box p={0.1}>
            <Image
              borderColor={extendedTheme.palette.primary.main}
              src={data[selectedIndex].image}
              alt={data[selectedIndex].label}
              title={data[selectedIndex].label}
            />
          </Box>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </SecondaryButton>
      </Paper>
    </Box>
  );
};

export const LayerSelectorInsetInMap: React.FC = () => {
  const context = useMapCanvasContext();
  const hook = useLayerSelector(context.styleSelector.props);
  if (context.styleSelector.props.data.length <= 1) {
    return null;
  }
  return (
    <div>
      <PresentationalButton {...hook} />
      <LayerSelectorPresentationalPopOver {...hook} />
    </div>
  );
};
