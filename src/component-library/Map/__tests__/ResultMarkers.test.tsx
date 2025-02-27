import React from "react";
import { screen, waitFor, render } from "@testing-library/react";
import Map from "react-map-gl/maplibre";

import ResultsMarkers from "../ResultsMarkers";
import { ARGA_ATTACK, BOULAY_ATTACK, MADE_UP_MARKER } from "../sampleData/markers";
import { ClassIcon } from "../FeatureMap";

const CSS = {
  MATCH_ICON_STYLE:
    "background-color: rgb(36, 36, 0); color: rgb(255, 253, 4); display: flex; align-items: center; justify-content: center; border-color: rgb(255,253,4); border-radius: 9999px; cursor: pointer; border-width: 1px; width: 28px; height: 28px;",
  NO_ICON_STYLE:
    "background-color: rgb(18, 18, 18); color: rgb(221, 221, 221); display: flex; align-items: center; justify-content: center; border-color: rgb(221, 221, 221); border-radius: 9999px; cursor: pointer; border-width: 1px; width: 28px; height: 28px;",
};

const findByClassUriMock = (maybeUri: string): ClassIcon => {
  if (maybeUri === ARGA_ATTACK.type) {
    return ({
      faIcon: CSS.MATCH_ICON_STYLE,
      backgroundColor: "rgb(36, 36, 0)",
      color: "rgb(255,253,4)",
      classUri: maybeUri,
      iconFallbackText: "Arg",
      alt: "test alt text"
    })
  }
  return ({
    backgroundColor: "rgb(18, 18, 18)",
    color: "rgb(221, 221, 221)",
    classUri: MADE_UP_MARKER.type,
    iconFallbackText: "mb",
    alt: "test alt text"
  })
}

describe("Result Markers component", () => {
  describe("renders correctly", () => {
    let container: HTMLElement;
    let qs: typeof container.querySelector;
    beforeEach(async () => {
      ({ container } = render(<Map id="TelicentMap"><ResultsMarkers onClick={() => jest.fn()} selected={[]} findByClassUri={findByClassUriMock} markers={[ARGA_ATTACK, MADE_UP_MARKER]} /></Map>))
      qs = container.querySelector.bind(container);
      await waitFor(
        () => expect(screen.queryByTestId("document-locations")).toBeTruthy() // wait for use(promise)
      );
    })

    it("has correct styles when classURI finds a match", () => {
      const element = qs('[data-name="Attack in Arga, Sudan"]');
      expect(qs('[data-name="Attack in Arga, Sudan"] [data-icon]')).toBeTruthy();
      expect(element?.firstChild).toHaveAttribute("style", CSS.MATCH_ICON_STYLE)
    });

    it("has correct styles when classURI does not find a match and uses stub styles", () => {
      const element = qs('[data-name="Non event. Not important"]');
      expect(qs('[data-name="Non event. Not important"] [data-icon]')).not.toBeTruthy();
      expect(element?.firstChild).toHaveAttribute("style", CSS.NO_ICON_STYLE)
    });

    test("renders marker without icons when ontology styles are not matched", () => {
      screen.debug()
      expect(screen.queryByText("Mad")).toBeVisible();
      expect(qs('[data-name="Non event. Not important"] [data-icon]')).not.toBeTruthy();
      expect(
        qs('[data-name="Non event. Not important"]')?.childNodes[0].firstChild
      ).toHaveClass("p-1 font-body"); // non-icon class
    });
  });
});
