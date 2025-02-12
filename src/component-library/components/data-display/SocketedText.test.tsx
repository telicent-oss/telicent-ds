import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SocketedText, SocketedTextProps } from "./SocketedText";

describe("SocketedText", () => {
  let defaultProps: SocketedTextProps;
  const consoleErrorSpy = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});
  beforeEach(() => {
    consoleErrorSpy.mockClear();
    defaultProps = {
      children: "Test Text",
      beforeItem: <i className="fa-icon-before" />,
      afterItem: <i className="fa-icon-after" />,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("renders correctly with both before and after items", () => {
    const { container } = render(<SocketedText {...defaultProps} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
      >
        <span
          class="MuiBox-root css-h300a0"
        >
          <span
            class="MuiBox-root css-0"
          >
            <i
              class="fa-icon-before"
            />
          </span>
          <span
            class="MuiBox-root css-0"
          >
            Test Text
          </span>
          <span
            class="MuiBox-root css-0"
          >
            <i
              class="fa-icon-after"
            />
          </span>
        </span>
      </span>
    `);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  test("renders correctly with only beforeItem", () => {
    const props: SocketedTextProps = { ...defaultProps, afterItem: undefined };
    const { container } = render(<SocketedText {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
      >
        <span
          class="MuiBox-root css-h300a0"
        >
          <span
            class="MuiBox-root css-0"
          >
            <i
              class="fa-icon-before"
            />
          </span>
          <span
            class="MuiBox-root css-0"
          >
            Test Text
          </span>
        </span>
      </span>
    `);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  test('throws error when component is "a" and href is missing', () => {
    expect(() =>
      render(<SocketedText {...defaultProps} component="a" />)
    ).toThrowErrorMatchingInlineSnapshot(
      `"SocketedText: When using component=\\"a\\", the \\"href\\" prop is required."`
    );
    expect(consoleErrorSpy.mock.calls.map((args) => args[0].split("\n")[0]))
      .toMatchInlineSnapshot(`
      Array [
        "Error: Uncaught [Error: SocketedText: When using component=\\"a\\", the \\"href\\" prop is required.]",
        "Error: Uncaught [Error: SocketedText: When using component=\\"a\\", the \\"href\\" prop is required.]",
        "The above error occurred in the <SocketedText> component:",
      ]
    `);
  });

  test("throws error when both beforeItem and afterItem are missing", () => {
    expect(() =>
      render(
        <SocketedText
          {...defaultProps}
          beforeItem={undefined}
          afterItem={undefined}
        />
      )
    ).toThrowErrorMatchingInlineSnapshot(
      `"SocketedText: Sockets unused; use normal Text/Typography component instead"`
    );
    expect(consoleErrorSpy.mock.calls.map((args) => args[0].split("\n")[0]))
      .toMatchInlineSnapshot(`
      Array [
        "Error: Uncaught [Error: SocketedText: Sockets unused; use normal Text/Typography component instead]",
        "Error: Uncaught [Error: SocketedText: Sockets unused; use normal Text/Typography component instead]",
        "The above error occurred in the <SocketedText> component:",
      ]
    `);
  });
});
