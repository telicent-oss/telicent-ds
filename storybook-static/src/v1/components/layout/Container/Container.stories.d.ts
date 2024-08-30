import { StoryObj } from '@storybook/react';
import { default as Container } from './Container';

declare const meta: {
    component: import('react').FC<import('react').HTMLAttributes<HTMLDivElement> & {
        children?: import('react').ReactNode;
    } & Partial<{
        disablePadding: boolean;
        fixed: boolean;
        maxWidth: false | "xs" | "sm" | "lg" | "xl" | "md";
    }>>;
};
export default meta;
export type ContainerStory = StoryObj<typeof meta>;
export declare const Basic: StoryObj<typeof Container>;
