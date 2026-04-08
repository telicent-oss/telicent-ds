import { ForwardedRef } from '../../../../node_modules/react';
export interface DrawerController {
    openDrawer(): void;
    closeDrawer(): void;
    toggleDrawer(): void;
    getContainer(): HTMLDivElement | null;
}
/**
 *
 * @param ref ref from fowardedRef.
 * @param initialOpen
 * @param onVisibilityChange
 * @returns
 */
export declare function useDrawer(args: {
    ref: ForwardedRef<DrawerController>;
    initialOpen: boolean;
    onVisibilityChange?: (open: boolean) => void;
}): {
    open: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
    ref: import('../../../../node_modules/react').RefObject<HTMLDivElement>;
    drawerProps: {
        ref: import('../../../../node_modules/react').RefObject<HTMLDivElement>;
        onToggle: () => void;
        onClose: () => void;
        open: boolean;
    };
};
