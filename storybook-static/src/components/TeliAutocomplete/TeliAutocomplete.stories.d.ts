import { StoryObj } from '@storybook/react';
import { AsynchronousRequests, Controlled, ComboBox, ComboBoxOptions, CustomRenderOptions, FreeSolo, MultipleValues } from './stories';
import { default as TeliAutocomplete } from './TeliAutocomplete';

declare const meta: {
    component: typeof TeliAutocomplete;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
export type TeliAutocompleteStory = StoryObj<typeof meta>;
export { ComboBox, ComboBoxOptions, CustomRenderOptions, Controlled, FreeSolo, AsynchronousRequests, MultipleValues, };
