import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControl } from "./FormControl";
import { FormHelperText } from "../FormHelperText/FormHelperText";

const meta = {
  title: "Inputs/FormControl",
  component: FormControl,
} satisfies Meta<typeof FormControl>;

export default meta;

export type FormControlStory = StoryObj<typeof meta>;

export const Basic: FormControlStory = {
  parameters: {
    docs: {
      description: {
        story:
          "Groups related form controls so state (error, disabled, required) propagates to child labels and helper text. Thin re-export of MUI FormControl.",
      },
    },
  },
  render: () => (
    <FormControl error>
      <FormHelperText>Helper text inside a FormControl with error state.</FormHelperText>
    </FormControl>
  ),
};
