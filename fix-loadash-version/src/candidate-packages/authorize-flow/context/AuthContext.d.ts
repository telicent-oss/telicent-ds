import { default as AuthServerOAuth2Client, UserInfo } from '@telicent-oss/fe-auth-lib';
import { AxiosInstance } from 'axios';
export interface AuthContextProps {
    user: UserInfo | null;
    error: Error | null;
    loading: boolean;
    authClient: AuthServerOAuth2Client;
    api: AxiosInstance;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}
export declare const AuthContext: import('../../../../node_modules/react').Context<AuthContextProps | null>;
