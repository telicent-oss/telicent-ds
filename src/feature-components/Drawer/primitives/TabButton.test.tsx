import { render } from "@testing-library/react";
import { TabButton } from "./TabButton";
import { cleanDiff } from "../../../candidate-packages/clean-diff";

describe("renders", () => {
  let base: DocumentFragment;
  it("base", () => {
    base = render(
      <TabButton id="base-id" BoxSx={{}} onClick={jest.fn()}>
        min props
      </TabButton>
    ).asFragment();
    expect(base).toMatchInlineSnapshot(`
      <DocumentFragment>
        .emotion-0 {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        height: 100%;
        max-height: 185px;
        width: 34px;
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
        overflow: visible;
        pointer-events: auto;
      }

      .emotion-1 {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: none!important;
        height: 100%;
        width: 100%;
        border: none;
        border-radius: 8!important;
        border-top-left-radius: 0!important;
        border-bottom-left-radius: 0!important;
      }

      .emotion-2 {
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
        color: inherit;
        height: 100%;
        width: 100%;
        padding: 0px;
      }

      .emotion-2::-moz-focus-inner {
        border-style: none;
      }

      .emotion-2.Mui-disabled {
        pointer-events: none;
        cursor: default;
      }

      @media print {
        .emotion-2 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }

      .emotion-2.Mui-disabled {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.26);
      }

      .emotion-2:hover {
        background-color: transparent;
      }

      <div
          class="MuiBox-root emotion-0"
          id="base-id"
        >
          <div
            class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded emotion-1"
            id="base-id-Paper"
          >
            <button
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium emotion-2"
              id="base-id-IconButton"
              tabindex="0"
              type="button"
            >
              min props
            </button>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  it("withProps", () => {
    const withProps = render(
      <TabButton
        id="with-props-id"
        BoxSx={{ color: "custom-color" }}
        onClick={jest.fn()}
      >
        with props
      </TabButton>
    ).asFragment();

    expect(cleanDiff(base, withProps)).toMatchInlineSnapshot(`
      "- 
      + 

      @@ --- --- @@
      -     class="MuiBox-root css-1rzfe0l"
      -     id="base-id"
      +     class="MuiBox-root css-1qo6mm6"
      +     id="with-props-id"
      @@ --- --- @@
      -       id="base-id-Paper"
      +       id="with-props-id-Paper"
      @@ --- --- @@
      -         id="base-id-IconButton"
      +         id="with-props-id-IconButton"
      @@ --- --- @@
      -         min props
      +         with props"
    `);
  });
});
