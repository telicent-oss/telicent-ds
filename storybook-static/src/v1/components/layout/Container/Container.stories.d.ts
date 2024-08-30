import { StoryObj } from '@storybook/react';
import { default as Container } from './Container';

declare const meta: {
    component: import('../../../../../node_modules/react').FC<import('../../../../../node_modules/react').HTMLAttributes<HTMLDivElement> & {
        children?: import('../../../../../node_modules/react').ReactNode | undefined;
    } & Partial<{
        disablePadding: boolean;
        fixed: boolean;
        maxWidth: "xs" | "sm" | "md" | "lg" | "xl" | false;
    }>>;
};
export default meta;
export type ContainerStory = StoryObj<typeof meta>;
export declare const Basic: StoryObj<typeof Container>;
