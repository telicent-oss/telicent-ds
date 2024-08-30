import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<Partial<{
        autoFocus: boolean;
        inputRef: import('react').RefObject<HTMLInputElement> | import('react').ForwardedRef<HTMLInputElement>;
        onBlur: (event: import('react').FocusEvent<HTMLInputElement, Element>) => void;
        onChange: (event: import('react').ChangeEvent<HTMLInputElement>) => void;
        onSearch: (event: import('react').MouseEvent<HTMLFormElement, MouseEvent>) => void;
        name: string | undefined;
        placeholder: string | undefined;
        value: string;
    }>>;
    tags: string[];
    args: {
        onSearch: import('@vitest/spy').Mock<[event: import('react').MouseEvent<HTMLFormElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
