import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  ForwardedRef,
} from "react";

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
export function useDrawer(
  ref: ForwardedRef<DrawerController>,
  initialOpen = true,
  onVisibilityChange?: (open: boolean) => void
) {
  const [open, setOpen] = useState(initialOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);
  const toggleDrawer = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    onVisibilityChange?.(open);
  }, [open, onVisibilityChange]);

  useImperativeHandle(
    ref,
    () => ({
      openDrawer,
      closeDrawer,
      toggleDrawer,
      getContainer: () => containerRef.current,
    }),
    [openDrawer, closeDrawer, toggleDrawer]
  );

  return {
    open,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    ref: containerRef,
    // Conveniance to lessen chance of forgetting to apply containerRef
    drawerProps: {
      ref: containerRef,
      onToggle: toggleDrawer,
      onClose: closeDrawer,
      open,
    },
  };
}
