import React from "react";
import classNames from "classnames";
import { Chip, ChipProps } from "@mui/material";
import { TeliDeleteIcon } from "../TeliIcons";

import "./telichip.css";

type MUIChipProps = Omit<ChipProps, "variant" | "color" | "avatar" | "classes">;
export interface TeliChipProps extends MUIChipProps {
  href?: string;
  variant?: "primary" | "secondary" | "tertiary" | "basic";
}

const TeliChip: React.FC<TeliChipProps> = ({
  label,
  variant = "primary",
  className: chipClassName,
  ...chipProps
}) => {
  const isPrimary = variant === "primary";
  const isTertiary = variant === "tertiary";
  const isFilled = isPrimary || isTertiary;

  return (
    <Chip
      label={label}
      variant={isFilled ? "filled" : "outlined"}
      className={classNames(
        {
          "teli-chip--primary": isPrimary,
          "teli-chip--secondary": variant === "secondary",
          "teli-chip--tertiary": isTertiary,
        },
        chipClassName
      )}
      deleteIcon={<TeliDeleteIcon aria-label={`Delete ${label}`} />}
      {...chipProps}
    />
  );
};

export default TeliChip;
