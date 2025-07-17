// src/components/LayerSelector/LayerSelector.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  LayerOption,
  LayerSelectorPresentationalButton,
  LayerSelectorPresentationalPopOver,
  PresentationalProps,
} from "./LayerSelectorPresentational";

const sampleData: LayerOption[] = [
  { uri: "u1", image: "https://dummyimage.com/25x20&text=1", label: "First" },
  { uri: "u2", image: "https://dummyimage.com/25x20&text=2", label: "Second" },
  { uri: "u3", image: "https://dummyimage.com/25x20&text=3", label: "Third" },
];

const Presentational: React.FC<PresentationalProps> = (props) => {
  return (
    <div>
      <LayerSelectorPresentationalButton {...props} />
      <LayerSelectorPresentationalPopOver {...props} />
    </div>
  );
};

const presentationalMeta: Meta<PresentationalProps> = {
  title: "Component Library/Map/primitives/LayerSelectorPresentational",
  component: Presentational,
  // tags: ['autodocs'],
  argTypes: {
    data: { control: "object" },
    selectedIndex: { control: { type: "number", min: 0, max: 2 } },
    anchorEl: { control: false },
    onClickDropdown: { action: "dropdownClicked" },
    onCloseDropdown: { action: "dropdownClosed" },
    onListItemClick: { action: "itemClicked" },
  },
};
export default presentationalMeta;

type PresentStory = StoryObj<PresentationalProps>;

export const Closed: PresentStory = {
  args: {
    data: sampleData,
    selectedIndex: 0,
    anchorEl: null,
  },
};

export const Open: PresentStory = {
  args: {
    data: sampleData,
    selectedIndex: 1,
    anchorEl: document.createElement("button"),
  },
};
