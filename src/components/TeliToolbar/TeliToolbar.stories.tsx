import type { Meta, StoryObj } from "@storybook/react";
import {
  GroupedActions,
  HorizontalAndVerticalToolbars,
  PositionedToolbars,
} from "./stories";
import TeliToolbar from "./TeliToolbar";

const meta = {
  component: TeliToolbar,
  parameters: {
    docs: {
      description: {
        component: `The toolbar component should consist of commands or actions 
        that are frequently used by novice and expert users. The toolbar components comes 
        with default controls for visualisations which can be disabled by using 
        <code>defaultControls</code> prop`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          height: "8em",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TeliToolbar>;

export default meta;
export type ToolbarStory = StoryObj<typeof meta>;

export { HorizontalAndVerticalToolbars, PositionedToolbars, GroupedActions };
