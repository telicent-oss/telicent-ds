import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";
import { H1, H2, H3, H4, H5, H6 } from "./Text";

describe("Text Component", () => {
  it("renders correctly with default props", () => {
    const { asFragment } = render(<Text />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
      }

      <p
          class="MuiTypography-root MuiTypography-body1 emotion-0"
        />
      </DocumentFragment>
    `);
  });

  it("applies noWrap and color props", () => {
    const { asFragment } = render(
      <Text noWrap={true} color="primary">
        Sample Text
      </Text>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #1976d2;
      }

      <p
          class="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap emotion-0"
        >
          Sample Text
        </p>
      </DocumentFragment>
    `);
  });
});

describe("Heading Components", () => {
  it(`renders variants correctly`, () => {
    const headings = [
      { Component: H1, variant: "h1" },
      { Component: H2, variant: "h2" },
      { Component: H3, variant: "h3" },
      { Component: H4, variant: "h4" },
      { Component: H5, variant: "h5" },
      { Component: H6, variant: "h6" },
    ];
    const result = headings.map(({ Component, variant }) => {
      const { asFragment } = render(<Component>{`${variant} Text`}</Component>);
      return asFragment();
    });
    expect(result).toMatchInlineSnapshot(`
      [
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 300;
        font-size: 6rem;
        line-height: 1.167;
        letter-spacing: -0.01562em;
      }

      <h1
            class="MuiTypography-root MuiTypography-h1 emotion-0"
          >
            h1 Text
          </h1>
        </DocumentFragment>,
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 300;
        font-size: 3.75rem;
        line-height: 1.2;
        letter-spacing: -0.00833em;
      }

      <h2
            class="MuiTypography-root MuiTypography-h2 emotion-0"
          >
            h2 Text
          </h2>
        </DocumentFragment>,
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 3rem;
        line-height: 1.167;
        letter-spacing: 0em;
      }

      <h3
            class="MuiTypography-root MuiTypography-h3 emotion-0"
          >
            h3 Text
          </h3>
        </DocumentFragment>,
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 2.125rem;
        line-height: 1.235;
        letter-spacing: 0.00735em;
      }

      <h4
            class="MuiTypography-root MuiTypography-h4 emotion-0"
          >
            h4 Text
          </h4>
        </DocumentFragment>,
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.334;
        letter-spacing: 0em;
      }

      <h5
            class="MuiTypography-root MuiTypography-h5 emotion-0"
          >
            h5 Text
          </h5>
        </DocumentFragment>,
        <DocumentFragment>
          .emotion-0 {
        margin: 0;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6;
        letter-spacing: 0.0075em;
      }

      <h6
            class="MuiTypography-root MuiTypography-h6 emotion-0"
          >
            h6 Text
          </h6>
        </DocumentFragment>,
      ]
    `);
  });
});
