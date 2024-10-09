import TeliButton from "../../TeliButton/TeliButton";
import { TeliBasicMenuStory } from "../TeliBasicMenu.stories";
import TeliBasicMenu from "../TeliBasicMenu";
import MENU_ITEMS from "./menu-items";

const CustomMenuItems: TeliBasicMenuStory = {
  args: { label: "Models" },
  render: ({ label }) => (
    <div className="flex gap-x-3">
      <TeliBasicMenu label={label} yPlacement="bottom-start" width={200}>
        <div className="flex justify-between gap-x-2 mb-4">
          <h2>Saved Models</h2>
          <TeliButton variant="primary" size="small">
            New
          </TeliButton>
        </div>
        <ul className="flex flex-col gap-y-2">
          <li
            role="button"
            onClick={() => alert("Clicked menu item")}
            className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
          >
            <p>Model 1</p>
          </li>
          <li
            role="button"
            onClick={() => alert("Clicked menu item")}
            className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
          >
            <p>Model 2</p>
          </li>
        </ul>
      </TeliBasicMenu>
      <TeliBasicMenu
        label={label}
        menuItems={MENU_ITEMS}
        yPlacement="bottom-start"
      >
        <h2>Menu items</h2>
      </TeliBasicMenu>
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
        story:
          "The <code>children</code> can be used to create custom menu items",
      },
      source: {
        code: `
<TeliBasicMenu label="Models" yPlacement="bottom-start" width={200}>
  <div className="flex justify-between gap-x-2 mb-4">
    <h2>Saved Models</h2>
    <TeliButton variant="primary" size="small">
      New
    </TeliButton>
  </div>
  <ul className="flex flex-col gap-y-2">
    <li
      role="button"
      onClick={() => alert("Clicked menu item")}
      className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
    >
      <p>Model 1</p>
    </li>
    <li
      role="button"
      onClick={() => alert("Clicked menu item")}
      className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
    >
      <p>Model 2</p>
    </li>
  </ul>
</TeliBasicMenu>
<TeliBasicMenu
  label={label}
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
>
  <h2>Menu items</h2>
</TeliBasicMenu>
      `,
      },
    },
  },
};

export default CustomMenuItems;
