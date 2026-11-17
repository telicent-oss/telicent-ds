import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const meta: Meta<typeof CardActionArea> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Card children",
  component: CardActionArea,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Assesses CardActionArea and CardMedia inside a Card. Judge: hover and focus overlay on the action area, media block radii and cropping, spacing against card padding, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CardActionArea>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={2}>
    <Card sx={{ width: 260 }}>
      <CardActionArea>
        <CardMedia component="div" sx={{ height: 120, bgcolor: "primary.main" }} />
        <CardContent>
          <Typography variant="h6">Action area with media</Typography>
          <Typography variant="body2">The whole card is one target.</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 260 }}>
      <CardMedia component="div" sx={{ height: 120, bgcolor: "secondary.main" }} />
      <CardContent>
        <Typography variant="h6">Media only</Typography>
        <Typography variant="body2">No action area, for comparison.</Typography>
      </CardContent>
    </Card>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
