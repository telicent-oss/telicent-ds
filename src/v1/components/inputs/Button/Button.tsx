import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import LinkButton from "./LinkButton";

export interface ButtonProps
  extends Omit<
    MUIButtonProps,
    | "color"
    | "component"
    | "disabled"
    | "disableElevation"
    | "endIcon"
    | "fullWidth"
    | "href"
    | "size"
    | "startIcon"
    | "variant"
    | "sx"
    | "classes"
  > {
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: "primary" | "inherit";
  /**
   * The component used for the root node. Either a string to use a HTML element
   * or a component.
   */
  component?: MUIButtonProps["component"];
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: MUIButtonProps["size"];
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The variant to use.
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "tertiary" | "link" | "text";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = "primary",
    color = "primary",
    ...buttonProps
  } = props
  if (variant === "primary") return <PrimaryButton {...buttonProps} ref={ref} />;
  if (variant === "secondary") return <SecondaryButton {...buttonProps} ref={ref} />;

  /**
   * Cannot extend variants in theme. Using sx as workaround
   * https://github.com/mui/material-ui/issues/32427
   */
  if (variant === "link") return <LinkButton {...buttonProps} ref={ref} />;

  return (
    <MUIButton variant="text" color={color} {...buttonProps} ref={ref}>
      {buttonProps.children}
    </MUIButton>
  );
});

export default Button;
