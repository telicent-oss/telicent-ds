import { StoryObj } from '@storybook/react';
import { BasicMenu, ControlledBasicMenu, CustomMenuItems, PositionedMenu, WithIcon } from './stories';

declare const meta: {
    component: import('react').FC<import('./TeliBasicMenu').TeliBasicMenuProps>;
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export type TeliBasicMenuStory = StoryObj<typeof meta>;
export default meta;
export { BasicMenu, CustomMenuItems, WithIcon, ControlledBasicMenu, PositionedMenu, };
