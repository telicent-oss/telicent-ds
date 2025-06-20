import { StoryObj } from '@storybook/react';
import { ErrorFallbackProps } from './ErrorFallback';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<ErrorFallbackProps>;
    tags: string[];
    args: {
        name: string;
        message: undefined;
        height: number;
        sx: undefined;
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        height?: (number | string) | undefined;
        sx?: import('@mui/material').SxProps<import('@mui/material').Theme> | undefined;
        name?: string | undefined;
        message?: string | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultError: Story;
export declare const CustomMessage: Story;
export declare const CustomNameAndStyle: Story;
export declare const ExplicitHeight: Story;
