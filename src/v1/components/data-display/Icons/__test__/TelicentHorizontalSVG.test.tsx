import { render } from "@testing-library/react";
import TelicentHorizontalSVG from "../TelicentHorizontalSVG";

test("Telicent horizontal SVG component renders without error", () => {
  expect(render(<TelicentHorizontalSVG />)).not.toBeNull();
});
