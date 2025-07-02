import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./DropdownButton').DropdownButtonProps>;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
        id: string;
        ariaLabel: string;
        menuItems: {
            id: string;
            icon: (() => import("@emotion/react/jsx-runtime").JSX.Element) | (() => import("@emotion/react/jsx-runtime").JSX.Element);
            value: string;
            default: boolean;
            onClick: () => void;
            selected: boolean;
        }[];
    };
    argTypes: {
        ariaLabel: {
            control: "text";
            description: string;
        };
        id: {
            control: "text";
            description: string;
        };
        menuItems: {
            control: "object";
            description: string;
        };
    };
    decorators: (Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        ariaLabel: string;
        id: string;
        menuItems: import('./DropdownButton').DropDownButtonMenuItemProps[];
    }>) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DropdownWithFontAwesome: Story;
export declare const DropdownWithCustomIcons: Story;
