import type { Meta, StoryObj } from "@storybook/react";
import TeliStandardLayoutHeader from "./TeliStandardLayoutHeader";
import TeliUserProfile from "../TeliUserProfile/TeliUserProfile";
import { appsArray } from "../AppSwitch/appsArray";

const meta = {
  component: TeliStandardLayoutHeader,
} satisfies Meta<typeof TeliStandardLayoutHeader>;

export default meta;
type TeliStandardLayoutHeaderStory = StoryObj<typeof meta>;

export const Basic: TeliStandardLayoutHeaderStory = {
  args: {
    appName: "design-system",
    beta: true,
  },
};

export const AppSwitcherExample: TeliStandardLayoutHeaderStory = {
  args: {
    ...Basic.args,
    apps: appsArray,
  },
};

export const UserProfileExample: TeliStandardLayoutHeaderStory = {
  args: {
    ...Basic.args,
    apps: appsArray,
    userProfile: <TeliUserProfile />,
  },
};
