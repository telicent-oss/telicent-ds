import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/react').FC<Partial<import('./TeliUserAvatar').TeliUserAvatarProps>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type TeliUserAvatarStory = StoryObj<typeof meta>;
export declare const BasicExample: TeliUserAvatarStory;
export declare const InitialsExample: TeliUserAvatarStory;
export declare const ImageExample: TeliUserAvatarStory;
