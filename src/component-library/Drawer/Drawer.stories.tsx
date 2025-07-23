import React, { forwardRef, ReactNode } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Box, Button } from "@mui/material";
import { Drawer, DrawerProps } from "./Drawer";
import { DrawerPresentational } from "./primitives/DrawerPresentational";
import { useDrawer, DrawerController } from "./primitives/useDrawer";
import PrimaryButton from "../../v1/components/inputs/Button/PrimaryButton";

const meta: Meta<typeof Drawer> = {
  title: "Component Library/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Persistent drawer with toggle control. Communicates open state via callback.

Use \`useDrawer\` hook and \`DrawerPresentational\` for imperative control.`,
      },
    },
  },
  argTypes: {
    drawerWidth: {
      control: { type: "number" },
      description: "Width in pixels",
    },
    onVisibilityChange: { action: "visibilityChanged" },
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: <Box p={2}>Drawer content</Box>,
  },
};

export const CustomWidth: Story = {
  args: {
    drawerWidth: 400,
    children: <Box p={2}>Narrow drawer</Box>,
  },
};

export const PresentationalAndHook: Story = {
  name: "Presentational + useDrawer",
  parameters: {
    docs: {
      description: {
        story: `Demonstrates imperative API via \`useDrawer\` hook and \`DrawerPresentational\`.`,
      },
    },
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const { open, toggleDrawer, closeDrawer, drawerProps } = useDrawer(
      ctrlRef,
      false
    );

    return (
      <>
        <PrimaryButton onClick={toggleDrawer}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerProps}>
          <Box p={2}>Controlled content</Box>
        </DrawerPresentational>
      </>
    );
  },
};

export const ImperativeApi: Story = {
  name: "Presentational + useDrawer: Imperative api only",
  parameters: {
    docs: {
      description: {
        story: `Demonstrates imperative API via \`useDrawer\` without a onToggle set (and thus no toggle button).`,
      },
    },
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const drawer = useDrawer(ctrlRef, false);
    const { onToggle, ...drawerPropsNoToggle } = drawer.drawerProps;
    return (
      <>
        <PrimaryButton onClick={onToggle}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerPropsNoToggle}>
          <Box p={2}>
            Chevron hidden: onClick unset, so clicking does nothing
          </Box>
        </DrawerPresentational>
      </>
    );
  },
};
