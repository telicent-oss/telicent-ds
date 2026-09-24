import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControlLabel } from "./FormControlLabel";
import Checkbox from "../Checkbox/Checkbox";

const meta = {
  title: "Inputs/FormControlLabel",
  component: FormControlLabel,
} satisfies Meta<typeof FormControlLabel>;

export default meta;

export type FormControlLabelStory = StoryObj<typeof meta>;

export const Basic: FormControlLabelStory = {
  args: {
    control: <Checkbox />,
    label: "Accept terms",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pairs a control (Switch, Checkbox, Radio) with a clickable label. Thin re-export of MUI FormControlLabel.",
      },
    },
  },
  render: (args) => <FormControlLabel {...args} />,
};
