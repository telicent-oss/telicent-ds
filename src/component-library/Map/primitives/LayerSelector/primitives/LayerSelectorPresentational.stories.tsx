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
      <LayerSelectorPresentationalButton color="secondary" variant="outlined" {...props} />
      <style>
        {`
          body {
            overflow: auto !important;
          }
          #layer-selector-popover {
            pointer-events: none !important;
          }
        `}
      </style>
      <LayerSelectorPresentationalPopOver {...props} />
    </div>
  );
};

const presentationalMeta: Meta<PresentationalProps> = {
  title: "Component Library/Map/primitives/LayerSelectorPresentational",
  component: Presentational,
  tags: ["autodocs"], // ← enable docs page
  parameters: {
    docs: {
      description: {
        component: `
Renders a fake Presentational LayerSelector to help demonstrate how the default LayerSelector is assembled (used in FeatureMap)


<p>
  👉 Open 
  <a href="iframe.html?viewMode=docs&id=component-library-map-composites-featuremap--docs" target="_blank">
    FeatureMap story
  </a>
</p>

**NOTE** the PopOver story renders with position absolute, there is some hack styles to unlock the page when popover is visible.

• \`data\`: Array of { uri, image, label }  
• \`selectedIndex\` & \`anchorEl\`: control popover state  
• Handlers: \`onClickDropdown\`, \`onCloseDropdown\`, \`onListItemClick\`
`,
      },
    },
  },
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
    anchorEl: document.createElement("button"),
  },
};
