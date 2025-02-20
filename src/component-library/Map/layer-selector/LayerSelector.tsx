// !CRITICAL do not extend. Duplicated from graph
// TODO import from shared repo
// WHEN TELFE-876
import React, { useState } from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  PopOver,
  FlexGrid,
  FlexGridItem,
  Button,
  Text,
  useExtendedTheme,
} from "../../../export";

// import LayersIcon from '@mui/icons-material/Layers';

const Image = ({ borderColor, src, alt, title }) => (
  <Box
    sx={{
      border: `2px solid ${borderColor}`,
      display: "inline-block",
      borderRadius: "3px",
      overflow: "hidden",
    }}
    mr={1}
  >
    <img
      src={src}
      alt={alt}
      title={title}
      style={{
        width: 25,
        height: 20,
      }}
    />
  </Box>
);

export const LayerSelector = ({ data, onChange }) => {
  const extendedTheme = useExtendedTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  React.useEffect(() => {
    onChange(data[selectedIndex]);
  }, []);

  const handleClick = (event) => {
    if (anchorEl) {
      cycleSelection();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cycleSelection = () => {
    const nextIndex = (selectedIndex + 1) % data.length;
    setSelectedIndex(nextIndex);
    onChange(data[nextIndex]);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    onChange(data[index]);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "layer-selector-popover" : undefined;
  if (data.length <= 1) {
    // !todo needs styling
    return null;
  }
  return (
    <div>
      <Button variant="tertiary" aria-describedby={id} onClick={handleClick}>
        <Image
          borderColor={extendedTheme.palette.primary.main}
          src={data[selectedIndex].image}
          alt={data[selectedIndex].label}
          title={data[selectedIndex].label}
        />
        <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
      </Button>
      <PopOver
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <FlexGrid direction="column">
          {data.map((item, index) => (
            <FlexGridItem alignContent={"flex-start"} key={item.label}>
              <Button
                disabled={index === selectedIndex}
                onClick={() => handleListItemClick(index)}
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
      </PopOver>
    </div>
  );
};
