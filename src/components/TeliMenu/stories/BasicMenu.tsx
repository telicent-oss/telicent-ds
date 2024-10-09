import { TeliBasicMenuStory } from "../TeliBasicMenu.stories";
import TeliBasicMenu from "../TeliBasicMenu";
import MENU_ITEMS from "./menu-items";

const BasicMenu: TeliBasicMenuStory = {
  args: { label: "Menu" },
  render: ({ label }) => (
    <TeliBasicMenu
      label={label}
      menuItems={MENU_ITEMS}
      yPlacement="bottom-start"
    />
  ),
  decorators: [
    (Story) => (
      <div style={{ height: "14em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: `
<TeliBasicMenu
  label="Menu"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `,
      },
    },
  },
};

export default BasicMenu;
