import type { Meta, StoryObj } from "@storybook/react-vite";
import { SvgIcon } from "./SvgIcon";

const meta = {
  title: "Data display/SvgIcon",
  component: SvgIcon,
} satisfies Meta<typeof SvgIcon>;

export default meta;

export type SvgIconStory = StoryObj<typeof meta>;

export const Basic: SvgIconStory = {
  parameters: {
    docs: {
      description: {
        story:
          "Thin re-export of MUI SvgIcon. Use as a base to compose a custom SVG icon while inheriting MUI's `fontSize`, `color`, and theme integration. For icons that already live in `@telicent-oss/mui-icons-material` or the DS's own Icons folder, prefer those over hand-rolling a new SvgIcon.",
      },
    },
  },
  render: () => (
    <SvgIcon fontSize="large">
      <path
        d="M12 2 L22 12 L12 22 L2 12 Z"
        fill="currentColor"
      />
    </SvgIcon>
  ),
};
