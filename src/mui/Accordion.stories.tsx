import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandLess as ExpandLessIcon } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Accordion> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Accordion",
  component: Accordion,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: summary row density and divider weight, panel background against the page, radii on the first and last panel, expand-icon size and colour, action-row button alignment, dark mode. The expand icon is ExpandLess because that is the only expand-ish icon shipped; iconography is not what is being judged here.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Markup: React.FC = () => (
  <Stack sx={{ width: 420 }}>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandLessIcon />}>
        <Typography>First panel</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          Details content, rendered expanded so no interaction is needed.
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">
          Save
        </Button>
      </AccordionActions>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandLessIcon />}>
        <Typography>Second panel</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          A second panel shows the divider between stacked accordions.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled>
      <AccordionSummary expandIcon={<ExpandLessIcon />}>
        <Typography>Disabled panel</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">Never shown.</Typography>
      </AccordionDetails>
    </Accordion>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
