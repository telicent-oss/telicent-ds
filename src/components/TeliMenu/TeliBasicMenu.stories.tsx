import type { Meta, StoryObj } from "@storybook/react";
import {
  BasicMenu,
  ControlledBasicMenu,
  CustomMenuItems,
  PositionedMenu,
  WithIcon,
} from "./stories";
import TeliBasicMenu from "./TeliBasicMenu";

const meta = {
  component: TeliBasicMenu,
  title: "components/Menus/TeliBasicMenu",
  parameters: {
    docs: {
      description: {
        component: `Menus display a list of choices on temporary surfaces.
        <br /> **Disambiguation**: In contrast to simple menus, simple dialogs can present 
        additional detail related to the options available for a list item or 
        provide navigational or orthogonal actions related to the primary task. 
        Although they can display the same content, simple menus are preferred 
        over simple dialogs because simple menus are less disruptive to the 
        user's current context.`,
      },
    },
  },
} satisfies Meta<typeof TeliBasicMenu>;
export type TeliBasicMenuStory = StoryObj<typeof meta>;

export default meta;

export {
  BasicMenu,
  CustomMenuItems,
  WithIcon,
  ControlledBasicMenu,
  PositionedMenu,
};
