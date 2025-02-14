import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";

import Button from "./Button";
import DataSetIcon from "../../data-display/Icons/DataSetIcon";

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Buttons allow users to take actions, and make choices, with a single tap.",
      },
    },
  },
  tags: ["autodocs"],
  args: { children: "Button", onClick: fn() },
  decorators: (Story) => (
    <Box sx={{ button: { marginInline: 2 }, a: { marginInline: 2 } }}>
      {Story()}
    </Box>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <>
      <Button variant="primary" >{args.children}</Button>
      <Button variant="primary" disabled>{args.children}</Button>
    </>
  ),
};


export const Secondary: Story = {
  render: (args) => (
    <>
      <Button variant="secondary" >{args.children}</Button>
      <Button variant="secondary" disabled>{args.children}</Button>
    </>
  ),
};

export const DisableElevation: Story = {
  /**
   * TODO make secondary's colours for disableElevation:true match when disableElevation:false
   * WHEN know how to edit theme
   */
  render: (args) => (
    <>
      <Button variant="primary" disableElevation>{args.children}</Button>
      <Button variant="secondary" disableElevation>{args.children}</Button>
    </>
  ),
  };

  
export const Tertiary: Story = {
  render: (args) => (
    <>
      <Button variant="tertiary" >{args.children}</Button>
      <Button variant="tertiary" disabled>{args.children}</Button>
    </>
  ),
};

export const Link: Story = {
  render: (args) => (
    <>
      <Button variant="link" >{args.children}</Button>
      <Button variant="link" disabled>{args.children}</Button>
    </>
  ),
};
export const Text: Story = {
  render: (args) => (
    <>
      <Button variant="text" >{args.children}</Button>
      <Button variant="text" disabled>{args.children}</Button>
    </>
  ),
};

export const Sizing: Story = {
  render: (args) => (
    <>
      <Button size="large">{args.children}</Button>
      <Button size="medium">{args.children}</Button>
      <Button size="small">{args.children}</Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "For larger or smaller buttons, use the `size` prop.",
      },
    },
  },
};

export const WithIconsAndLabel: Story = {
  render: (args) => (
    <>
      <Button startIcon={<DataSetIcon />}>{args.children}</Button>
      <Button endIcon={<DataSetIcon />}>{args.children}</Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`,
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \`fullWidth\` to push the box out.`,
      },
    },
  },
};

// Mimics: import { Link } from 'react-dom-router';
const Anchor: React.FC<{ to: string; children: React.ReactNode }> = (props) => (
  <a {...props} />
);
Anchor.displayName = "Link"
/**
 * **Want links that look like a Design system button?**.
 * 
 * Make the Button presentation only by setting `component="div"`
 * Then wrap in a `<a>` tag or react-router-dom's `Link` component.
 *
 * To help assistive technologies,
 *  - avoid nesting interactive element e.g. `<button><a /></button>` or
 *    `<a><button /></a>`
 *  - set Button attributes like so:
 *    - `role` attribute to `undefined`
 *    - `component` (root element) to `div`
 *
 */
const UNDEFINED = undefined;
export const LinkButtons: Story = {
  render: (args) => (
    <>
      <Anchor to="/inputs-button--primary">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </Anchor>
      <a href="https://telicent.io/" target="_self">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </a>
    </>
  ),
};
