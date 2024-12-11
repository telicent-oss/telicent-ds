// FlexGrid.stories.tsx
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Text } from '../data-display/Text/Text';
import { Button } from '@mui/material'; // Assuming Button is also exported from MUI
import { FlexGrid, FlexGridItem } from './FlexGrid';

export default {
  title: 'Layout/FlexGrid',
  component: FlexGrid,
  subcomponents: { FlexGridItem },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => <FlexGrid {...args} />;

export const BasicColumns = Template.bind({});
BasicColumns.args = {
  children: (
    <>
      <FlexGridItem xs={6} style={{ backgroundColor: '#f77', padding: 20 }}>
        <Text >Left Column</Text>
        <Button variant="contained" color="primary">Action 1</Button>
        <Text>More text underneath the button to show stacking.</Text>
      </FlexGridItem>
      <FlexGridItem xs={6} style={{ backgroundColor: '#77f', padding: 20 }}>
        <Text >Right Column</Text>
        <Button variant="outlined" color="secondary">Action 2</Button>
        <Text>Additional description for context.</Text>
      </FlexGridItem>
    </>
  ),
};

export const Rows = Template.bind({});
Rows.args = {
  direction: "column",
  children: (
    <>
      <FlexGridItem xs={12} style={{ backgroundColor: '#7f7', padding: 20 }}>
        <Text >Top Row</Text>
        <Text>This row can include more detailed elements like forms or charts.</Text>
      </FlexGridItem>
      <FlexGridItem xs={12} style={{ backgroundColor: '#f77', padding: 20 }}>
        <Text >Bottom Row</Text>
        <Text>Even more content here, such as a slider or a progress bar.</Text>
      </FlexGridItem>
    </>
  ),
};

export const MainDetailLayout = Template.bind({});
MainDetailLayout.args = {
  children: (
    <>
      <FlexGridItem xs={8} style={{ backgroundColor: '#77f', padding: 20 }}>
        <Text >Main Content</Text>
        <Text>Description of the main content area, potentially including large data visualizations.</Text>
      </FlexGridItem>
      <FlexGridItem xs={4} style={{ backgroundColor: '#7f7', padding: 20 }}>
        <Text >Sidebar</Text>
        <Text>Links or additional controls related to the main content could go here.</Text>
      </FlexGridItem>
    </>
  ),
};