import React from "react";
import { render, screen } from "@testing-library/react";
import TeliBrand from "./TeliBrand";

describe("Brand component", () => {
  test("renders 'telicent' heading", () => {
    render(<TeliBrand appName="" />);

    const headingElement = screen.getByText("telicent");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders 'design-system' as app name heading", () => {
    render(<TeliBrand appName="design-system" />);

    const headingElement = screen.getByText("design-system");
    expect(headingElement).toBeInTheDocument();
  });
});
