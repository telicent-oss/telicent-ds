import React from "react";
import { render, cleanup } from "@testing-library/react";

import ThemeViewer from "./ThemeViewer";

describe("ThemeViewer", () => {
  let sampleTheme: Record<string, any>;

  beforeEach(() => {
    CSS.supports = ((...args: string[]): boolean => {
      // need to support overloaded fns with different arg counts
      if (args.length === 1) {
        return args[0] === "red";
      }
      if (args.length === 2) {
        return args[1] === "red";
      }
      return false;
    }) as typeof CSS.supports;
    sampleTheme = {
      primary: "red",
      secondary: "not-a-color",
      nested: {
        accent: "red",
      },
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("renders theme with red as a colour", () => {
    const { container } = render(<ThemeViewer theme={sampleTheme} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <div
          style="padding-left: 0px; display: flex; align-items: center; gap: 8px; font-family: monospace;"
        >
          <span>
            primary
            : 
            red
          </span>
          <span
            style="display: inline-block; width: 32px; height: 16px; background-color: red; border: 2px solid #444; border-radius: 8px;"
          />
        </div>
        <div
          style="padding-left: 0px; display: flex; align-items: center; gap: 8px; font-family: monospace;"
        >
          <span>
            secondary
            : 
            not-a-color
          </span>
        </div>
        <div
          style="padding-left: 0px;"
        >
          <strong>
            nested
            :
          </strong>
          <div
            style="padding-left: 4px; display: flex; align-items: center; gap: 8px; font-family: monospace;"
          >
            <span>
              accent
              : 
              red
            </span>
            <span
              style="display: inline-block; width: 32px; height: 16px; background-color: red; border: 2px solid #444; border-radius: 8px;"
            />
          </div>
        </div>
      </div>
    `);
  });

  test("renders empty theme correctly", () => {
    const { container } = render(<ThemeViewer theme={{}} />);
    expect(container.firstChild).toMatchInlineSnapshot(`<div />`);
  });
});
