import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Edit } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof ImageList> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/ImageList",
  component: ImageList,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: the ImageListItemBar scrim and its title/subtitle typography, action-icon contrast over the tile, gap against the DS spacing scale, dark mode. Tiles are flat colour blocks, not photos, so only the chrome is under review.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ImageList>;

const tiles: ReadonlyArray<{ title: string; author: string; colour: string }> = [
  { title: "Ingest", author: "Platform", colour: "#4a5568" },
  { title: "Catalogue", author: "Data", colour: "#2c5282" },
  { title: "Graph", author: "Analytics", colour: "#285e61" },
  { title: "Search", author: "Discovery", colour: "#553c9a" },
  { title: "Access", author: "Security", colour: "#742a2a" },
  { title: "Audit", author: "Compliance", colour: "#744210" },
];

export const Markup: React.FC = () => (
  <ImageList sx={{ width: 500, height: 340 }} cols={3} rowHeight={160}>
    {tiles.map((tile) => (
      <ImageListItem key={tile.title}>
        <div
          style={{ backgroundColor: tile.colour, width: "100%", height: "100%" }}
        />
        <ImageListItemBar
          title={tile.title}
          subtitle={<span>by {tile.author}</span>}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`edit ${tile.title}`}
            >
              <Edit />
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
