import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Modal, ModalProps } from "./Modal";

describe("Modal Component", () => {
  const MODAL_CONTENT = "Modal Content";
  let props: ModalProps;
  let onCloseMock: jest.Mock;

  beforeEach(() => {
    onCloseMock = jest.fn();
    props = {
      open: true,
      onClose: onCloseMock,
      children: <div>{MODAL_CONTENT}</div>,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly when open", async () => {
    const { baseElement } = render(<Modal {...props} />);
    const content = await screen.findByText(MODAL_CONTENT);
    expect(content).toBeInTheDocument();
    await waitFor(() => {
      expect(baseElement).toMatchInlineSnapshot(`
        <body
          style="padding-right: 1024px; overflow: hidden;"
        >
          <div
            aria-hidden="true"
          />
          <div
            class="MuiModal-root css-79ws1d-MuiModal-root"
            role="presentation"
          >
            <div
              aria-hidden="true"
              class="MuiBackdrop-root MuiModal-backdrop css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop"
              style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
            />
            <div
              data-testid="sentinelStart"
              tabindex="0"
            />
            <div
              class="MuiBox-root css-za9qpw"
              tabindex="-1"
            >
              <div
                class="MuiBox-root css-1bvc4cc"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-lzr00z-MuiButtonBase-root-MuiButton-root"
                  tabindex="0"
                  type="button"
                >
                  Close 
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-xbvwe0-MuiSvgIcon-root"
                    fill="none"
                    focusable="false"
                    viewBox="0 0 12 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9997 1.84102L10.8247 0.666016L6.16634 5.32435L1.50801 0.666016L0.333008 1.84102L4.99134 6.49935L0.333008 11.1577L1.50801 12.3327L6.16634 7.67435L10.8247 12.3327L11.9997 11.1577L7.34134 6.49935L11.9997 1.84102Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                  />
                </button>
              </div>
              <div>
                Modal Content
              </div>
            </div>
            <div
              data-testid="sentinelEnd"
              tabindex="0"
            />
          </div>
        </body>
      `);
    });
  });

  test("does not render when closed", async () => {
    const { baseElement } = render(<Modal {...props} open={false} />);

    await waitFor(() => {
      expect(baseElement).toMatchInlineSnapshot(`
        <body
          style=""
        >
          <div />
        </body>
      `);
    });
  });

  test('calls onClose with "closeButtonClick" when Close button is clicked', () => {
    render(<Modal {...props} />);
    fireEvent.click(screen.getByRole("button", { name: /Close/i }));
    expect(onCloseMock).toHaveBeenCalledWith(
      expect.anything(),
      "closeButtonClick"
    );
    expect(onCloseMock.mock.calls[0][1]).toMatchInlineSnapshot(
      `"closeButtonClick"`
    );
  });
});
