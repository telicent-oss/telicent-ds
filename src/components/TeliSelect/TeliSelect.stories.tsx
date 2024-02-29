import type { Meta, StoryObj } from "@storybook/react";
import TeliSelect from "./TeliSelect";
import {
  BasicSelect,
  LabelsAndHelperText,
  MultiSelect,
  OtherStates,
} from "./stories";

const meta = {
  component: TeliSelect,
  parameters: {
    docs: {
      description: {
        component:
          "Select components are used for collecting user provided information from a list of options.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TeliSelect>;

export default meta;
export type TeliSelectStory = StoryObj<typeof meta>;

export { BasicSelect, LabelsAndHelperText, OtherStates, MultiSelect };
