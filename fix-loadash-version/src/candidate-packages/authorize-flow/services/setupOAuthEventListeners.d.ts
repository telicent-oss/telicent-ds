import { default as AuthServerOAuth2Client } from '@telicent-oss/fe-auth-lib';
export declare const extractRedirectFromState: (url: URL) => {
    redirect: URL | undefined;
    url: URL;
};
export declare const setupOAuthEventListeners: (OAuth2Client: AuthServerOAuth2Client, onAuthSuccess?: (redirect?: URL) => void, onAuthError?: (error?: Error) => void) => (() => void);
