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
        .emotion-0 {
          position: fixed;
          z-index: 1300;
          right: 0;
          bottom: 0;
          top: 0;
          left: 0;
        }

        .emotion-1 {
          position: fixed;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          right: 0;
          bottom: 0;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          -webkit-tap-highlight-color: transparent;
          z-index: -1;
        }

        .emotion-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 16px;
          border-radius: 4px;
          box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
          min-width: 300px;
          max-width: 90vw;
          max-height: 90vh;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        .emotion-3 {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          -webkit-justify-content: flex-end;
          justify-content: flex-end;
        }

        .emotion-4 {
          display: -webkit-inline-box;
          display: -webkit-inline-flex;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          background-color: transparent;
          outline: 0;
          border: 0;
          margin: 0;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          vertical-align: middle;
          -moz-appearance: none;
          -webkit-appearance: none;
          -webkit-text-decoration: none;
          text-decoration: none;
          color: inherit;
          font-family: "Roboto","Helvetica","Arial",sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.75;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          min-width: 64px;
          padding: 6px 8px;
          border-radius: 4px;
          -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          color: inherit;
          border-color: currentColor;
          font-size: 18px;
        }

        .emotion-4::-moz-focus-inner {
          border-style: none;
        }

        .emotion-4.Mui-disabled {
          pointer-events: none;
          cursor: default;
        }

        @media print {
          .emotion-4 {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        }

        .emotion-4:hover {
          -webkit-text-decoration: none;
          text-decoration: none;
          background-color: rgba(0, 0, 0, 0.04);
        }

        @media (hover: none) {
          .emotion-4:hover {
            background-color: transparent;
          }
        }

        .emotion-4.Mui-disabled {
          color: rgba(0, 0, 0, 0.26);
        }

        .emotion-5 {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 1em;
          height: 1em;
          display: inline-block;
          -webkit-flex-shrink: 0;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          font-size: 1.5rem;
          font-size: 14px;
        }

        .emotion-6 {
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: 0;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: inherit;
        }

        <body
          style="padding-right: 1024px; overflow: hidden;"
        >
          <div
            aria-hidden="true"
          />
          <div
            class="MuiModal-root emotion-0"
            role="presentation"
          >
            <div
              aria-hidden="true"
              class="MuiBackdrop-root MuiModal-backdrop emotion-1"
              style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
            />
            <div
              data-testid="sentinelStart"
              tabindex="0"
            />
            <div
              class="MuiBox-root emotion-2"
              tabindex="-1"
            >
              <div
                class="MuiBox-root emotion-3"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit emotion-4"
                  tabindex="0"
                  type="button"
                >
                  Close 
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium emotion-5"
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
                    class="MuiTouchRipple-root emotion-6"
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
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onCloseMock).toHaveBeenCalledWith(
      expect.anything(),
      "closeButtonClick"
    );
    expect(onCloseMock.mock.calls[0][1]).toMatchInlineSnapshot(
      `"closeButtonClick"`
    );
  });
});
