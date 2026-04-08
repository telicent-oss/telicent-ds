import { QueryClient } from '@tanstack/react-query';
export declare const registerAuthSync: (queryClient: QueryClient, baseUrl?: string) => () => void;
/**
 * @deprecated Use `useAuthContext()` within <AuthProvider>.
 */
export declare const useAuthSync: (queryClient: QueryClient, baseUrl: string) => void;
