import { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { SessionHandlingConfig } from '../types';
import { default as AuthServerOAuth2Client } from '@telicent-oss/fe-auth-lib';
declare const formatPayload: (headers: AxiosRequestHeaders, data: unknown) => unknown;
export { formatPayload };
export declare function withSessionHandling(instance: AxiosInstance, { queryClient, keysToInvalidate }: SessionHandlingConfig, authClient?: AuthServerOAuth2Client): {
    instance: AxiosInstance;
};
