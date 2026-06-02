// src/components/MapCanvas/MapCanvas.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonZoomIn } from './ButtonZoomIn';
import { ButtonZoomOut } from './ButtonZoomOut';
import { MapToggleButtonPresentational } from './MapToggleButtonPresentational';

const meta: Meta = {
  title: 'Component Library/Map/primitives/controls',
};
export default meta;

type ZoomInStory = StoryObj<React.ComponentProps<typeof ButtonZoomIn>>;
export const ZoomIn: ZoomInStory = {
  render: (args) => <ButtonZoomIn {...args} />,
  args: {
    onClick: () => alert('Zooming In'),
  },
};

type ZoomOutStory = StoryObj<React.ComponentProps<typeof ButtonZoomOut>>;
export const ZoomOut: ZoomOutStory = {
  render: (args) => <ButtonZoomOut {...args} />,
  args: {
    onClick: () => alert('Zooming Out'),
  },
};

type ToggleStory = StoryObj<{}>;
export const ToggleMap: ToggleStory = {
  render: () => <MapToggleButtonPresentational />,
};
