import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FilledInput,
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  NativeSelect,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { LocationOn as LocationOnIcon } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Input> = {
  title: "MUI Coverage/Individual/Input",
  component: Input,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: field height and density across the three variants, border and underline colour, radii, label float position, adornment alignment, error and disabled states, focus ring, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Markup: React.FC = () => (
  <Stack spacing={4}>
    <Stack direction="row" spacing={4} alignItems="flex-start">
      <FormControl variant="standard">
        <InputLabel htmlFor="std-input">Standard</InputLabel>
        <Input id="std-input" defaultValue="Underlined" />
      </FormControl>

      <FormControl variant="filled">
        <InputLabel htmlFor="filled-input">Filled</InputLabel>
        <FilledInput id="filled-input" defaultValue="Filled" />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-input">Outlined</InputLabel>
        <OutlinedInput id="outlined-input" label="Outlined" defaultValue="Outlined" />
      </FormControl>
    </Stack>

    <Stack direction="row" spacing={4} alignItems="flex-start">
      <FormControl variant="outlined" error>
        <InputLabel htmlFor="error-input">Error</InputLabel>
        <OutlinedInput id="error-input" label="Error" defaultValue="Bad value" />
      </FormControl>

      <FormControl variant="outlined" disabled>
        <InputLabel htmlFor="disabled-input">Disabled</InputLabel>
        <OutlinedInput id="disabled-input" label="Disabled" defaultValue="Locked" />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="adornment-input">Adornments</InputLabel>
        <OutlinedInput
          id="adornment-input"
          label="Adornments"
          defaultValue="London"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
          endAdornment={<InputAdornment position="end">km</InputAdornment>}
        />
      </FormControl>
    </Stack>

    <Stack direction="row" spacing={4} alignItems="center">
      <InputBase
        defaultValue="Unstyled InputBase"
        sx={{ border: "1px solid", borderColor: "divider", px: 1, py: 0.5, borderRadius: 1 }}
      />

      <FormControl>
        <InputLabel variant="standard" htmlFor="native-select">
          Region
        </InputLabel>
        <NativeSelect defaultValue="uk" inputProps={{ name: "region", id: "native-select" }}>
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
        </NativeSelect>
      </FormControl>
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
