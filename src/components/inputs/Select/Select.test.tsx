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

  it("renders the footer with no divider when there are no options", async () => {
    const { user } = setup(
      <Select
        label="Owner"
        value=""
        onChange={() => {}}
        options={[]}
        footer={<button type="button">Create new owner</button>}
      />,
    );

    await user.click(screen.getByRole("combobox"));

    const listbox = await screen.findByRole("listbox");
    // Footer is present even with an empty option list...
    expect(
      screen.getByRole("button", { name: "Create new owner" }),
    ).toBeInTheDocument();
    // ...but the divider is suppressed since there are no options above it.
    expect(listbox.querySelector(".MuiDivider-root")).toBeNull();
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

describe("Select per-option disabled", () => {
  afterEach(cleanup);

  const DISABLED_OPTIONS: Options[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
  ];

  it("applies .Mui-disabled and aria-disabled=true to an option with disabled: true", async () => {
    const { user } = setup(
      <Select label="Owner" value="" onChange={() => {}} options={DISABLED_OPTIONS} />,
    );

    await user.click(screen.getByRole("combobox"));

    const disabledOption = await screen.findByRole("option", { name: "Option 2" });
    expect(disabledOption).toHaveClass("Mui-disabled");
    expect(disabledOption).toHaveAttribute("aria-disabled", "true");

    // Sibling options remain enabled.
    const enabledOption = screen.getByRole("option", { name: "Option 1" });
    expect(enabledOption).not.toHaveClass("Mui-disabled");
    expect(enabledOption).not.toHaveAttribute("aria-disabled", "true");
  });

  it("clicking a disabled option does not fire onChange", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Select label="Owner" value="" onChange={onChange} options={DISABLED_OPTIONS} />,
    );

    await user.click(screen.getByRole("combobox"));

    const disabledOption = await screen.findByRole("option", { name: "Option 2" });

    // MUI gates the click at the CSS layer via pointer-events: none on
    // .Mui-disabled. user-event honours that and refuses the interaction,
    // which matches real browser behaviour.
    await expect(user.click(disabledOption)).rejects.toThrow(/pointer-events/);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("keyboard arrow navigation skips a disabled option", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Select label="Owner" value="" onChange={onChange} options={DISABLED_OPTIONS} />,
    );

    await user.click(screen.getByRole("combobox"));
    await screen.findByRole("listbox");

    // On open, MUI highlights the first enabled option (Option 1). A single
    // ArrowDown must skip disabled Option 2 and land on Option 3; Enter then
    // commits that selection.
    await user.keyboard("{ArrowDown}{Enter}");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe("option3");
  });

  it("omitting disabled leaves the option enabled (backwards compatible)", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Select label="Owner" value="" onChange={onChange} options={OPTIONS} />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(await screen.findByRole("option", { name: "Option 2" }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe("option2");
  });
});
