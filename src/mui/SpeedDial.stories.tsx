import React from "react";
import useCycle from "./useCycle";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Check, Clear, Edit } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof SpeedDial> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/SpeedDial",
  component: SpeedDial,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: the FAB fill and icon contrast, action button surfaces, tooltip labels, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SpeedDial>;

export const Markup: React.FC = () => {
  const open = useCycle(2400);

  return (
  <Box sx={{ position: "relative", height: 320 }}>
    <SpeedDial
      ariaLabel="Example actions"
      open={open}
      icon={<SpeedDialIcon />}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
    >
      <SpeedDialAction icon={<Edit />} tooltipTitle="Edit" tooltipOpen />
      <SpeedDialAction icon={<Check />} tooltipTitle="Approve" tooltipOpen />
      <SpeedDialAction icon={<Clear />} tooltipTitle="Reject" tooltipOpen />
    </SpeedDial>
  </Box>
  );
};

export const WithTelicentTheme: Story = { render: () => <Markup /> };
