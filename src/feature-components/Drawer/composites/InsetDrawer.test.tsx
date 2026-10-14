import React from "react";
import { render, act } from "@testing-library/react";
import { InsetDrawer, DrawerController } from "./InsetDrawer";

jest.mock("../primitives/DrawerPresentational", () => {
  const React = require("react") as typeof import("react");
  const mockDrawerPresentational = jest.fn((props: any) => (
    <div data-testid="drawer">{props.children}</div>
  ));
  const Wrapped = React.forwardRef<HTMLDivElement, any>((props, ref) =>
    mockDrawerPresentational({ ...props, ref })
  );
  return {
    __esModule: true,
    DrawerPresentational: Wrapped,
    __mockDrawerPresentational: mockDrawerPresentational,
  };
});

const {
  __mockDrawerPresentational,
} = require("../primitives/DrawerPresentational");

describe("InsetDrawer", () => {
  beforeEach(() => __mockDrawerPresentational.mockClear());

  test("passes initialOpen and children", () => {
    render(<InsetDrawer initialOpen={false}>content</InsetDrawer>);
    const props = __mockDrawerPresentational.mock.calls.at(-1)![0];
    expect(props.open).toBe(false);
    expect(props.children).toBe("content");
  });

  test("onVisibilityChange fires on state changes", () => {
    const onVisibilityChange = jest.fn();
    const ref = React.createRef<DrawerController>();

    render(
      <InsetDrawer ref={ref} initialOpen={false} onVisibilityChange={onVisibilityChange}>
        x
      </InsetDrawer>
    );

    expect(onVisibilityChange).toHaveBeenCalledWith(false);
    act(() => ref.current!.openDrawer());
    expect(onVisibilityChange).toHaveBeenLastCalledWith(true);
    act(() => ref.current!.closeDrawer());
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);
  });

  test("ref API toggles and re-renders", () => {
    const ref = React.createRef<DrawerController>();
    render(<InsetDrawer ref={ref}>x</InsetDrawer>);

    const first = __mockDrawerPresentational.mock.calls.at(-1)![0].open;
    expect(first).toBe(true);

    act(() => ref.current!.toggleDrawer());
    const after = __mockDrawerPresentational.mock.calls.at(-1)![0].open;
    expect(after).toBe(false);
  });
});
