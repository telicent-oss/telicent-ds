import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { PopOver, FlexGrid, FlexGridItem, Button, Text, useExtendedTheme, ButtonProps } from "../../../../../export";
import { Image } from "../primitives/Image";
import { PopOverProps } from "../../../../../v1/components/surfaces/PopOver/Popover";

// ignore story-coverage.test.ts

export interface LayerOption {
  uri: string;
  image: string;
  label: string;
}

export interface PresentationalProps extends Pick<ButtonProps, "sx" | "variant" | "color" | "size"> {
  selectedIndex: number;
  data: LayerOption[];
  anchorEl: HTMLButtonElement | null;
  onCloseDropdown: PopOverProps["onClose"];
  onClickDropdown: ButtonProps["onClick"];
  onListItemClick: (index: number) => void;
}

export const LayerSelectorPresentationalButton: React.FC<PresentationalProps> = ({
  data,
  selectedIndex,
  anchorEl,
  onClickDropdown,
  sx,
  variant,
  color,
}) => {
  const extendedTheme = useExtendedTheme();
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "layer-selector-popover" : undefined;
  if (data?.[selectedIndex]?.image === undefined) {
    console.warn(`No image at ${selectedIndex} in ${JSON.stringify(data)}`);
  }
  return (
    <Button
      id="layer-selector"
      size="large"
      aria-describedby={id}
      onClick={onClickDropdown}
      sx={sx}
      variant={variant}
      color={color}
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
                variant="text"
                key={item.label}
                sx={{ width: "100%", justifyContent: "flex-start" }}
              >
                <Image
                  borderColor={index === selectedIndex ? extendedTheme.palette.primary.main : "transparent"}
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
