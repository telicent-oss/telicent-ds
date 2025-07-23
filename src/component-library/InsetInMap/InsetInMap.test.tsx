import React from "react";
import { render } from "@testing-library/react";
import { InsetInMap } from "./InsetInMap";
import { workspace } from "./components/components";

// AI, lacks human touch

const { Background, Content, ControlArea } = workspace;

describe("InsetInMap", () => {
  let ui: ReturnType<typeof render>;

  beforeEach(() => {
    ui = render(
      <InsetInMap
        data-testid="root"
        sx={{ width: 321, height: 123 }}
        content={<div data-testid="content">map</div>}
        controlArea={{
          topLeft: <div data-testid="topLeft">TL</div>,
          top: <div data-testid="top">T</div>,
          topRight: <div data-testid="topRight">TR</div>,
          right: <div data-testid="right">R</div>,
          bottomRight: <div data-testid="bottomRight">BR</div>,
          bottom: <div data-testid="bottom">B</div>,
          bottomLeft: <div data-testid="bottomLeft">BL</div>,
          left: <div data-testid="left">L</div>,
          center: <div data-testid="center">C</div>,
        }}
      />
    );
  });

  afterEach(() => ui.unmount());

  test("renders content and all control areas", () => {
    expect(ui.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        .emotion-0 {
        position: relative;
        width: 321px;
        height: 123px;
      }

      .emotion-1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
      }

      .emotion-2 {
        position: absolute;
        left: 0;
        top: 0;
      }

      .emotion-3 {
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .emotion-4 {
        position: absolute;
        right: 0;
        top: 0;
      }

      .emotion-5 {
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .emotion-6 {
        position: absolute;
        right: 0;
        bottom: 0;
      }

      .emotion-7 {
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .emotion-8 {
        position: absolute;
        left: 0;
        bottom: 0;
      }

      .emotion-9 {
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      .emotion-10 {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      <div
          class="MuiBox-root emotion-0"
          data-testid="root"
        >
          <div
            class="MuiBox-root emotion-1"
          >
            <div
              data-testid="content"
            >
              map
            </div>
          </div>
          <div
            class="MuiBox-root emotion-2"
          >
            <div
              data-testid="topLeft"
            >
              TL
            </div>
          </div>
          <div
            class="MuiBox-root emotion-3"
          >
            <div
              data-testid="top"
            >
              T
            </div>
          </div>
          <div
            class="MuiBox-root emotion-4"
          >
            <div
              data-testid="topRight"
            >
              TR
            </div>
          </div>
          <div
            class="MuiBox-root emotion-5"
          >
            <div
              data-testid="right"
            >
              R
            </div>
          </div>
          <div
            class="MuiBox-root emotion-6"
          >
            <div
              data-testid="bottomRight"
            >
              BR
            </div>
          </div>
          <div
            class="MuiBox-root emotion-7"
          >
            <div
              data-testid="bottom"
            >
              B
            </div>
          </div>
          <div
            class="MuiBox-root emotion-8"
          >
            <div
              data-testid="bottomLeft"
            >
              BL
            </div>
          </div>
          <div
            class="MuiBox-root emotion-9"
          >
            <div
              data-testid="left"
            >
              L
            </div>
          </div>
          <div
            class="MuiBox-root emotion-10"
          >
            <div
              data-testid="center"
            >
              C
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});

describe("workspace components", () => {
  test("Background/Content/ControlArea styles and children", () => {
    const tree = render(
      <Background data-testid="background" sx={{ width: 10, height: 20 }}>
        <Content data-testid="content-box">
          <span data-testid="inner">x</span>
        </Content>
        <ControlArea data-testid="control-area-center" position="center">
          <span data-testid="control-child">y</span>
        </ControlArea>
      </Background>
    ).asFragment();

    expect(tree).toMatchInlineSnapshot(`
      <DocumentFragment>
        .emotion-0 {
        position: relative;
        width: 10px;
        height: 20px;
      }

      .emotion-1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
      }

      .emotion-2 {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      <div
          class="MuiBox-root emotion-0"
          data-testid="background"
        >
          <div
            class="MuiBox-root emotion-1"
            data-testid="content-box"
          >
            <span
              data-testid="inner"
            >
              x
            </span>
          </div>
          <div
            class="MuiBox-root emotion-2"
            data-testid="control-area-center"
          >
            <span
              data-testid="control-child"
            >
              y
            </span>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
