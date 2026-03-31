/**
 * Button variant tokens - framework agnostic
 * These define our component contract, independent of MUI or any framework
 */

export const BUTTON_VARIANTS = {
  primary: {
    label: "Primary",
    description: "Main action button",
  },
  secondary: {
    label: "Secondary",
    description: "Secondary action button",
  },
  tertiary: {
    label: "Tertiary",
    description: "Tertiary action button with neutral color",
  },
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

export const BUTTON_SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES;
