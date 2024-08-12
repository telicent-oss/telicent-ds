import { render } from "@testing-library/react";
import { FlexGrid, FlexGridItem } from "../FlexGrid";

test("FlexGrid component renders without error", () => {
  expect(render(<FlexGrid />)).not.toBeNull();
});

test("FlexGridItem component renders without error", () => {
  expect(render(<FlexGridItem />)).not.toBeNull();
});
