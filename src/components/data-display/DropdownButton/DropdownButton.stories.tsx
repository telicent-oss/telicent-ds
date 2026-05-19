import { Meta, StoryObj } from "@storybook/react";
import DropdownButton from "./DropdownButton";
import { Box } from '@mui/material';
import { TestCatalogIcon, TestGraphIcon } from "./assets/TestIcons";
import { faCircle, faMinus } from "@fortawesome/free-solid-svg-icons";

const FA_ICON_LAYOUT_OPTIONS = [
  {
    value: "option1",
    faIcon: faMinus,
    label: "option1-label",
  },
  {
    value: "option2",
    faIcon: faCircle,
    label: "option2-label",
    default: true,
  },
];

const CUSTOM_ICON_LAYOUT_OPTIONS = [
  {
    value: "option1",
    icon: TestGraphIcon,
    label: "option1-label",
  },
  {
    value: "option2",
    icon: TestCatalogIcon,
    label: "option2-label",
    default: true,
  },
];

const CUSTOM_ICON_LAYOUTS = CUSTOM_ICON_LAYOUT_OPTIONS.map((layout) => ({
  id: layout.value,
  icon: layout.icon,
  value: layout.label,
  default: Boolean(layout?.default),
  onClick: () => { },
  selected: false,
}));

const FA_LAYOUTS = FA_ICON_LAYOUT_OPTIONS.map((layout) => ({
  id: layout.value,
  faIcon: layout.faIcon,
  value: layout.label,
  default: Boolean(layout?.default),
  onClick: () => { },
  selected: false,
}));

const meta = {
  title: "Component Library/DropdownButton",
  component: DropdownButton,
  tags: ["dropdown", "button", "autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A simple dropdown menu that conforms to the extended theme.

The icon will change based upon the selected option,

> Note: You can control the colour of your custom Svg's by doing the following:

\`\`\`jsx
const CustomSvg = (...props) => {
  const { color } = props;
  const theme = useExtendedTheme();
  const dotColor = color === "primary" ? theme.palette.primary.main : "#D9D9D9";
  return (
    <SvgIcon {...props}>
      <path d="M5.76172 20.5L12.6265 10.2914" stroke="#575757" />
      <path d="M10.7872 4.3418C10.7872 5.08285 10.1865 5.68359 9.44543 5.68359C8.70438 5.68359 8.10364 5.08285 8.10364 4.3418C8.10364 3.60074 8.70438 3 9.44543 3C10.1865 3 10.7872 3.60074 10.7872 4.3418Z" fill={dotColor} />
    </SvgIcon>
  )
}
\`\`\`
`
      }
    },
    id: "dropdown-default",
    ariaLabel: "dropdown-menu",
    menuItems: CUSTOM_ICON_LAYOUTS
  },
  argTypes: {
    ariaLabel: {
      control: "text",
      description: ""
    },
    id: {
      control: "text",
      description: "",
    },
    menuItems: {
      control: "object",
      description: "",
    }
  },
  decorators: (Story) => (
    <Box sx={{
      width: "5vw",
      height: "50vh",
      margin: "auto"
    }}>{
        Story()
      }</Box>
  )
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownWithFontAwesome: Story = {
  args: {
    id: "FontAwesomeIcons",
    ariaLabel: "dropdown-menu",
    menuItems: FA_LAYOUTS
  }
}

export const DropdownWithCustomIcons: Story = {
  args: {
    id: "CustomIcons",
    ariaLabel: "dropdown-menu",
    menuItems: CUSTOM_ICON_LAYOUTS
  }
}
