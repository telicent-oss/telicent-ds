import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  PopOver,
  FlexGrid,
  FlexGridItem,
  Button,
  Text,
  useExtendedTheme,
} from "../../../../../export";
import { Image } from "../primitives/Image";
import { PopOverProps } from "../../../../../v1/components/surfaces/PopOver/Popover";
import { ButtonProps } from "@mui/material";
// ignore story-coverage.test.ts

export interface LayerOption {
  uri: string;
  image: string;
  label: string;
}

export interface PresentationalProps {
  selectedIndex: number;
  data: LayerOption[];
  anchorEl: HTMLButtonElement | null;
  onCloseDropdown: PopOverProps["onClose"];
  onClickDropdown: ButtonProps["onClick"];
  onListItemClick: (index: number) => void;
}

export const LayerSelectorPresentationalButton: React.FC<
  PresentationalProps
> = ({ data, selectedIndex, anchorEl, onClickDropdown }) => {
  const extendedTheme = useExtendedTheme();
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "layer-selector-popover" : undefined;
  return (
    <Button
      id="layer-selector"
      variant="tertiary"
      aria-describedby={id}
      onClick={onClickDropdown}
    >
      <Image
        borderColor={extendedTheme.palette.primary.main}
        src={data[selectedIndex].image}
        alt={data[selectedIndex].label}
        title={data[selectedIndex].label}
      />
      <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
    </Button>
  );
};

export const LayerSelectorPresentationalPopOver: React.FC<PresentationalProps> = ({
  data,
  selectedIndex,
  anchorEl,
  onCloseDropdown,
  onListItemClick,
}) => {
  const extendedTheme = useExtendedTheme();
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "layer-selector-popover" : undefined;

  return (
    <PopOver
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onCloseDropdown}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {
        <FlexGrid direction="column">
          {data.map((item, index) => (
            <FlexGridItem alignContent={"flex-start"} key={item.label}>
              <Button
                disabled={index === selectedIndex}
                onClick={() => onListItemClick(index)}
                variant="tertiary"
                key={item.label}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <Image
                  borderColor={
                    index === selectedIndex
                      ? extendedTheme.palette.primary.main
                      : "transparent"
                  }
                  src={item.image}
                  alt={item.label}
                  title={item.label}
                />
                <Text textTransform="capitalize" variant="body2">
                  {item.label}
                </Text>
              </Button>
            </FlexGridItem>
          ))}
        </FlexGrid>
      }
    </PopOver>
  );
};
