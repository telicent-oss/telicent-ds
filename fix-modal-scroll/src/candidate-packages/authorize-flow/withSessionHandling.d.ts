import { AxiosInstance } from 'axios';
import { SessionHandlingConfig } from './types';

export declare function withSessionHandling(instance: AxiosInstance, { queryClient, keysToInvalidate, broadcastChannel, }: SessionHandlingConfig): {
    instance: AxiosInstance;
};
