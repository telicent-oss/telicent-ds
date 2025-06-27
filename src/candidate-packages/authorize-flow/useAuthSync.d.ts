import { QueryClient } from '@tanstack/react-query';

export declare const registerAuthSync: (queryClient: QueryClient, baseUrl?: string) => () => void;
export declare const useAuthSync: (queryClient: QueryClient, baseUrl: string) => void;
