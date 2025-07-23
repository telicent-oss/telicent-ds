// DrawerPresentational.test.tsx
import React from "react";
import { render, waitFor } from "@testing-library/react";
import {
  DrawerPresentational,
  DrawerPresentationalProps,
  NAME,
  resolveWidth
} from "./DrawerPresentational";


// configure({ testIdAttribute: "id" });

// jest.mock("@mui/icons-material/ChevronLeft", () => ({
//   __esModule: true,
//   default: (props: any) => <span id="chevron-left-icon" {...props} />,
// }));
// jest.mock("@mui/icons-material/ChevronRight", () => ({
//   __esModule: true,
//   default: (props: any) => <span id="chevron-right-icon" {...props} />,
// }));
// jest.mock("./TabButton", () => ({
//   __esModule: true,
//   TabButton: (props: any) => <span id={props["id"]} />,
// }));

const defaultProps: Partial<DrawerPresentationalProps> = {
  onToggle: jest.fn(),
  children: <div id="child" />,
  id: "foo",
};

type RenderDrawerProps = Partial<
  Omit<DrawerPresentationalProps, "children">
> & { children: React.ReactNode };

const renderDrawer = (props: RenderDrawerProps) =>
  render(<DrawerPresentational {...defaultProps} {...props} />);

describe("DrawerPresentational – prop placement", () => {
  it("forwards id to wrapper", async () => {
    const { getByTestId } = renderDrawer({ open: false, children: "" });
    await waitFor(() => expect(getByTestId("foo")).toBeInTheDocument());
  });

  it("renders MuiDrawer with its id", () => {
    const { getByTestId } = renderDrawer({ open: true, children: "" });
    expect(getByTestId(`${NAME}--drawer`)).toBeInTheDocument();
  });

  it("applies custom PaperProps correctly", () => {
    const { getByTestId } = renderDrawer({
      open: true,
      PaperProps: { id: "custom-paper", "aria-label": "drawer-paper" },
      children: "",
    });
    const paper = getByTestId(`custom-paper`);
    expect(paper).toHaveAttribute("aria-label", "drawer-paper");
  });

  it("renders scrollable content container", () => {
    const { getByTestId } = renderDrawer({ open: true, children: "" });
    expect(getByTestId(`${NAME}--box-scrollable`)).toBeInTheDocument();
  });

  it("renders both toggle buttons when open", () => {
    const { getByTestId } = renderDrawer({ open: true, children: "" });
    expect(getByTestId(`${NAME}--toggle-stand-in`)).toBeInTheDocument();
    expect(getByTestId(`${NAME}--toggle-animated-slide`)).toBeInTheDocument();
  });

  it("renders only animated toggle when closed", () => {
    const { queryByTestId, getByTestId } = renderDrawer({
      open: false,
      children: "",
    });
    expect(queryByTestId(`${NAME}--toggle-stand-in`)).toBeNull();
    expect(getByTestId(`${NAME}--toggle-animated-slide`)).toBeInTheDocument();
  });
});

describe("resolveWidth", () => {
  it.each`
    drawerWidth  | styleWidth    | defaultWidth | expected
    ${300}       | ${"999"}      | ${800}       | ${300}
    ${0}         | ${"123"}      | ${800}       | ${0}
    ${undefined} | ${420}        | ${800}       | ${420}
    ${undefined} | ${"12px"}     | ${800}       | ${12}
    ${undefined} | ${"50%"}      | ${800}       | ${50}
    ${undefined} | ${"auto"}     | ${800}       | ${800}
    ${undefined} | ${undefined}  | ${800}       | ${800}
    ${undefined} | ${NaN}        | ${800}       | ${800}
    ${undefined} | ${"Infinity"} | ${800}       | ${800}
    ${undefined} | ${"auto"}     | ${900}       | ${900}
  `(
    "returns $expected for drawerWidth=$drawerWidth, styleWidth=$styleWidth, defaultWidth=$defaultWidth",
    ({ drawerWidth, styleWidth, defaultWidth, expected }) => {
      expect(
        resolveWidth(drawerWidth as any, styleWidth as any, defaultWidth)
      ).toBe(expected);
    }
  );
});
