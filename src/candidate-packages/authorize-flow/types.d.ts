import { AxiosInstance } from 'axios';
import { QueryClient } from '@tanstack/react-query';

export interface SessionHandlingConfig {
    queryClient?: QueryClient;
    broadcastChannel?: BroadcastChannel;
    keysToInvalidate?: string[];
}
export interface AuthConfig {
    getToken: () => string | null;
    onAuthError?: () => void;
}
export interface ApiFactory {
    instance: AxiosInstance;
    withSessionHandling: (config: SessionHandlingConfig) => ApiFactory;
    build: () => {
        instance: AxiosInstance;
    };
}
