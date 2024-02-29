import React from "react";
import { render, screen } from "@testing-library/react";
import TeliThemeProvider from "./TeliThemeProvider";

describe("Theme component", () => {
  test("should have theme classes", () => {
    render(<TeliThemeProvider>theme</TeliThemeProvider>);

    expect(document.body).toHaveClass("theme__bg", "theme__text");
    expect(screen.getByText("theme")).toBeInTheDocument();
  });
});
