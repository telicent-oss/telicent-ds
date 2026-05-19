import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

 jest.mock("../../buttons/Button/PrimaryButton", () => ({
  __esModule: true,
  default: (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { "data-test-handle"?: string }) => {
    const {
      sx,
      disableElevation,
      variant,
      color,
      startIcon,
      endIcon,
      // strip anything else MUI-specific as needed
      ...rest
    } = (props as any) || {};
    return <button {...rest} />;
  },
}));

jest.mock("../../data-display", () => ({
  SearchIcon: () => null,
}));

it("disables both the input and the button when disabled is true", () => {
  const { container } = render(<SearchBox disabled />);

  // InputBase wrapper -> inner <input>
  const inputWrapper = container.querySelector('[data-test-handle="search-box-input"]') as HTMLElement | null;
  expect(inputWrapper).not.toBeNull();

  const input = inputWrapper!.querySelector("input") as HTMLInputElement | null;
  expect(input).not.toBeNull();
  expect(input).toBeDisabled();

  // Button
  const button = container.querySelector('[data-test-handle="search-box-button"]') as HTMLButtonElement | null;
  expect(button).not.toBeNull();
  expect(button).toBeDisabled();
});