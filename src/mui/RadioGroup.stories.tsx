import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

const meta: Meta<typeof RadioGroup> = {
  title: "MUI Coverage/Individual/RadioGroup",
  component: RadioGroup,
  tags: ["!autodocs", "!dev"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: spacing between options in both orientations, group label typography, selected control colour, error and disabled treatment, helper-text placement, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={6} alignItems="flex-start">
    <FormControl>
      <FormLabel id="classification-label">Classification</FormLabel>
      <RadioGroup aria-labelledby="classification-label" defaultValue="official" name="classification">
        <FormControlLabel value="official" control={<Radio />} label="Official" />
        <FormControlLabel value="secret" control={<Radio />} label="Secret" />
        <FormControlLabel value="top-secret" control={<Radio />} label="Top secret" disabled />
      </RadioGroup>
      <FormHelperText>Applies to every record in the set.</FormHelperText>
    </FormControl>

    <FormControl error>
      <FormLabel id="row-label">Row layout</FormLabel>
      <RadioGroup row aria-labelledby="row-label" defaultValue="" name="row-group">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
      </RadioGroup>
      <FormHelperText>Pick one to continue.</FormHelperText>
    </FormControl>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
