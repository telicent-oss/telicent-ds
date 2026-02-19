import type { Meta, StoryObj } from "@storybook/react";

import AppBar from "./AppBar";
import { AppSwitch, Divider, TitleAndContent, UserProfile } from "../../data-display";
import { Button } from "../../buttons";
import { appList } from "../../data-display/AppSwitch/AppSwitch.stories";
import { figmaDesign } from "../../../../../.storybook/figmaDesign";
import { Box } from "@mui/material";

const meta: Meta<typeof AppBar> = {
  title: "Surfaces/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The AppBar component provides a top navigation bar that supports branding, actions, and more.",
      },
    },

    ...figmaDesign(
      "https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4",
    ),
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof AppBar>;

export const Example: Story = {};

export const WithAppName: Story = {
  args: {
    appName: "Catalogue",
  },
};

const UserProfileExample = (
  <UserProfile fullName="VeryLongEmailAddress@LongCompanyName.com">
    <TitleAndContent title={"Username"} content={"Han Solo"} />
    <TitleAndContent title={"Email"} content={"han.solo@rebel-alliance.com"} />
    <TitleAndContent title={"Deployed Organisation"} content={"Rebel Alliance"} />
    <TitleAndContent title={"Version number"} content={"1.2.3"} />
    <Divider />
    <Box sx={{ pt: 1 }}>
      <Button
        onClick={() => console.log("Sign Out clicked")}
        color="primary"
        variant="contained"
        startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
        data-testid="signOut"
      >
        Sign Out
      </Button>
    </Box>
  </UserProfile>
);

export const WithUserProfileAndAppSwitch: Story = {
  args: {
    isElevated: true,
    ...WithAppName.args,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample,
  },
};

export const WithVersionNumber: Story = {
  args: {
    appName: "Design System",
    version: "1.2.0",
  },
};

export const WithSignOutButton: Story = {
  args: {
    ...WithAppName.args,
    endChild: (
      <Button color="primary" variant="contained" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
    ),
  },
};

export const WithNoBrand: Story = {
  args: {
    ...WithAppName.args,
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample,
  },
};
