import { renderHook, act, RenderHookResult } from "@testing-library/react";
import * as useLayerSelectorModule from "./useLayerSelector";
import { LayerOption } from "./LayerSelectorPresentational";

describe("useLayerSelector", () => {
  let result: RenderHookResult<
    ReturnType<typeof useLayerSelectorModule.useLayerSelector>,
    void
  >["result"];
  let initialData: LayerOption[];
  let onChangeMock: jest.Mock;
  const fakeButton = document.createElement("button");

  const fakeEvent = {
    currentTarget: fakeButton,
  } as React.MouseEvent<HTMLButtonElement>;

  beforeEach(() => {
    initialData = [
      {
        label: "Label1",
        image: "image1",
        uri: "http://thing1.com",
      },
      {
        label: "Label2",
        image: "image2",
        uri: "http://thing2.com",
      },
      {
        label: "Label3",
        image: "image3",
        uri: "http://thing3.com",
      },
    ];
    onChangeMock = jest.fn();
    result = renderHook(() =>
      useLayerSelectorModule.useLayerSelector({
        data: initialData,
        onChange: onChangeMock,
      })
    ).result;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("initial state is set correctly", () => {
    expect(result.current.selectedIndex).toBe(0);
    expect(result.current.anchorEl).toBeNull();
  });

  test("handles open", () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent);
    });
    expect(result.current.anchorEl).toBe(fakeEvent.currentTarget);
  });

  test("handles close", () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent);
      result.current.onCloseDropdown();
    });
    expect(result.current.anchorEl).toBeNull();
  });

  test("open (by click dropdown), then cycle selection (by re-clicking dropdown)", () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent); // open
    });
    expect(onChangeMock).toHaveBeenCalledWith(initialData[0]);
    expect(result.current.selectedIndex).toBe(0);

    act(() => {
      result.current.onClickDropdown(fakeEvent); // re-click to cycle selection (while open)
    });
    expect(onChangeMock).toHaveBeenCalledWith(initialData[1]);
    expect(result.current.selectedIndex).toBe(1);
  });

  test("handles list item click", () => {
    act(() => {
      result.current.onListItemClick(2);
    });
    expect(result.current.selectedIndex).toBe(2);
    expect(onChangeMock).toHaveBeenCalledWith(initialData[2]);
    expect(result.current.anchorEl).toBeNull(); // should be closed after selection
  });
});
