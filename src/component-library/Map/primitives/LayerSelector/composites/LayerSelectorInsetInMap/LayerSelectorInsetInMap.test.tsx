import React from "react";
import { render, fireEvent } from "@testing-library/react";
import snapshotDiff from "snapshot-diff";
import {
  PresentationalButton,
  LayerSelectorInsetInMap,
} from "./LayerSelectorInsetInMap";
import type { PresentationalProps } from "../../primitives/LayerSelectorPresentational";

jest.mock("../../../../../../export", () => ({
  __esModule: true,
  Button: (p: any) => <button {...p} />,
  useExtendedTheme: () => ({ palette: { primary: { main: "#111" } } }),
}));

jest.mock("../../../MapCanvas/MapCanvasProvider", () => {
  const ctx = { styleSelector: { props: { data: [], onChange: jest.fn() } } };
  return {
    __esModule: true,
    useMapCanvasContext: jest.fn(() => ctx),
    __setCtx: (p: any) => (ctx.styleSelector.props = p),
  };
});

jest.mock("../../primitives/useLayerSelector", () => {
  const handlers = {
    onClickDropdown: jest.fn(),
    onCloseDropdown: jest.fn(),
    onListItemClick: jest.fn(),
  };
  return {
    __esModule: true,
    useLayerSelector: jest.fn((opts: any) => ({
      data: opts.data,
      selectedIndex: 0,
      anchorEl: null,
      ...handlers,
    })),
    __handlers: handlers,
  };
});

jest.mock("../../primitives/LayerSelectorPresentational", () => {
  const Btn = (p: PresentationalProps) => (
    <button data-testid="presentational-btn" onClick={p.onClickDropdown}>
      {p.data[p.selectedIndex].label}
    </button>
  );
  const Pop = () => null;
  return {
    __esModule: true,
    LayerSelectorPresentationalButton: Btn,
    LayerSelectorPresentationalPopOver: Pop,
  };
});

const { __setCtx } = require("../../../MapCanvas/MapCanvasProvider");
const { __handlers } = require("../../primitives/useLayerSelector");

describe("PresentationalButton snapshotdiff", () => {
  const base: PresentationalProps = {
    data: [
      { label: "L1", image: "i1", uri: "u1" },
      { label: "L2", image: "i2", uri: "u2" },
    ],
    selectedIndex: 0,
    anchorEl: null,
    onClickDropdown: jest.fn(),
    onCloseDropdown: jest.fn(),
    onListItemClick: jest.fn(),
    sx: undefined,
    color: undefined,
    variant: undefined,
    size: undefined,
  };

  test("base vs with props", () => {
    const fragA = render(<PresentationalButton {...base} />).asFragment();
    const fragB = render(
      <PresentationalButton
        {...base}
        selectedIndex={1}
        anchorEl={{} as any}
        color="primary"
        variant="contained"
        sx={{ m: 1 }}
      />
    ).asFragment();

    expect(snapshotDiff(fragA, fragB)).toMatchInlineSnapshot(`
      "Snapshot Diff:
      - First value
      + Second value

      @@ -4,39 +4,42 @@
          >
            <div
              class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1ps6pg7-MuiPaper-root"
            >
              <button
      +         aria-describedby="layer-selector-popover"
      +         color="primary"
                id="layer-selector"
                sx="[object Object]"
      +         variant="contained"
              >
                <div
                  class="MuiBox-root css-1f388k3"
                >
                  <img
      -             alt="L1"
      -             src="i1"
      +             alt="L2"
      +             src="i2"
                    style="width: 25px; height: 20px;"
      -             title="L1"
      +             title="L2"
                  />
                </div>
                 
                <span
                  class="MuiBox-root css-7i6r7n"
                >
                  <svg
                    aria-hidden="true"
      -             class="svg-inline--fa fa-angle-down "
      -             data-icon="angle-down"
      +             class="svg-inline--fa fa-angle-up "
      +             data-icon="angle-up"
                    data-prefix="fas"
                    focusable="false"
                    role="img"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
      -               d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
      +               d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>"
    `);
  });
});

/**
 * TODO fix test
 * WHEN https://telicent.atlassian.net/browse/TELFE-1252
 */
describe.skip("LayerSelectorInsetInMap wiring", () => {
  beforeEach(() =>
    (Object.values(__handlers) as jest.Mock[]).forEach((f) => f.mockClear())
  );

  test("returns null when <=1 item", () => {
    __setCtx({
      data: [{ label: "only", image: "image", uri: "uri" }],
      onChange: jest.fn(),
    });
    const r = render(<LayerSelectorInsetInMap />);
    expect(r.container.firstChild).toBeNull();
  });

  test("renders and clicks call hook handlers", () => {
    __setCtx({
      data: [
        { label: "A", image: "image-a", uri: "uri-a" },
        { label: "B", image: "image-b", uri: "uri-b" },
      ],
      onChange: jest.fn(),
    });

    const r = render(<LayerSelectorInsetInMap />);
    expect(r.asFragment()).toMatchInlineSnapshot();

    fireEvent.click(r.getByTestId("presentational-btn"));
    expect(__handlers.onClickDropdown).toHaveBeenCalledTimes(1);
  });
});
