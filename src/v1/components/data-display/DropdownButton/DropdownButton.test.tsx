import { render, screen } from "@testing-library/react";
import React from "react";
import { faMinusSquare, faCircle } from "@fortawesome/free-regular-svg-icons";
import DropdownButton from "./DropdownButton";
import { TestCatalogIcon, TestGraphIcon } from "./assets/TestIcons";
import { setup } from "../../../../test-utils";

describe("DropdownButton", () => {
  test("should render with font awesome icons", () => {
    const LAYOUT_OPTIONS = [
      {
        value: "option1",
        faIcon: faMinusSquare,
        label: "option1-label",
      },
      {
        value: "option2",
        faIcon: faCircle,
        label: "option2-label",
        default: true,
      },
    ];

    const LAYOUTS = LAYOUT_OPTIONS.map((layout) => ({
      id: layout.value,
      faIcon: layout.faIcon,
      value: layout.label,
      default: Boolean(layout?.default),
      onClick: jest.fn(),
      selected: false,
    }));

    const { container } = render(
      <DropdownButton
        id="button-example"
        ariaLabel="select-menu"
        menuItems={LAYOUTS}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .emotion-1 {
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
        text-align: center;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        font-size: 1.5rem;
        padding: 8px;
        border-radius: 50%;
        overflow: visible;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: #1976d2;
        border: 0px solid;
      }

      .emotion-1::-moz-focus-inner {
        border-style: none;
      }

      .emotion-1.Mui-disabled {
        pointer-events: none;
        cursor: default;
      }

      @media print {
        .emotion-1 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }

      .emotion-1:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }

      @media (hover: none) {
        .emotion-1:hover {
          background-color: transparent;
        }
      }

      .emotion-1:hover {
        background-color: rgba(25, 118, 210, 0.04);
      }

      @media (hover: none) {
        .emotion-1:hover {
          background-color: transparent;
        }
      }

      .emotion-1.Mui-disabled {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.26);
      }

      .emotion-1:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }

      .emotion-2 {
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

      <div>
        <div
          class="MuiStack-root emotion-0"
        >
          <button
            aria-haspopup="true"
            aria-label="select-menu"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium emotion-1"
            tabindex="0"
            type="button"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-circle mr-2"
              color="#1976d2"
              data-icon="circle"
              data-prefix="far"
              focusable="false"
              font-size="medium"
              role="img"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                fill="currentColor"
              />
            </svg>
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angle-down fa-sm "
              css="[object Object]"
              data-icon="angle-down"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                fill="currentColor"
              />
            </svg>
            <span
              class="MuiTouchRipple-root emotion-2"
            />
          </button>
        </div>
      </div>
    `);
  });

  test("should render with custom svgs", () => {
    const LAYOUT_OPTIONS = [
      {
        value: "option1",
        icon: TestGraphIcon,
        label: "option1-label",
      },
      {
        value: "option2",
        icon: TestCatalogIcon,
        label: "option2-label",
        default: true,
      },
    ];

    const LAYOUTS = LAYOUT_OPTIONS.map((layout) => ({
      id: layout.value,
      icon: layout.icon,
      value: layout.label,
      default: Boolean(layout?.default),
      onClick: jest.fn(),
      selected: false,
    }));

    const { container } = render(
      <DropdownButton
        id="button-example"
        ariaLabel="select-menu"
        menuItems={LAYOUTS}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .emotion-1 {
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
        text-align: center;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        font-size: 1.5rem;
        padding: 8px;
        border-radius: 50%;
        overflow: visible;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: #1976d2;
        border: 0px solid;
      }

      .emotion-1::-moz-focus-inner {
        border-style: none;
      }

      .emotion-1.Mui-disabled {
        pointer-events: none;
        cursor: default;
      }

      @media print {
        .emotion-1 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }

      .emotion-1:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }

      @media (hover: none) {
        .emotion-1:hover {
          background-color: transparent;
        }
      }

      .emotion-1:hover {
        background-color: rgba(25, 118, 210, 0.04);
      }

      @media (hover: none) {
        .emotion-1:hover {
          background-color: transparent;
        }
      }

      .emotion-1.Mui-disabled {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.26);
      }

      .emotion-1:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }

      .emotion-2 {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }

      .emotion-3 {
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

      <div>
        <div
          class="MuiStack-root emotion-0"
        >
          <button
            aria-haspopup="true"
            aria-label="select-menu"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium emotion-1"
            tabindex="0"
            type="button"
          >
            <svg
              aria-hidden="true"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium emotion-2"
              focusable="false"
              id="CatalogIcon"
              viewBox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M6.32814 7.8885C5.69625 7.35147 5.48633 6.83329 5.48633 6.45557C5.48633 5.94766 5.8659 5.18579 7.14055 4.46562C8.3695 3.77128 10.168 3.29443 12.2363 3.29443C14.3046 3.29443 16.1032 3.77128 17.3321 4.46562C18.6068 5.18579 18.9863 5.94766 18.9863 6.45557C18.9863 6.83329 18.7764 7.35148 18.1445 7.88851C18.1136 7.91479 18.0816 7.94113 18.0487 7.96749C17.8494 8.12675 17.6124 8.28714 17.3321 8.44551C16.1032 9.13985 14.3046 9.6167 12.2363 9.6167C10.9059 9.6167 9.68702 9.41938 8.65961 9.09378C8.08985 8.91322 7.57896 8.6932 7.14055 8.44551C6.86024 8.28714 6.62322 8.12675 6.424 7.96749C6.39102 7.94112 6.35908 7.91479 6.32814 7.8885ZM17.4863 10.0513C16.06 10.7168 14.2309 11.1167 12.2363 11.1167C10.2418 11.1167 8.41265 10.7168 6.98633 10.0513C6.7834 9.9566 6.58863 9.85654 6.4027 9.75149C6.35167 9.72266 6.30133 9.69346 6.25168 9.66392C5.97403 9.49866 5.71821 9.32223 5.48633 9.13621V17.4556C5.48633 18.0585 5.89504 18.7483 6.84521 19.3636C6.98095 19.4515 7.12774 19.5378 7.28597 19.6222C7.43953 19.7041 7.60123 19.7825 7.77048 19.8569C8.95521 20.3778 10.51 20.7056 12.2363 20.7056C14.2093 20.7056 15.9582 20.2774 17.1867 19.6222C18.4525 18.9471 18.9863 18.1447 18.9863 17.4556V9.13628C18.7508 9.32526 18.491 9.50384 18.2095 9.67071C18.1636 9.69794 18.1171 9.72487 18.07 9.75149C17.884 9.85654 17.6893 9.9566 17.4863 10.0513ZM19.7605 4.54099C20.1302 5.00405 20.3699 5.50737 20.4534 6.03609C20.4752 6.17427 20.4863 6.31418 20.4863 6.45557V17.4556C20.4863 17.5913 20.4772 17.7245 20.4595 17.8551C20.2802 19.1784 19.2229 20.2363 17.8926 20.9458C16.4067 21.7382 14.4056 22.2056 12.2363 22.2056C10.067 22.2056 8.06594 21.7382 6.58009 20.9458C5.11847 20.1662 3.98633 18.9662 3.98633 17.4556V6.45557C3.98633 6.31418 3.99747 6.17427 4.01928 6.03609C4.10252 5.50929 4.34125 5.00571 4.71219 4.54099C5.12549 4.02333 5.70123 3.55597 6.4027 3.15965C7.89554 2.31621 9.958 1.79443 12.2363 1.79443C14.5147 1.79443 16.5771 2.31621 18.07 3.15965C18.7714 3.55597 19.3472 4.02333 19.7605 4.54099Z"
                fill="#2F44CA"
                fill-rule="evenodd"
              />
            </svg>
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angle-down fa-sm "
              css="[object Object]"
              data-icon="angle-down"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                fill="currentColor"
              />
            </svg>
            <span
              class="MuiTouchRipple-root emotion-3"
            />
          </button>
        </div>
      </div>
    `);
  });

  test("should change the main icon to be the 'selected' icon", async () => {
    const LAYOUT_OPTIONS = [
      {
        value: "option1",
        icon: TestGraphIcon,
        label: "option1-label",
      },
      {
        value: "option2",
        icon: TestCatalogIcon,
        label: "option2-label",
        default: true,
      },
    ];

    const LAYOUTS = LAYOUT_OPTIONS.map((layout) => ({
      id: layout.value,
      icon: layout.icon,
      value: layout.label,
      default: Boolean(layout?.default),
      onClick: jest.fn(),
      selected: false,
    }));

    const { user, container } = setup(
      <DropdownButton
        id="button-example"
        ariaLabel="select-menu"
        menuItems={LAYOUTS}
      />
    );

    const catalogButton = screen.getByTestId("CatalogIcon");
    expect(catalogButton).toBeInTheDocument();

    await user.click(catalogButton);

    await user.click(screen.getByTestId("GraphIcon"));

    expect(screen.queryByTestId("CatalogIcon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("GraphIcon")).toBeInTheDocument();
  });
});
