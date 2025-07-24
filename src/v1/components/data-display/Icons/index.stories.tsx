// src/components/Icons/Icons.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import * as Icons from './index';

/**
 * Grid gallery that renders every named export from this folder's `index.ts`.
 * Each export is assumed to be a React component (custom SVG or MUI icon).
 * Shown with its export name for quick visual QA & discoverability.
 */
const IconsGallery = () => {
  // Cast entries so we can safely render. (We trust our index barrel exports are components.)
  const iconEntries = Object.entries(Icons) as Array<[string, React.ElementType]>;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 2,
        p: 2,
        textAlign: 'center',
      }}
    >
      {iconEntries.map(([name, Icon]) => (
        <Box
          key={name}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Most icons accept size props; omit to keep generic */}
          <Icon />
          <Typography variant="caption" sx={{ mt: 1 }}>
            {name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const meta: Meta<typeof IconsGallery> = {
  title: 'Data Display/Icons',
  component: IconsGallery,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Gallery of all icon exports from this package. Useful for QA & discovery.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconsGallery>;

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => <IconsGallery />,
};