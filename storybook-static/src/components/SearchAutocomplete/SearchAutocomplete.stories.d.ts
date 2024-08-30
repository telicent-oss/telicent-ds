import { StoryObj } from '@storybook/react';

declare const meta: {
    component: <Option>({ autoFocus, autoHighlight, error, fullWidth, getOptionKey, getOptionLabel, helperText, id, inputValue, isOptionEqualToValue, label, listboxMaxHeight, loading, loadingText, onChange, onInputChange, openOnFocus, options, placeholder, width, }: import('./SearchAutocomplete').SearchAutocompleteProps<Option>) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        options: readonly unknown[];
        autoHighlight?: boolean | undefined;
        autoFocus?: boolean | undefined;
        error?: boolean | undefined;
        fullWidth?: boolean | undefined;
        helperText?: string | undefined;
        id?: string | undefined;
        inputValue?: string | undefined;
        label?: string | undefined;
        listboxMaxHeight?: number | undefined;
        loading?: boolean | undefined;
        loadingText?: import('../../../node_modules/react').ReactNode;
        openOnFocus?: boolean | undefined;
        placeholder?: string | undefined;
        width?: number | undefined;
        getOptionLabel?: ((option: unknown) => string) | undefined;
        getOptionKey?: ((option: unknown) => string | number) | undefined;
        isOptionEqualToValue?: ((option: unknown, value: unknown) => boolean) | undefined;
        onChange?: ((event: import('../../../node_modules/react').SyntheticEvent, value: unknown, reason: import('@mui/material').AutocompleteChangeReason, details?: import('@mui/material').AutocompleteChangeDetails<unknown> | undefined) => void) | undefined;
        onInputChange?: ((event: import('../../../node_modules/react').SyntheticEvent, value: string, reason: import('@mui/material').AutocompleteInputChangeReason) => void) | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
export type SearchAutocompleteStory = StoryObj<typeof meta>;
export declare const BasicExample: SearchAutocompleteStory;
/**
 * Options can be provided in as array of objects with the label key (as shown
 * above) or an array of strings as shown below.
 */
export declare const FlatData: SearchAutocompleteStory;
/**
 * You can also provide data in a different structure as shown below. In the
 * situation where you have labels with values which are not unique, use
 * `getOptionKey` to determine the key for a given option.
 */
export declare const CustomOptions: SearchAutocompleteStory;
