import { StoryObj } from '@storybook/react';
import { ErrorFallbackWrapperProps } from './ErrorFallbackWrapper';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<ErrorFallbackWrapperProps>;
    tags: string[];
    args: {};
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        children: import('../../../../../node_modules/react').ReactNode;
        height?: (number | string) | undefined;
        sx?: import('@mui/material').SxProps<import('@mui/material').Theme> | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Default:
 * - Uses ErrorFallbackWrapper with default `height = 256`.
 * - Renders `<ErrorFallbackText name="MyComponent" />` inside.
 */
export declare const Default: Story;
/**
 * CustomMessage:
 * - Pass `message` to ErrorFallbackText for custom error text.
 */
export declare const CustomMessage: Story;
/**
 * CustomHeight:
 * - Overrides `height` prop on ErrorFallbackWrapper (150px vs default 256px).
 */
export declare const CustomHeight: Story;
/**
 * StyledWrapper:
 * - Locally wraps ErrorFallbackWrapper in a MUI ThemeProvider that defines
 *   `background.paper` and `error.main` tokens so the background renders.
 */
export declare const StyledWrapper: {
    args: {
        height: number;
        sx: (theme: any) => {
            width: string;
            backgroundColor: any;
            border: number;
            borderColor: any;
            borderRadius: number;
            p: number;
        };
        children: import("@emotion/react/jsx-runtime").JSX.Element;
    };
    render: (args: ErrorFallbackWrapperProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
/**
 * TextOnly:
 * - Demonstrates using ErrorFallbackText on its own (no wrapper).
 * - Useful when centering or container is handled externally.
 */
export declare const TextOnly: Story;
