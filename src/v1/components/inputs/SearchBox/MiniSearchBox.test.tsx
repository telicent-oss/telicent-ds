import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import MiniSearchBox from "./MiniSearchBox";

it("disables input and search button when disabled is true", () => {
  render(<MiniSearchBox disabled />);

  const input = screen.getByRole("searchbox");
  expect(input).toBeDisabled();

  const button = screen.getByRole("button", { name: "search" });
  expect(button).toBeDisabled();
});