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
export function useDrawer(args: {
  ref: ForwardedRef<DrawerController>;
  initialOpen: boolean;
  onVisibilityChange?: (open: boolean) => void
}) {
  const [open, setOpen] = useState(args.initialOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);
  const toggleDrawer = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    args.onVisibilityChange?.(open);
  }, [open, args.onVisibilityChange]);

  useImperativeHandle(
    args.ref,
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
