import { render } from "@testing-library/react";
import PlayIcon from "../PlayIcon";

test("Play icon component renders without error", () => {
  expect(render(<PlayIcon />)).not.toBeNull();
});
