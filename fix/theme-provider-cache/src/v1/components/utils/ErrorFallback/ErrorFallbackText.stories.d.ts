import { StoryObj } from '@storybook/react';
import { ErrorFallbackTextProps } from './ErrorFallbackText';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<ErrorFallbackTextProps>;
    tags: string[];
    args: {
        name: string;
        message: undefined;
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        name?: string | undefined;
        message?: string | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * DefaultText:
 * - When `message` is passed, it overrides `name`.
 * - Renders exactly the given `message`.
 */
export declare const Defaults: Story;
/**
 * WithMessage:
 * - When `message` is passed, it overrides `name`.
 * - Renders exactly the given `message`.
 */
export declare const DefaultText: Story;
/**
 * WithName:
 * - When `message` is undefined, uses `name` to generate:
 *   "⚠️ {name} failed to load".
 */
export declare const WithName: Story;
/**
 * WithNameAndMessage:
 * - When `message` and `name` set, `message` wins
 */
export declare const WithNameAndMessage: Story;
/**
 * WithNameAndMessage:
 * - When `message` is undefined, uses `name` to generate:
 *   "⚠️ {name} failed to load".
 */
export declare const Long: Story;
