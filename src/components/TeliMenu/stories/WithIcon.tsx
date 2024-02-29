import { TeliBasicMenuStory } from "../TeliBasicMenu.stories";
import TeliBasicMenu from "../TeliBasicMenu";
import MENU_ITEMS from "./menu-items";

const WithIcon: TeliBasicMenuStory = {
  args: { label: "Models" },
  render: ({ label }) => (
    <div className="flex gap-x-3">
      <TeliBasicMenu
        label={label}
        yPlacement="bottom-start"
        menuItems={[
          {
            id: "menu-item-1",
            label: "Archive",
            startIcon: <i className="ri-archive-fill" />,
          },
          {
            id: "menu-item-2",
            label: "Inbox",
            startIcon: <i className="ri-inbox-2-fill" />,
          },
        ]}
      />
      <TeliBasicMenu
        startIcon={<i className="ri-ghost-2-fill" />}
        label="Label with icon"
        menuItems={MENU_ITEMS}
        yPlacement="bottom-start"
      />
    </div>
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
      description: {
        story: "Icons can be added to the menu button and items",
      },
      source: {
        code: `
<TeliBasicMenu
  label={label}
  yPlacement="bottom-start"
  menuItems={[
    {
      id: "menu-item-1",
      label: "Archive",
      startIcon: <i className="ri-archive-fill" />,
    },
    {
      id: "menu-item-2",
      label: "Inbox",
      startIcon: <i className="ri-inbox-2-fill" />,
    },
  ]}
/>
<TeliBasicMenu
  startIcon={<i className="ri-ghost-2-fill" />}
  label="Label with icon"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `,
      },
    },
  },
};

export default WithIcon;
