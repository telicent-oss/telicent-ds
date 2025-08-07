import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CopyToClipboard from "./CopyToClipboard";
import { waitForElementToBeRemoved } from "@storybook/test";

describe("CopyToClipboard", () => {
  const textToCopy = "Hello, world!";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with default title and icon", () => {
    render(<CopyToClipboard text={textToCopy} />);
    const button = screen.getByRole("button", { name: /copy to clipboard/i });
    expect(button).toBeInTheDocument();
  });

  it("calls clipboard.writeText on click (success case)", async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });

    render(<CopyToClipboard text={textToCopy} />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(textToCopy);
    });
  });

  it("shows success icon and reverts after 1500ms", async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });

    render(<CopyToClipboard text={textToCopy} />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(button.querySelector("svg")).toHaveAttribute("data-icon", "check");

    await waitForElementToBeRemoved(() => document.querySelector('svg[data-icon="check"]'), {
      timeout: 5_000,
    });

    expect(button.querySelector("svg")).toHaveAttribute("data-icon", "copy");
  });

  it("displays error message when testFailure is true", async () => {
    render(<CopyToClipboard text={textToCopy} testFailure />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    const error = await screen.findByText("Simulated clipboard failure");
    expect(error).toBeInTheDocument();
  });

  it("does not show error message by default", () => {
    render(<CopyToClipboard text={textToCopy} />);
    const error = screen.queryByText(/clipboard/i);
    expect(error).not.toBeInTheDocument();
  });
});
