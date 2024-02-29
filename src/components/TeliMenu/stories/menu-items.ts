import { action } from "@storybook/addon-actions";

const MENU_ITEMS = [
  {
    id: "menu-item-1",
    onClick: action("Menu Item 1 has been selected"),
    label:
      "Donec velit libero, condimentum in sem et, faucibus finibus enim. Suspendisse potent",
  },
  {
    id: "menu-item-2",
    onClick: action("Menu Item 2 has been selected"),
    label: "Menu Item 2",
  },
  { id: "menu-item-3", label: "Menu Item 3" },
];

export default MENU_ITEMS;
