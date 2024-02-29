import React, { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import classNames from "classnames";

type MUIButtonBaseProps = Omit<
  ButtonBaseProps,
  | "centerRipple"
  | "classes"
  | "action"
  | "disableRipple"
  | "disableTouchRipple"
  | "focusRipple"
  | "focusVisibleClassName"
  | "onFocusVisible"
  | "TouchRippleProps"
  | "touchRippleRef"
  | "sx"
>;
export interface TeliButtonBaseProps extends MUIButtonBaseProps {
  /**
   * The variant to use.**Note**: Use primary instead of contained, secondary
   * instead of outline and tertiary instead of text. These variants will be
   * removed in the next version
   * @default primary
   */
  variant?: "primary" | "secondary" | "tertiary" | "link" | "basic";
  linePosition?: "left" | "right" | "center";
  /**
   * The color of the component.
   */
  color?: "danger";
  /**
   * The URL to link to when the button is clicked. If defined, an a element
   * will be used as the root node.
   */
  href?: string;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * The size of the component.
   */
  size?: "small" | "medium" | "large";
}

const TeliButtonBase: React.FC<TeliButtonBaseProps> = forwardRef(
  (
    {
      variant,
      linePosition = "left",
      color,
      startIcon,
      endIcon,
      size = "medium",
      disabled = false,
      className: btnClassNames,
      children,
      ...otherBtnProps
    },
    ref
  ) => {
    const isPrimary = variant === "primary";
    const isSecondary = variant === "secondary";
    const isLinePositionLeft = linePosition === "left";
    const isLinePositionRight = linePosition === "right";
    const isLinePositionCenter = linePosition === "center";

    if (variant === "link") {
      return (
        <div
          className={classNames("teli-button__link", {
            "teli-button__link-disabled": disabled,
          })}
        >
          <ButtonBase
            ref={ref}
            className={classNames(
              "teli-button",
              {
                "teli-button__link--left": isLinePositionLeft,
                "teli-button__link--right": isLinePositionRight,
              },
              btnClassNames
            )}
            disabled={disabled}
            {...otherBtnProps}
          >
            {startIcon}
            {children}
            {endIcon}
          </ButtonBase>
          <div
            className={classNames("teli-button__link-line", {
              "teli-button__link--line-right": isLinePositionRight,
              "teli-button__link--line-center": isLinePositionCenter,
            })}
          />
        </div>
      );
    }

    return (
      <ButtonBase
        ref={ref}
        className={classNames(
          "teli-button",
          {
            "teli-button--small": size === "small",
            "teli-button--medium": size === "medium",
            "teli-button--large": size === "large",
            "teli-button__primary": isPrimary,
            "teli-button__secondary": isSecondary,
            "teli-button__tertiary": variant === "tertiary",
            "teli-button__primary--danger": isPrimary && color === "danger",
          },
          btnClassNames
        )}
        disabled={disabled}
        {...otherBtnProps}
      >
        {startIcon}
        {children}
        {endIcon}
      </ButtonBase>
    );
  }
);

export default TeliButtonBase;
