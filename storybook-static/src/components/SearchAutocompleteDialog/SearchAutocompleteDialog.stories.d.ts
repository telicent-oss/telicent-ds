import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<Omit<import('../SearchAutocomplete/SearchAutocomplete').SearchAutocompleteProps<{
        label: string;
    }>, "fullWidth" | "listboxMaxHeight"> & {
        open: import('@mui/material').DialogProps["open"];
        children: import('../../../node_modules/react').ReactNode;
    } & Partial<{
        onClose: import('@mui/material').DialogProps["onClose"];
    }>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        autoFocus?: boolean | undefined;
        id?: string | undefined;
        onChange?: ((event: import('../../../node_modules/react').SyntheticEvent, value: string | {
            label: string;
        } | null, reason: import('@mui/material').AutocompleteChangeReason, details?: import('@mui/material').AutocompleteChangeDetails<{
            label: string;
        }> | undefined) => void) | undefined;
        label?: string | undefined;
        width?: number | undefined;
        loading?: boolean | undefined;
        placeholder?: string | undefined;
        options: readonly {
            label: string;
        }[];
        error?: boolean | undefined;
        loadingText?: import('../../../node_modules/react').ReactNode;
        autoHighlight?: boolean | undefined;
        getOptionKey?: ((option: string | {
            label: string;
        }) => string | number) | undefined;
        getOptionLabel?: ((option: string | {
            label: string;
        }) => string) | undefined;
        inputValue?: string | undefined;
        isOptionEqualToValue?: ((option: {
            label: string;
        }, value: {
            label: string;
        }) => boolean) | undefined;
        onInputChange?: ((event: import('../../../node_modules/react').SyntheticEvent, value: string, reason: import('@mui/material').AutocompleteInputChangeReason) => void) | undefined;
        openOnFocus?: boolean | undefined;
        helperText?: string | undefined;
        open: import('@mui/material').DialogProps["open"];
        children: import('../../../node_modules/react').ReactNode;
        onClose?: import('@mui/material').DialogProps["onClose"];
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
export type SearchAutocompleteDialogStory = StoryObj<typeof meta>;
/**
 * This is an example of how the component can be rendered with search results
 */
export declare const SearchResultsWithResults: SearchAutocompleteDialogStory;
/**
 * When the search results component has the no children. A message will be
 * displayed to inform the user that nothing was found.
 */
export declare const SearchResultsWithoutResults: SearchAutocompleteDialogStory;
/**
 * It's useful to allow the user to continue where they left off by providing
 * them with their most recent searches.
 */
export declare const RecentSearchList: SearchAutocompleteDialogStory;
/**
 * Similar to the search results component, when the recent search component
 * doesn't have any children it will display a message informing the user no
 * recent searches were found.
 */
export declare const RecentSearchesEmptyList: SearchAutocompleteDialogStory;
