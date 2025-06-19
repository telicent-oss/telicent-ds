import { UITheme } from '../../export';

interface AuthRedirectModalProps {
    channelName?: string;
    signOutUrl: string;
    debounceMs?: number;
    theme?: UITheme;
}
export declare const AuthModal: React.FC<AuthRedirectModalProps>;
export {};
