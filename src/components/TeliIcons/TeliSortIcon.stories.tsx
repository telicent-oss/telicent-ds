import { Meta, StoryObj } from "@storybook/react";
import { TeliSortAZIcon } from "./TeliSortIcons";

const meta: Meta<typeof TeliSortAZIcon> = {
  component: TeliSortAZIcon,
};

export default meta;

type TeliSortIconStory = StoryObj<typeof TeliSortAZIcon>;

export const SortAZ: TeliSortIconStory = {
  args: {},
};

export const SortZA: TeliSortIconStory = {
  args: {},
};
