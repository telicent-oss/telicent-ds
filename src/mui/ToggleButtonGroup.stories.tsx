import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "MUI Coverage/Individual/ToggleButtonGroup",
  component: ToggleButtonGroup,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: selected fill and text contrast, border colour and shared edges between buttons, corner radii on the group ends, button density, size steps, disabled dimming, hover and focus states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

type Alignment = "left" | "center" | "right";

const alignments: Alignment[] = ["left", "center", "right"];

const AlignmentGroup: React.FC<{
  size: "small" | "medium" | "large";
  disabled?: boolean;
}> = ({ size, disabled }) => {
  const [value, setValue] = React.useState<Alignment>("center");
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    next: Alignment | null,
  ): void => {
    if (next !== null) setValue(next);
  };
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={handleChange}
      size={size}
      disabled={disabled}
      aria-label="text alignment"
    >
      {alignments.map((alignment) => (
        <ToggleButton key={alignment} value={alignment} aria-label={`${alignment} aligned`}>
          {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

const MultiSelectGroup: React.FC = () => {
  const [values, setValues] = React.useState<Alignment[]>(["left", "right"]);
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    next: Alignment[],
  ): void => {
    setValues(next);
  };
  return (
    <ToggleButtonGroup value={values} onChange={handleChange} aria-label="multi select">
      {alignments.map((alignment) => (
        <ToggleButton key={alignment} value={alignment}>
          {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export const Markup: React.FC = () => (
  <Stack spacing={3} alignItems="flex-start">
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 120 }}>Sizes</Typography>
      <AlignmentGroup size="small" />
      <AlignmentGroup size="medium" />
      <AlignmentGroup size="large" />
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 120 }}>Multi-select</Typography>
      <MultiSelectGroup />
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 120 }}>Vertical</Typography>
      <ToggleButtonGroup orientation="vertical" exclusive value="center">
        {alignments.map((alignment) => (
          <ToggleButton key={alignment} value={alignment}>
            {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 120 }}>Disabled</Typography>
      <AlignmentGroup size="medium" disabled />
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
