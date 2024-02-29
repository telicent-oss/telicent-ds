import type { Meta, StoryObj } from "@storybook/react";

import {
  BasicChips,
  ChipsExample,
  ClickableChips,
  ClickableLinkChips,
  ColorChips,
  DeleteableChips,
  IconChips,
  SizeChips,
} from "./stories";
import TeliChip from "./TeliChip";

const meta = {
  component: TeliChip,
  parameters: {
    docs: {
      description: {
        component: `
Chips are compact elements that represent an input, attribute, or action. They 
allow users to enter information, make selections, filter content, or trigger 
actions. While included here as a standalone component, the most common use will 
be in some form of input, so some of the behavior demonstrated here is not shown 
in context.
        `,
      },
    },
  },
} satisfies Meta<typeof TeliChip>;

export default meta;
export type TeliChipStory = StoryObj<typeof meta>;

export {
  BasicChips,
  ClickableChips,
  DeleteableChips,
  ClickableLinkChips,
  IconChips,
  ColorChips,
  SizeChips,
  ChipsExample,
};
