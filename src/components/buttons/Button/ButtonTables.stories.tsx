import React, { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { ButtonProps } from "./Button";
import { Text, H5 } from "../../data-display";
import { FlexBox } from "../../layout";
import useExtendedTheme from "../../../hooks/useExtendedTheme";
import {
  parseRgb,
  toHex,
  contrastRatio,
  formatContrastRatio,
} from "../../../utils/color-contrast/color-contrast";

// Reference tables mirroring the GeoGreen design spec: a per-variant colour +
// contrast table, and a state x variant matrix. Both read from the live theme,
// so switch the toolbar theme/mode (e.g. GeoGreen dark) to see it update.

type Variant = Extract<ButtonProps["variant"], "primary" | "secondary" | "tertiary">;

const VARIANTS: { variant: Variant; label: string }[] = [
  { variant: "primary", label: "Primary" },
  { variant: "secondary", label: "Secondary" },
  { variant: "tertiary", label: "Tertiary" },
];

type Spec = { txt: string; bg: string; bd: string; ratio: number };

const monoLine = { fontFamily: "monospace" } as const;

const SpecColumn: React.FC<{ variant: Variant; label: string; themeName: string }> = ({
  variant,
  label,
  themeName,
}) => {
  const theme = useExtendedTheme();
  const ref = useRef<HTMLButtonElement>(null);
  const [spec, setSpec] = useState<Spec | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const style = getComputedStyle(ref.current);
    // An outlined button is transparent; the contrast is measured against the
    // real surface it sits on, found by walking up to the first opaque
    // background (getComputedStyle returns rgb, which toHex parses).
    let node: HTMLElement | null = ref.current;
    let effectiveBg = "";
    while (node) {
      const bg = getComputedStyle(node).backgroundColor;
      if (parseRgb(bg)[3] !== 0) {
        effectiveBg = bg;
        break;
      }
      node = node.parentElement;
    }
    const hasBorder = style.borderTopStyle !== "none" && style.borderTopWidth !== "0px";
    setSpec({
      txt: toHex(style.color),
      bg: toHex(effectiveBg),
      bd: hasBorder ? toHex(style.borderTopColor) : "None",
      ratio: contrastRatio(style.color, effectiveBg),
    });
  }, [theme]);

  return (
    <FlexBox direction="column" gap={2} sx={{ minWidth: 180 }}>
      <H5>{label}</H5>
      <FlexBox direction="column">
        <Text sx={monoLine}>Txt {spec?.txt ?? "—"}</Text>
        <Text sx={monoLine}>BG {spec?.bg ?? "—"}</Text>
        <Text sx={monoLine}>BD {spec?.bd ?? "—"}</Text>
      </FlexBox>
      <FlexBox direction="row">
        <Button ref={ref} variant={variant}>
          Label
        </Button>
      </FlexBox>
      <FlexBox direction="column">
        <Text sx={monoLine}>{themeName}</Text>
        <Text sx={monoLine}>{spec ? `${formatContrastRatio(spec.ratio)}:1` : "—"}</Text>
        <Text sx={monoLine}>{spec && spec.ratio >= 4.5 ? "Pass AA" : "Fail AA"}</Text>
        <Text sx={monoLine}>{spec && spec.ratio >= 7 ? "Pass AAA" : "Fail AAA"}</Text>
      </FlexBox>
    </FlexBox>
  );
};

const STATES = ["Enabled", "Hovered", "Disabled", "Focused"] as const;
type State = (typeof STATES)[number];

// Hover is a real CSS pseudo the addon can force via a class. MUI's focus ring
// is applied through its own `Mui-focusVisible` class (JS-added on real focus),
// not the `:focus-visible` pseudo, so the focused row sets that class directly.
const stateClass: Record<State, string> = {
  Enabled: "",
  Hovered: "state-hover",
  Disabled: "",
  Focused: "Mui-focusVisible",
};

const StateCell: React.FC<{ variant: Variant; state: State }> = ({ variant, state }) => (
  <Button
    variant={variant}
    disabled={state === "Disabled"}
    className={stateClass[state]}
    startIcon={<i className="fa-solid fa-chevron-left" />}
    endIcon={<i className="fa-solid fa-chevron-right" />}
  >
    Label
  </Button>
);

const meta: Meta<typeof Button> = {
  title: "Buttons/Button Tables",
  component: Button,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof meta>;

const surfaceSx = {
  bgcolor: "background.default",
  color: "text.primary",
  p: 4,
  width: "fit-content",
} as const;

export const SpecTable: Story = {
  render: (_args, { globals }) => (
    <FlexBox direction="row" gap={6} sx={surfaceSx}>
      {VARIANTS.map(({ variant, label }) => (
        <SpecColumn key={variant} variant={variant} label={label} themeName={globals.theme} />
      ))}
    </FlexBox>
  ),
};

export const States: Story = {
  parameters: {
    pseudo: { hover: ".state-hover" },
  },
  render: (_args, { globals }) => (
    <FlexBox direction="column" gap={3} sx={surfaceSx}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content repeat(3, max-content)",
          columnGap: 24,
          rowGap: 20,
          alignItems: "center",
        }}
      >
        {STATES.map((state) => (
          <React.Fragment key={state}>
            <Text>{state}</Text>
            {VARIANTS.map(({ variant }) => (
              <StateCell key={variant} variant={variant} state={state} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <Text>{globals.theme}</Text>
    </FlexBox>
  ),
};
