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
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
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
};

// Mimics: import { Link } from 'react-dom-router';
const Link: React.FC<{ to: string; children: React.ReactNode }> = (props) => (
  <a {...props} />
);
Link.displayName = "Link"
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
      <Link to="/inputs-button--primary">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </Link>
      <a href="https://telicent.io/" target="_self">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </a>
    </>
  ),
};
