import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<Partial<import('./TeliUserProfile').TeliUserProfileProps>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type TeliUserProfileStory = StoryObj<typeof meta>;
export declare const BasicExample: TeliUserProfileStory;
export declare const InitialsExample: TeliUserProfileStory;
