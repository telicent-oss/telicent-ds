import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { screen } from "@testing-library/react";
import OntologyHierarchyDisplay from "./OntologyHierarchyDisplay";
import { setup } from "../../test-utils";
describe("OntologyHierarchy", () => {
  test("svg, tooltip and static elements exist", () => {
    setup(<OntologyHierarchyDisplay instanceId="cMTestInstance" />);
    const instanceId = "cMTestInstance";
    expect(screen.getByTestId(`svg_${instanceId}`)).toBeDefined();
  });

  test("renders tree group", () => {
    setup(<OntologyHierarchyDisplay instanceId="cMTestInstance"  />);
    const testId = "treeGroupTestId0"
    if(screen.queryByTestId(testId)){
      expect(screen.getByTestId(testId).childNodes[0])
        .toHaveClass("expandHorizontalLine");

      expect(screen.getByTestId(testId).childNodes[1])
        .toHaveClass("expandVerticalLine");

      expect(screen.getByTestId(testId).childNodes[2])
        .toHaveClass("expandCircle");

      expect(screen.getByTestId(testId).childNodes[3])
        .toHaveClass("expandCircleIcon fa-solid");

      expect(screen.getByTestId(testId).childNodes[4])
        .toHaveClass("dragObject");

      expect(screen.getByTestId(testId).childNodes[4].childNodes[0])
          .toHaveClass("dragDiv");

      expect(screen.getByTestId(testId).childNodes[4].childNodes[0].childNodes[0])
          .toHaveClass("dragSvg");

      expect(screen.getByTestId(testId).childNodes[4].childNodes[0].childNodes[0].childNodes[0])
          .toHaveClass("expandLabel");

      expect(screen.getByTestId(testId).childNodes[4].childNodes[0].childNodes[0].childNodes[1])
          .toHaveClass("expandLabelIcon");
    }
  });

});
