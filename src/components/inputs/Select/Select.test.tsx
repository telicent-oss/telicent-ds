import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Select, { Options } from "./Select";
import { setup } from "../../../test-utils";

const OPTIONS: Options[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Select footer slot", () => {
  afterEach(cleanup);

  it("existing behaviour unchanged — no footer element or divider when footer is not provided", async () => {
    const { user } = setup(
      <Select label="Owner" value="" onChange={() => {}} options={OPTIONS} />,
    );

    await user.click(screen.getByRole("combobox"));

    const listbox = await screen.findByRole("listbox");
    // No footer wrapper and no separator inside the option list.
    expect(listbox.querySelector('[role="separator"]')).toBeNull();
    expect(listbox.querySelector('[role="presentation"]')).toBeNull();
  });

  it("renders the footer beneath the options, preceded by a divider", async () => {
    const { user } = setup(
      <Select
        label="Owner"
        value=""
        onChange={() => {}}
        options={OPTIONS}
        footer={<button type="button">Create new owner</button>}
      />,
    );

    await user.click(screen.getByRole("combobox"));

    const listbox = await screen.findByRole("listbox");
    const footerButton = screen.getByRole("button", {
      name: "Create new owner",
    });
    expect(footerButton).toBeInTheDocument();

    const separator = listbox.querySelector(".MuiDivider-root");
    expect(separator).not.toBeNull();

    // The divider must come before the footer in document order.
    expect(
      separator!.compareDocumentPosition(footerButton) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("clicking the footer does not change the value", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Select
        label="Owner"
        value="option1"
        onChange={onChange}
        options={OPTIONS}
        footer={<button type="button">Create new owner</button>}
      />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("button", { name: "Create new owner" }));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("passes closeMenu to the render-prop form so the footer can dismiss the menu", async () => {
    const { user } = setup(
      <Select
        label="Owner"
        value=""
        onChange={() => {}}
        options={OPTIONS}
        footer={({ closeMenu }) => (
          <button type="button" onClick={closeMenu}>
            Create new owner
          </button>
        )}
      />,
    );

    await user.click(screen.getByRole("combobox"));
    expect(await screen.findByRole("listbox")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Create new owner" }));

    // Menu dismissed — the option list is removed from the DOM.
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("Enter on a focused footer button does not change the value", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Select
        label="Owner"
        value="option1"
        onChange={onChange}
        options={OPTIONS}
        footer={<button type="button">Create new owner</button>}
      />,
    );

    await user.click(screen.getByRole("combobox"));

    const footerButton = screen.getByRole("button", {
      name: "Create new owner",
    });
    fireEvent.keyDown(footerButton, { key: "Enter", code: "Enter" });

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not surface the footer in the trigger's displayed value", () => {
    render(
      <Select
        label="Owner"
        value="option1"
        onChange={() => {}}
        options={OPTIONS}
        footer={<button type="button">Create new owner</button>}
      />,
    );

    // The closed trigger shows the selected option's label, not the footer.
    const combobox = screen.getByRole("combobox");
    expect(combobox).toHaveTextContent("Option 1");
    expect(combobox).not.toHaveTextContent("Create new owner");
  });
});
