import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormHelperText } from "./FormHelperText";

const meta = {
  title: "Inputs/FormHelperText",
  component: FormHelperText,
} satisfies Meta<typeof FormHelperText>;

export default meta;

export type FormHelperTextStory = StoryObj<typeof meta>;

export const Basic: FormHelperTextStory = {
  args: {
    children: "Helper text — describes the field or shows validation errors.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Descriptive or validation text that pairs with a form field. Reads error/disabled state from a parent FormControl. Thin re-export of MUI FormHelperText.",
      },
    },
  },
  render: (args) => <FormHelperText {...args} />,
};
