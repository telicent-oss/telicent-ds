import * as React from "react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DialogTitleWithClose } from "./DialogTitleWithClose";

describe("DialogTitleWithClose", () => {
  const theme = createTheme();
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    cleanup();
  });

  const renderSubject = (
    props: Partial<React.ComponentProps<typeof DialogTitleWithClose>> = {}
  ) => {
    const onClose = jest.fn();

    const merged: React.ComponentProps<typeof DialogTitleWithClose> = {
      id: "dialog-title",
      title: "Delete saved search",
      onClose,
      ...props,
    };

    render(
      <ThemeProvider theme={theme}>
        <DialogTitleWithClose {...merged} />
      </ThemeProvider>
    );

    const title = screen.getByRole("heading", { name: "Delete saved search" });
    const closeButton = screen.getByRole("button", {
      name: merged.closeAriaLabel ?? "close",
    });

    return { onClose, title, closeButton };
  };

  it("wires title id and default close semantics", () => {
    const { title, closeButton } = renderSubject();

    expect(title.getAttribute("id")).toMatchInlineSnapshot(`"dialog-title"`);
    expect(closeButton.getAttribute("aria-label")).toMatchInlineSnapshot(
      `"close"`
    );
    expect(closeButton.textContent).toMatchInlineSnapshot(`"Close"`);
  });

  it("calls onClose on click", async () => {
    const { closeButton, onClose } = renderSubject();

    await user.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("accepts custom label and aria-label", () => {
    const { closeButton } = renderSubject({
      closeLabel: "Dismiss",
      closeAriaLabel: "dismiss",
    });

    expect(closeButton.getAttribute("aria-label")).toMatchInlineSnapshot(
      `"dismiss"`
    );
    expect(closeButton.textContent).toMatchInlineSnapshot(`"Dismiss"`);
  });

  it("forwards dialogTitleProps and closeButtonProps", () => {
    const { title, closeButton } = renderSubject({
      dialogTitleProps: { "data-title-prop": "yes" } as unknown as any,
      closeButtonProps: {
        disabled: true,
        "data-close-prop": "yes",
      } as unknown as any,
    });

    expect(title.getAttribute("data-title-prop")).toMatchInlineSnapshot(
      `"yes"`
    );
    expect(closeButton.getAttribute("data-close-prop")).toMatchInlineSnapshot(
      `"yes"`
    );
    expect(closeButton.hasAttribute("disabled")).toMatchInlineSnapshot(`true`);
  });

  it("applies style overrides via slot sx props", () => {
    const { title, closeButton } = renderSubject({
      titleSx: { fontWeight: 400 },
      closeButtonSx: { color: "rgb(255, 0, 0)" },
    });

    expect(getComputedStyle(title).fontWeight).toMatchInlineSnapshot(`"400"`);
    expect(getComputedStyle(closeButton).color).toMatchInlineSnapshot(
      `"rgb(255, 0, 0)"`
    );
  });

  it("renders a custom close icon", () => {
    renderSubject({
      closeIcon: <span id="custom-close-icon" />,
    });

    expect(
      screen.getByTestId("custom-close-icon").outerHTML
    ).toMatchInlineSnapshot(`"<span id="custom-close-icon"></span>"`);
  });
});
