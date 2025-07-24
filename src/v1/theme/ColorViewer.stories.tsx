// Colors.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useTheme, Box, Typography } from '@mui/material';

const ColorsDemo = () => {
  const theme = useTheme();
  const { palette } = theme;
  const entries: { name: string; color: string }[] = [];

  Object.entries(palette).forEach(([group, value]) => {
    if (typeof value === 'string') {
      entries.push({ name: group, color: value });
    } else {
      Object.entries(value).forEach(([variant, variantValue]) => {
        if (typeof variantValue === 'string') {
          entries.push({ name: `${group}.${variant}`, color: variantValue });
        }
      });
    }
  });

  return (
    <Box display="flex" flexWrap="wrap">
      {entries.map(({ name, color }) => (
        <Box
          key={name}
          width={120}
          height={80}
          m={1}
          borderRadius={1}
          overflow="hidden"
          border={1}
          borderColor="divider"
        >
          <Box bgcolor={color} height="60%" />
          <Box p={0.5}>
            <Typography variant="caption" noWrap>
              {name}
            </Typography>
            <Typography variant="caption" noWrap>
              {color}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

type Story = StoryObj<typeof ColorsDemo>;

export default {
  title: 'Theme/Colors',
  component: ColorsDemo,
} as Meta<typeof ColorsDemo>;

export const AllColors: Story = {
  render: () => <ColorsDemo />,
};
