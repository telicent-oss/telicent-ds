import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";

import { Markup as AccordionMarkup } from "./Accordion.stories";
import { Markup as AlertChildrenMarkup } from "./AlertChildren.stories";
import { Markup as AvatarMarkup } from "./Avatar.stories";
import { Markup as BackdropMarkup } from "./Backdrop.stories";
import { Markup as BadgeMarkup } from "./Badge.stories";
import { Markup as BreadcrumbsMarkup } from "./Breadcrumbs.stories";
import { Markup as ButtonBaseMarkup } from "./ButtonBase.stories";
import { Markup as ButtonGroupMarkup } from "./ButtonGroup.stories";
import { Markup as CardChildrenMarkup } from "./CardChildren.stories";
import { Markup as CircularProgressMarkup } from "./CircularProgress.stories";
import { Markup as CollapseMarkup } from "./Collapse.stories";
import { Markup as DialogChildrenMarkup } from "./DialogChildren.stories";
import { Markup as FabMarkup } from "./Fab.stories";
import { Markup as FadeMarkup } from "./Fade.stories";
import { Markup as FormControlMarkup } from "./FormControl.stories";
import { Markup as GridMarkup } from "./Grid.stories";
import { Markup as GrowMarkup } from "./Grow.stories";
import { Markup as ImageListMarkup } from "./ImageList.stories";
import { Markup as InputMarkup } from "./Input.stories";
import { Markup as ListChildrenMarkup } from "./ListChildren.stories";
import { Markup as MenuMarkup } from "./Menu.stories";
import { Markup as PaginationMarkup } from "./Pagination.stories";
import { Markup as PopoverMarkup } from "./Popover.stories";
import { Markup as PopperMarkup } from "./Popper.stories";
import { Markup as SlideMarkup } from "./Slide.stories";
import { Markup as SliderMarkup } from "./Slider.stories";
import { Markup as SnackbarMarkup } from "./Snackbar.stories";
import { Markup as SpeedDialMarkup } from "./SpeedDial.stories";
import { Markup as StepperMarkup } from "./Stepper.stories";
import { Markup as TableMarkup } from "./Table.stories";
import { Markup as TabsMarkup } from "./Tabs.stories";
import { Markup as ToggleButtonGroupMarkup } from "./ToggleButtonGroup.stories";
import { Markup as TooltipMarkup } from "./Tooltip.stories";
import { Markup as ZoomMarkup } from "./Zoom.stories";

type Entry = { name: string; Markup: React.FC };
type Group = { title: string; entries: Entry[] };

const groups: Group[] = [
  {
    title: "Inputs & forms",
    entries: [
      { name: "ButtonBase", Markup: ButtonBaseMarkup },
      { name: "ButtonGroup", Markup: ButtonGroupMarkup },
      { name: "Fab", Markup: FabMarkup },
      { name: "FormControl", Markup: FormControlMarkup },
      { name: "Input", Markup: InputMarkup },
      { name: "Slider", Markup: SliderMarkup },
      { name: "ToggleButtonGroup", Markup: ToggleButtonGroupMarkup },
    ],
  },
  {
    title: "Data display",
    entries: [
      { name: "Avatar", Markup: AvatarMarkup },
      { name: "Badge", Markup: BadgeMarkup },
      { name: "ImageList", Markup: ImageListMarkup },
      { name: "List children", Markup: ListChildrenMarkup },
      { name: "Table", Markup: TableMarkup },
      { name: "Tooltip", Markup: TooltipMarkup },
    ],
  },
  {
    title: "Surfaces & overlays",
    entries: [
      { name: "Accordion", Markup: AccordionMarkup },
      { name: "Card children", Markup: CardChildrenMarkup },
      { name: "Dialog children", Markup: DialogChildrenMarkup },
      { name: "Menu", Markup: MenuMarkup },
      { name: "Popover", Markup: PopoverMarkup },
      { name: "Popper", Markup: PopperMarkup },
      { name: "SpeedDial", Markup: SpeedDialMarkup },
    ],
  },
  {
    title: "Navigation",
    entries: [
      { name: "Breadcrumbs", Markup: BreadcrumbsMarkup },
      { name: "Pagination", Markup: PaginationMarkup },
      { name: "Stepper", Markup: StepperMarkup },
      { name: "Tabs", Markup: TabsMarkup },
    ],
  },
  {
    title: "Feedback",
    entries: [
      { name: "Alert children", Markup: AlertChildrenMarkup },
      { name: "Backdrop", Markup: BackdropMarkup },
      { name: "CircularProgress", Markup: CircularProgressMarkup },
      { name: "Snackbar", Markup: SnackbarMarkup },
    ],
  },
  {
    title: "Motion",
    entries: [
      { name: "Collapse", Markup: CollapseMarkup },
      { name: "Fade", Markup: FadeMarkup },
      { name: "Grow", Markup: GrowMarkup },
      { name: "Slide", Markup: SlideMarkup },
      { name: "Zoom", Markup: ZoomMarkup },
    ],
  },
  {
    title: "Layout",
    entries: [{ name: "Grid", Markup: GridMarkup }],
  },
];

const componentCount = groups.reduce((n, group) => n + group.entries.length, 0);

const anchorId = (name: string): string =>
  `kitchen-sink-${name.toLowerCase().replace(/\s+/g, "-")}`;

const Section: React.FC<Entry> = ({ name, Markup }) => (
  <Box component="section" id={anchorId(name)} sx={{ py: 3 }}>
    <Typography variant="h6" component="h3" gutterBottom>
      {name}
    </Typography>
    <Markup />
    <Divider sx={{ mt: 3 }} />
  </Box>
);

const KitchenSink: React.FC = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      MUI kitchen sink — {componentCount} components
    </Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>
      Every unexported MUI component under the Telicent theme, on one page. Use
      the Mode and Theme toolbars; scroll, or jump via the links below.
    </Typography>
    <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ gap: 1.5, mb: 2 }}>
      {groups
        .flatMap((group) => group.entries)
        .map(({ name }) => (
          <Link key={name} href={`#${anchorId(name)}`} variant="body2">
            {name}
          </Link>
        ))}
    </Stack>
    {groups.map((group) => (
      <Box key={group.title} component="section">
        <Typography variant="h5" component="h2" sx={{ mt: 5, mb: 1 }}>
          {group.title} ({group.entries.length})
        </Typography>
        <Divider sx={{ mb: 1, borderBottomWidth: 2 }} />
        {group.entries.map((entry) => (
          <Section key={entry.name} {...entry} />
        ))}
      </Box>
    ))}
  </Box>
);

const meta: Meta<typeof KitchenSink> = {
  title: "MUI Coverage/Proposed included",
  component: KitchenSink,
  tags: ["!autodocs"],
  parameters: {
    a11y: {
      options: {
        rules: {
          // Each Markup renders its own headings under this page's h1/h2/h3
          // scaffold; heading-order is a per-page concern, not a component one.
          "heading-order": { enabled: false },
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof KitchenSink>;

export const All: Story = { render: () => <KitchenSink /> };
