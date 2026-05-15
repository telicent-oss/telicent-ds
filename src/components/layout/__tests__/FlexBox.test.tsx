import { render } from "@testing-library/react";
import FlexBox from "../FlexBox";

test("FlexBox component renders without error", () => {
  expect(render(<FlexBox />)).not.toBeNull();
});
