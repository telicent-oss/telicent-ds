import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

export type ThemeSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  labelId?: string;
  disabled?: boolean;
  className?: string;
};

const Track = styled("button", {
  shouldForwardProp: (prop) => prop !== "isChecked",
})<{ isChecked: boolean; disabled?: boolean }>(({ theme, isChecked, disabled }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: 52,
  height: 28,
  padding: 0,
  borderRadius: 14,
  border: `1px solid ${theme.palette.divider}`,
  background: isChecked ? theme.palette.grey[800] : theme.palette.grey[300],
  cursor: disabled ? "default" : "pointer",
  opacity: disabled ? 0.5 : 1,
  transition: "background 150ms ease-out, border-color 150ms ease-out",
  outline: "none",
  "&:hover": disabled
    ? {}
    : {
        borderColor: theme.palette.primary.main,
      },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));

const Knob = styled("span", {
  shouldForwardProp: (prop) => prop !== "isChecked",
})<{ isChecked: boolean }>(({ theme, isChecked }) => ({
  position: "absolute",
  top: 2,
  left: 2,
  width: 22,
  height: 22,
  borderRadius: 11,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: isChecked ? theme.palette.primary.main : theme.palette.background.paper,
  transform: isChecked ? "translateX(24px)" : "translateX(0)",
  transition: "transform 150ms ease-out, background 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));

const Glyph = styled(FontAwesomeIcon, {
  shouldForwardProp: (prop) => prop !== "isDisabled",
})<{ isDisabled?: boolean }>(({ theme, isDisabled }) => ({
  fontSize: 11,
  color: isDisabled ? theme.palette.text.disabled : "#0A0A0A",
}));

export const ThemeSwitch = forwardRef<HTMLButtonElement, ThemeSwitchProps>(
  ({ checked, onChange, label = "Theme", labelId, disabled, className }, ref) => {
    // When no external label is bound, provide a state-aware accessible name so
    // screen readers announce the mode itself ("Theme: currently light") rather
    // than the raw ARIA-checked value ("Theme, switch, off"). Visible callers
    // still see the terse label.
    const accessibleName = `${label}: currently ${checked ? "dark" : "light"}`;
    return (
      <Track
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        aria-label={labelId ? undefined : accessibleName}
        disabled={disabled}
        isChecked={checked}
        className={className}
        onClick={() => {
          if (!disabled) onChange(!checked);
        }}
      >
        <Knob isChecked={checked}>
          <Glyph icon={checked ? faMoon : faSun} isDisabled={disabled} />
        </Knob>
      </Track>
    );
  },
);

ThemeSwitch.displayName = "ThemeSwitch";

export default ThemeSwitch;
