import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import CardContent from "./CardContent";
import Text from "../../data-display/Text/Text";
import Button from "../../inputs/Button/Button";
import CardActions from "./CardActions";

const meta: Meta<typeof Card> = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const OutlinedCard: Story = {
  args: {
    variant: "outlined",
    children: (
      <CardContent>
        <Text variant="h1">Capybara</Text>
        <Text paragraph>
          Capybara are the biggest rodents in the world. Our capy family can be seen strutting their
          stuff in our South American paddock!
        </Text>
        <CardActions>
          <Button variant="secondary">Share</Button>
        </CardActions>
      </CardContent>
    ),
  },
};
