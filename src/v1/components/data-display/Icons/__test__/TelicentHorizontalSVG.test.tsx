import { render } from "@testing-library/react";
import TelicentHorizontalSVG from "../TelicentHorizontalSVG";

test("Grid icon component renders without error", () => {
  expect(render(<TelicentHorizontalSVG />)).not.toBeNull();
});
