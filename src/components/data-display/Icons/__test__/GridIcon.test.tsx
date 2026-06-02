import { render } from "@testing-library/react";
import GridIcon from "../GridIcon";

test("Grid icon component renders without error", () => {
  expect(render(<GridIcon />)).not.toBeNull();
});
