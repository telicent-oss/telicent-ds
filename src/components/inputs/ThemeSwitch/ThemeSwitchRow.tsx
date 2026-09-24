import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import ThemeSwitch, { ThemeSwitchProps } from "./ThemeSwitch";

export type ThemeSwitchRowProps = Omit<ThemeSwitchProps, "labelId"> & {
  hint?: string;
};

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const TextBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  minWidth: 0,
  flex: "1 1 auto",
});

const LabelText = styled("span")(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const HintText = styled("span")(({ theme }) => ({
  fontSize: 13,
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

export const ThemeSwitchRow = forwardRef<HTMLButtonElement, ThemeSwitchRowProps>(
  ({ checked, onChange, label = "Theme", hint, disabled, className, ...rest }, ref) => (
    // Deliberately don't bind `aria-labelledby` from the visible label. The
    // switch computes its own state-aware accessible name ("Theme: currently
    // light") so screen readers hear the mode, while sighted users see the
    // terser row label.
    <Row className={className}>
      <TextBlock>
        <LabelText aria-hidden="true">{label}</LabelText>
        {hint && <HintText aria-hidden="true">{hint}</HintText>}
      </TextBlock>
      <ThemeSwitch ref={ref} checked={checked} onChange={onChange} label={label} disabled={disabled} {...rest} />
    </Row>
  ),
);

ThemeSwitchRow.displayName = "ThemeSwitchRow";

export default ThemeSwitchRow;
