import { QueryClient } from '@tanstack/react-query';

export declare const registerAuthSync: (queryClient: QueryClient) => () => void;
export declare const useAuthSync: (queryClient: QueryClient) => void;
