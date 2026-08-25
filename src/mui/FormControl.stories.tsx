import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
} from "@mui/material";

const meta: Meta<typeof FormControl> = {
  title: "MUI Coverage/Individual/FormControl",
  component: FormControl,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: label and helper-text typography, vertical rhythm between grouped controls, error colour and its contrast, disabled dimming, focus ring on the control, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormControl>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={4} alignItems="flex-start">
    <FormControl component="fieldset">
      <FormLabel component="legend">Notifications</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
        <FormControlLabel control={<Checkbox />} label="SMS" />
        <FormControlLabel control={<Switch defaultChecked />} label="Digest" />
      </FormGroup>
      <FormHelperText>Choose how you are contacted.</FormHelperText>
    </FormControl>

    <FormControl component="fieldset" disabled>
      <FormLabel component="legend">Disabled</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
        <FormControlLabel control={<Checkbox />} label="SMS" />
      </FormGroup>
      <FormHelperText>Unavailable on this plan.</FormHelperText>
    </FormControl>

    <FormControl error sx={{ minWidth: 180 }}>
      <FormLabel>Region</FormLabel>
      <Select defaultValue="" displayEmpty>
        <MenuItem value="">Select a region</MenuItem>
        <MenuItem value="uk">United Kingdom</MenuItem>
        <MenuItem value="us">United States</MenuItem>
      </Select>
      <FormHelperText>A region is required.</FormHelperText>
    </FormControl>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
