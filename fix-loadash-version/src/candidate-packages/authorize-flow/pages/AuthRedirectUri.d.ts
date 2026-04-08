import { FC } from '../../../../node_modules/react';
import { AuthServerOAuth2ClientConfig } from '@telicent-oss/fe-auth-lib';
interface AuthRedirectUriProps {
    config: AuthServerOAuth2ClientConfig;
}
export declare const AuthRedirectUri: FC<AuthRedirectUriProps>;
export {};
