import { render } from "@testing-library/react";
import Text, { H1, H2, H3, H4, H5, H6 } from "../Text";

test("Text component renders without error", () => {
  expect(render(<Text />)).not.toBeNull();
});

test("Heading 1 component renders without error", () => {
  expect(render(<H1 />)).not.toBeNull();
});

test("Heading 2 component renders without error", () => {
  expect(render(<H2 />)).not.toBeNull();
});

test("Heading 3 component renders without error", () => {
  expect(render(<H3 />)).not.toBeNull();
});

test("Heading 4 component renders without error", () => {
  expect(render(<H4 />)).not.toBeNull();
});

test("Heading 5 component renders without error", () => {
  expect(render(<H5 />)).not.toBeNull();
});

test("Heading 6 component renders without error", () => {
  expect(render(<H6 />)).not.toBeNull();
});
