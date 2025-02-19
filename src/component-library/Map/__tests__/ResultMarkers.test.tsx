import React from "react";
import { screen, waitFor } from "@testing-library/dom";
import Map, { MapProvider } from "react-map-gl/maplibre";

import { renderWithProviders } from "../../../testUtils";
import { DOCUMENT_LOCATIONS } from "../../../sampleData";
import ResultsMarkers from "../ResultsMarkers";
import config from "../../../config/app-config";
import { act } from "react-dom/test-utils";
const CSS = {
  MATCH_ICON_STYLE:
    "background-color: rgb(36, 36, 0); color: rgb(255, 253, 4); display: flex; align-items: center; justify-content: center; border-color: #fffd04; border-radius: 9999px; cursor: pointer; border-width: 1px; width: 28px; height: 28px;",
  NO_ICON_STYLE:
    "background-color: rgb(18, 18, 18); color: rgb(221, 221, 221); display: flex; align-items: center; justify-content: center; border-color: #dddddd; border-radius: 9999px; cursor: pointer; border-width: 1px; width: 28px; height: 28px;",
};
const renderMarkers = () =>
  renderWithProviders(
    <Map>
      <ResultsMarkers setViewportToBounds={jest.fn()} />
    </Map>,
    {
      locationProviderProps: {
        documentLocations: DOCUMENT_LOCATIONS,
      },
      wrapper: MapProvider,
    }
  );

describe("Result Markers component", () => {
  window.URL.createObjectURL = jest.fn();

  describe("renders correctly", () => {
    let container: HTMLElement;
    let qs: typeof container.querySelector;
    beforeEach(async () => {
      // beforeAll has side effects that cause N+1 test cases to fail
      ({ container } = renderMarkers());
      qs = container.querySelector.bind(container);
      await waitFor(
        () => expect(screen.queryByTestId("document-locations")).toBeTruthy() // wait for use(promise)
      );
    });
    it("has correct styles when classURI finds a match", () => {
      expect(qs('[data-name="Cowes Library"]')?.childNodes[0]).toHaveAttribute(
        "style",
        CSS.MATCH_ICON_STYLE
      );
    });
    it("has correct styles when classURI does not find a match and uses stub styles", () => {
      expect(
        qs('[data-name="Cowes Bandstand"]')?.childNodes[0]
      ).toHaveAttribute("style", CSS.NO_ICON_STYLE);
    });
    test("renders marker without icons when ontology styles are not matched", () => {
      expect(screen.queryByText("Ban")).toBeVisible();
      expect(qs('[data-name="Cowes Bandstand"] [data-icon]')).not.toBeTruthy();
      expect(
        qs('[data-name="Cowes Bandstand"]')?.childNodes[0].firstChild
      ).toHaveClass("p-1 font-body"); // non-icon class
    });
    test("renders marker WITH icons when ontology styles are not matched", () => {
      expect(screen.queryByText("Lib")).toBeFalsy();
      expect(qs('[data-name="Cowes Library"] [data-icon]')).toBeTruthy();
      expect(
        qs('[data-name="Cowes Library"]')?.childNodes[0].firstChild
      ).toHaveClass("fa-regular fa-books");
    });
  });
});
