import { render } from "@testing-library/react";
import { List, ListItem, ListItemButton, ListItemIcon } from "../List";

test("List component renders without error", () => {
  expect(render(<List />)).not.toBeNull();
});

test("ListItem component renders without error", () => {
  expect(render(<ListItem />)).not.toBeNull();
});

test("ListItemButton component renders without error", () => {
  expect(render(<ListItemButton />)).not.toBeNull();
});

test("ListItemIcon component renders without error", () => {
  expect(render(<ListItemIcon />)).not.toBeNull();
});
