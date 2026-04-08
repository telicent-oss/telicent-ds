import { QueryClient } from '@tanstack/react-query';
export * from './isAuthRedirectUri';
export * from './normalizePathname';
export * from './parseAbsoluteUrl';
export declare const registerAuthSync: (queryClient: QueryClient, baseUrl?: string) => () => void;
