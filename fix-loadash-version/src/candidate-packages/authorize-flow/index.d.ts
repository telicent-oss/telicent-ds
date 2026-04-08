import { RequestApi } from './types';
import { default as AuthServerOAuth2Client } from '@telicent-oss/fe-auth-lib';
export { setupOAuthEventListeners } from './services/setupOAuthEventListeners';
export declare const createRequestApi: (baseURL?: string, authClient?: AuthServerOAuth2Client) => RequestApi;
export declare const createApi: (baseURL?: string, authClient?: AuthServerOAuth2Client) => RequestApi;
