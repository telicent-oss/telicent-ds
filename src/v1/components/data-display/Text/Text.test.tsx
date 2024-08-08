import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";
import { H1, H2, H3, H4, H5, H6 } from "./Text";

describe("Text Component", () => {
  it("renders correctly with default props", () => {
    const { asFragment } = render(<Text />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
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
        <p
          class="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-pi8gz9-MuiTypography-root"
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
      Array [
        <DocumentFragment>
          <h1
            class="MuiTypography-root MuiTypography-h1 css-o2w69a-MuiTypography-root"
          >
            h1 Text
          </h1>
        </DocumentFragment>,
        <DocumentFragment>
          <h2
            class="MuiTypography-root MuiTypography-h2 css-1sra7t5-MuiTypography-root"
          >
            h2 Text
          </h2>
        </DocumentFragment>,
        <DocumentFragment>
          <h3
            class="MuiTypography-root MuiTypography-h3 css-gepadz-MuiTypography-root"
          >
            h3 Text
          </h3>
        </DocumentFragment>,
        <DocumentFragment>
          <h4
            class="MuiTypography-root MuiTypography-h4 css-5lbw0b-MuiTypography-root"
          >
            h4 Text
          </h4>
        </DocumentFragment>,
        <DocumentFragment>
          <h5
            class="MuiTypography-root MuiTypography-h5 css-ag7rrr-MuiTypography-root"
          >
            h5 Text
          </h5>
        </DocumentFragment>,
        <DocumentFragment>
          <h6
            class="MuiTypography-root MuiTypography-h6 css-2ulfj5-MuiTypography-root"
          >
            h6 Text
          </h6>
        </DocumentFragment>,
      ]
    `);
  });
});
