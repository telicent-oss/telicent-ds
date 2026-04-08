import { AuthServerOAuth2ClientConfig } from '@telicent-oss/fe-auth-lib';
export type IsAuthRedirectArgs = {
    config: AuthServerOAuth2ClientConfig;
    url: string | URL;
};
export declare const isAuthRedirect: ({ config, url, }: IsAuthRedirectArgs) => boolean;
