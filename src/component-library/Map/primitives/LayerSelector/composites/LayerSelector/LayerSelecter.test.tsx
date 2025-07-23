import { render, fireEvent, screen } from "@testing-library/react";
import * as useLayerSelectorModule from "../../primitives/useLayerSelector";
import { MapCanvasProvider } from "../../../MapCanvas/MapCanvasProvider";
import { LayerSelector } from "./LayerSelector";

// const actualUseLayerSelector = jest.requireActual(
//   "../../primitives/useLayerSelector"
// ).useLayerSelector;

// type HookRet = ReturnType<typeof actualUseLayerSelector>;

// const useLayerSelectorSpy = jest.spyOn(
//   useLayerSelectorModule,
//   "useLayerSelector"
// );

describe("LayerSelector", () => {
  const mockInitialMapData = [
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should not render if data has one or no item", () => {
    const { container } = render(
      <MapCanvasProvider
        initialMapStyleConfig={{
          vectorStyles: mockInitialMapData[0],
        }}
      >
        <LayerSelector />
      </MapCanvasProvider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  test.skip("should render and handle dropdown interactions", () => {
    render(
      <MapCanvasProvider
        initialMapStyleConfig={{
          tileSets: mockInitialMapData,
        }}
      >
        <LayerSelector />
      </MapCanvasProvider>
    );

    // const hookReturn = useLayerSelectorSpy.mock.results[0].value as HookRet;
    // const spies = {
    //   onClickDropdown: jest
    //     .spyOn(hookReturn, "onClickDropdown")
    //     .mockImplementation((...a) => hookReturn.onClickDropdown(...a)),
    //   onCloseDropdown: jest
    //     .spyOn(hookReturn, "onCloseDropdown")
    //     .mockImplementation(() => hookReturn.onCloseDropdown()),
    //   onListItemClick: jest
    //     .spyOn(hookReturn, "onListItemClick")
    //     .mockImplementation((...a) => hookReturn.onListItemClick(...a)),
    // };

    // // open
    // fireEvent.click(screen.getByTestId("layer-selector"));
    // expect(spies.onClickDropdown).toHaveBeenCalledTimes(1);
    // // select
    // fireEvent.click(screen.getByText("Label2"));
    // expect(spies.onListItemClick).toHaveBeenCalledWith(1);
    // expect(screen.queryByText("Label1")).not.toBeVisible();
  });
});
