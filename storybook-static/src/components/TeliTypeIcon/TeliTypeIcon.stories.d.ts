import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<Partial<{
        borderColor: string;
        disabled: boolean;
        size: import('./type-icon-utils').TeliTypeIconSizeProp;
        type: string;
    }>>;
    parameters: {
        docs: {
            source: {
                type: string;
            };
        };
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        borderColor?: string | undefined;
        disabled?: boolean | undefined;
        size?: import('./type-icon-utils').TeliTypeIconSizeProp | undefined;
        type?: string | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * The type icon can be rendered by providing a <code>type</code> prop to the
 * component.
 */
export declare const Icons: Story;
/**
 * When a type is not provided, a blank class will be displayed.
 */
export declare const BlankClassIcon: Story;
/**
 * When a type is specified but the icon is not defined in the ontology,
 * fallback text will be rendered (Class initials).
 */
export declare const TypeInitials: Story;
/**
 * The size of the icon can be controlled using the <code>size</code> prop.
 */
export declare const Size: Story;
/**
 * The component can be rendered in a disabled state by setting
 * <code>disabled</code> to true.
 */
export declare const DisabledState: Story;
