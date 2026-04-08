import { StoryObj } from '@storybook/react';
interface OAuthFlowDemoProps {
    config?: {
        clientId?: string;
        authServerUrl?: string;
        popupRedirectUri?: string;
        scope?: string;
    };
}
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<OAuthFlowDemoProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: never[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoginWithPopup: Story;
export declare const LoginCurrentWindow: StoryObj;
export declare const StorybookOauthCallback: StoryObj;
export declare const AuthRedirectUriStory: StoryObj;
