import React, { forwardRef } from "react";
import { renderHook, act } from "@testing-library/react";
import { render } from "@testing-library/react";
import { useDrawer, DrawerController } from "./useDrawer";

describe("useDrawer state", () => {
  test("initialOpen + onVisibilityChange", () => {
    const onVisibilityChange = jest.fn();
    const ref = React.createRef<DrawerController>();
    const initialOpen = false;

    const { result } = renderHook(() =>
      useDrawer({ ref, initialOpen, onVisibilityChange })
    );

    expect(result.current.open).toBe(false);
    expect(onVisibilityChange).toHaveBeenCalledTimes(1);
    expect(onVisibilityChange).toHaveBeenCalledWith(false);
  });

  test("open/close/toggle update state and notify", () => {
    const onVisibilityChange = jest.fn();
    const ref = React.createRef<DrawerController>();
    const initialOpen = true;

    const { result } = renderHook(() =>
      useDrawer({ ref, initialOpen, onVisibilityChange })
    );

    act(() => result.current.closeDrawer());
    expect(result.current.open).toBe(false);
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);

    act(() => result.current.openDrawer());
    expect(result.current.open).toBe(true);
    expect(onVisibilityChange).toHaveBeenLastCalledWith(true);

    act(() => result.current.toggleDrawer());
    expect(result.current.open).toBe(false);
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);
  });

  test("drawerProps forwards handlers", () => {
    const ref = React.createRef<DrawerController>();
    const { result } = renderHook(() => useDrawer({ ref, initialOpen: false }));

    act(() => result.current.drawerProps.onToggle());
    expect(result.current.open).toBe(true);

    act(() => result.current.drawerProps.onClose());
    expect(result.current.open).toBe(false);
  });
});

describe("useDrawer imperative ref", () => {
  const Host = forwardRef<DrawerController>((_, forwardedRef) => {
    const d = useDrawer({ ref: forwardedRef, initialOpen: false });
    return <div ref={d.ref} />;
  });

  test("API methods and getContainer()", () => {
    const apiRef = React.createRef<DrawerController>();
    const { container } = render(<Host ref={apiRef} />);

    const el = container.firstChild as HTMLDivElement;
    expect(apiRef.current?.getContainer()).toBe(el);

    act(() => apiRef.current!.openDrawer());
    act(() => apiRef.current!.toggleDrawer());
    act(() => apiRef.current!.closeDrawer());
  });
});
