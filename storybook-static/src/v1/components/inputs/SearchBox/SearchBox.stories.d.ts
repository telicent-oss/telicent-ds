import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<Partial<{
        autoFocus: boolean;
        inputRef: import('../../../../../node_modules/react').ForwardedRef<HTMLInputElement> | import('../../../../../node_modules/react').RefObject<HTMLInputElement>;
        onBlur: (event: import('../../../../../node_modules/react').FocusEvent<HTMLInputElement>) => void;
        onChange: (event: import('../../../../../node_modules/react').ChangeEvent<HTMLInputElement>) => void;
        onSearch: (event: import('../../../../../node_modules/react').MouseEvent<HTMLFormElement>) => void;
        name: import('@mui/material').InputBaseProps["name"];
        placeholder: import('@mui/material').InputBaseProps["placeholder"];
        value: string;
    }>>;
    tags: string[];
    args: {
        onSearch: import('@vitest/spy').Mock<[event: import('../../../../../node_modules/react').MouseEvent<HTMLFormElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
