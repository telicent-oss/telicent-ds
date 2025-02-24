import React from "react";
import { screen, waitFor } from "@testing-library/dom";
import Map from "react-map-gl/maplibre";

import { } from "../../../test-utils"
import ResultsMarkers from "../ResultsMarkers";

describe("Result Markers component", () => {
  // window.URL.createObjectURL = jest.fn();

  describe("renders correctly", () => {
    let container: HTMLElement;
    let qs: typeof container.querySelector;
    beforeEach(async () => {
      // beforeAll has side effects that cause N+1 test cases to fail
      const { container } = render(<Map><ResultsMarkers setViewportToBounds={jest.fn()} /></Map>)
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
