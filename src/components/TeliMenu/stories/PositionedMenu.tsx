import TeliBasicMenu from "../TeliBasicMenu";
import { TeliBasicMenuStory } from "../TeliBasicMenu.stories";
import MENU_ITEMS from "./menu-items";

const PositionedMenu: TeliBasicMenuStory = {
  args: { label: "menu", menuItems: MENU_ITEMS },
  render: ({ menuItems }) => (
    <div className="grid w-1/2 h-1/2 mx-auto my-44">
      <div className="grid place-content-center">
        <div className="flex gap-x-4">
          <TeliBasicMenu
            label="top-start"
            yPlacement="top-start"
            menuItems={menuItems}
          />
          <TeliBasicMenu label="top" yPlacement="top" menuItems={menuItems} />
          <TeliBasicMenu
            label="top-end"
            yPlacement="top-end"
            menuItems={menuItems}
          />
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-2 my-6">
        <div className="flex flex-col items-start gap-y-4">
          <TeliBasicMenu
            label="left-start"
            yPlacement="left-start"
            menuItems={menuItems}
          />
          <TeliBasicMenu label="left" yPlacement="left" menuItems={menuItems} />
          <TeliBasicMenu
            label="left-end"
            yPlacement="left-end"
            menuItems={menuItems}
          />
        </div>

        <div className="flex flex-col items-end gap-y-4">
          <TeliBasicMenu
            label="right-start"
            yPlacement="right-start"
            menuItems={menuItems}
          />
          <TeliBasicMenu
            label="right"
            yPlacement="right"
            menuItems={menuItems}
          />
          <TeliBasicMenu
            label="right-end"
            yPlacement="right-end"
            menuItems={menuItems}
          />
        </div>
      </div>
      <div className="grid place-content-center">
        <div className="flex gap-x-4">
          <TeliBasicMenu
            label="bottom-start"
            yPlacement="bottom-start"
            menuItems={menuItems}
          />
          <TeliBasicMenu
            label="bottom"
            yPlacement="bottom"
            menuItems={menuItems}
          />
          <TeliBasicMenu
            label="bottom-end"
            yPlacement="bottom-end"
            menuItems={menuItems}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The menu can be positioned by using the <code>xPlacement</code> and <code>yPlacement</code> props.",
      },
      source: {
        code: `
<TeliBasicMenu
  label="top-start"
  yPlacement="top-start"
  menuItems={menuItems}
/>
<TeliBasicMenu label="top" yPlacement="top" menuItems={menuItems} />
<TeliBasicMenu
  label="top-end"
  yPlacement="top-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="left-start"
  yPlacement="left-start"
  menuItems={menuItems}
/>
<TeliBasicMenu label="left" yPlacement="left" menuItems={menuItems} />
<TeliBasicMenu
  label="left-end"
  yPlacement="left-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right-start"
  yPlacement="right-start"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right"
  yPlacement="right"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right-end"
  yPlacement="right-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom-start"
  yPlacement="bottom-start"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom"
  yPlacement="bottom"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom-end"
  yPlacement="bottom-end"
  menuItems={menuItems}
/>
      `,
      },
    },
  },
};

export default PositionedMenu;
