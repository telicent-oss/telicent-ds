import { StoryObj } from '@storybook/react';
import { AdornmentExamples, Controlled, FormProps, MultilineExamples, ValidationExamples } from './stories';

declare const meta: {
    component: import('../../../node_modules/react').FC<import('./TeliTextFieldProps').default>;
};
export default meta;
export type TeliTextFieldStory = StoryObj<typeof meta>;
export declare const Basic: TeliTextFieldStory;
export { FormProps, ValidationExamples, MultilineExamples, AdornmentExamples, Controlled, };
