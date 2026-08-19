import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Edit, LocationOn } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof ListItemAvatar> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/List children",
  component: ListItemAvatar,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Assesses ListItemAvatar, ListSubheader and ListItemSecondaryAction inside a List. Judge: subheader weight and background against the list surface, avatar size and alignment, secondary action spacing, row density, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ListItemAvatar>;

export const Markup: React.FC = () => (
  <List sx={{ width: 360, bgcolor: "background.paper" }}>
    <ListSubheader>Sites</ListSubheader>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <LocationOn />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Bristol depot" secondary="Updated 2 hours ago" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Edit Bristol depot">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListSubheader>People</ListSubheader>
    <ListItem>
      <ListItemAvatar>
        <Avatar>AC</Avatar>
      </ListItemAvatar>
      <ListItemText primary="A Coolman" secondary="Analyst" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Edit A Coolman">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
