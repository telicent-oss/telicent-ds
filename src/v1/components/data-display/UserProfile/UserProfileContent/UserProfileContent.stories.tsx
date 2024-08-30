import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserProfileContent from "./UserProfileContent";
import FlexBox from "../../../layout/FlexBox";
import { Text } from "../../Text/Text";
import Button from "../../../inputs/Button/Button";

const meta = {
  component: UserProfileContent,
  tags: ["autodocs"],
  decorators: (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
  argTypes: {
    children: {
      control: false,
      description: "Content inside the component",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof UserProfileContent>;

export default meta;
export type Story = StoryObj<typeof meta>;

const items = [
  { heading: "Username", value: "Admin" },
  { heading: "Email", value: "admin@telicent.io" },
  { heading: "Deployed Organisation", value: "Telicent" },
  { heading: "UserId", value: "3004958Ed-23-sdf-404-21334" },
  { heading: "Attributes", value: "GBR" },
  { heading: "Clearance", value: "SEN" },
];

export const Basic: Story = {
  args: {
    children: items.slice(0, 3).map((item) => (
      <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>
    )),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        {items.map((item) => (
          <FlexBox key={item.heading}>
            <Text>
              <b>{item.heading}</b>
            </Text>
            <Text>{item.value}</Text>
          </FlexBox>
        ))}
        <FlexBox direction="row" columnGap={2} justifyContent="end">
          <Button variant="secondary" disableElevation>
            Action
          </Button>
          <Button disableElevation>Action</Button>
        </FlexBox>
      </>
    ),
  },
};
