import { AuthServerOAuth2ClientConfig } from '@telicent-oss/fe-auth-lib';
import { default as React } from '../../../../node_modules/react';
import { QueryClient } from '@tanstack/react-query';
interface AuthProviderProps {
    apiUrl: string;
    config: AuthServerOAuth2ClientConfig;
    queryClient: QueryClient;
    children: React.ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export {};
