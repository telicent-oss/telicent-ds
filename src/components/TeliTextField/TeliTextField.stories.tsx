import type { Meta, StoryObj } from "@storybook/react";
import TeliTextField from "./TeliTextField";
import {
  AdornmentExamples,
  Controlled,
  FormProps,
  MultilineExamples,
  ValidationExamples,
} from "./stories";

const meta = {
  component: TeliTextField,
} satisfies Meta<typeof TeliTextField>;

export default meta;
export type TeliTextFieldStory = StoryObj<typeof meta>;

export const Basic: TeliTextFieldStory = {
  args: {
    id: "example-id",
    label: "Example",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: `<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.`,
      },
    },
  },
};

export {
  FormProps,
  ValidationExamples,
  MultilineExamples,
  AdornmentExamples,
  Controlled,
};
