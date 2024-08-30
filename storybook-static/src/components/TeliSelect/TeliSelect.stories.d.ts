import { StoryObj } from '@storybook/react';
import { BasicSelect, LabelsAndHelperText, MultiSelect, OtherStates } from './stories';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliSelect').TeliSelectProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        defaultOpen?: boolean | undefined;
        defaultValue?: any;
        disabled?: boolean | undefined;
        error?: boolean | undefined;
        focused?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hiddenLabel?: boolean | undefined;
        id?: string | undefined;
        label?: string | undefined;
        helperText?: string | undefined;
        multiple?: boolean | undefined;
        onChange?: ((event: import('@mui/material/Select/SelectInput').SelectChangeEvent) => void) | undefined;
        onClose?: ((event: object) => void) | undefined;
        onOpen?: ((event: object) => void) | undefined;
        open?: boolean | undefined;
        options?: {
            id?: any;
            value?: any;
            label: import('../../../node_modules/react').ReactNode | string;
        }[] | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        selectId?: string | undefined;
        width?: number | undefined;
        value?: any;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
export type TeliSelectStory = StoryObj<typeof meta>;
export { BasicSelect, LabelsAndHelperText, OtherStates, MultiSelect };
