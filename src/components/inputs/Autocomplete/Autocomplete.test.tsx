import { act, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";

import { setup } from "../../../test-utils";
import Autocomplete, { Option } from "./Autocomplete";

const OPTIONS: Option[] = [
  { value: "XAA", label: "XAA" },
  { value: "XBB", label: "XBB" },
  { value: "XCC", label: "XCC" },
];

// A chip the user can remove is a button; Delete removes it.
const removeChip = async (user: UserEvent, name: string) => {
  const chip = screen.getByRole("button", { name });
  act(() => chip.focus());
  await user.keyboard("{Delete}");
};

describe("Autocomplete with locked values", () => {
  it("draws no delete button on a locked chip", () => {
    setup(
      <Autocomplete
        multiple
        label="Nationalities"
        options={OPTIONS}
        value={OPTIONS.slice(0, 2)}
        lockedValues={["XAA"]}
        onChange={jest.fn()}
      />,
    );

    expect(screen.getByText("XAA")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "XAA" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "XBB" })).toBeInTheDocument();
  });

  it("keeps the locked values when the user clears all", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Autocomplete
        multiple
        label="Nationalities"
        options={OPTIONS}
        value={OPTIONS.slice(0, 2)}
        lockedValues={["XAA"]}
        onChange={onChange}
      />,
    );

    await user.click(screen.getByLabelText("Clear"));

    expect(onChange).toHaveBeenLastCalledWith([{ value: "XAA", label: "XAA" }]);
  });

  it("removes an unlocked value", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Autocomplete multiple label="Nationalities" options={OPTIONS} value={OPTIONS} onChange={onChange} />,
    );

    await removeChip(user, "XCC");

    expect(onChange).toHaveBeenLastCalledWith(OPTIONS.slice(0, 2));
  });

  it("renders chips without React's key-spread warning", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    setup(<Autocomplete multiple label="Nationalities" options={OPTIONS} value={OPTIONS} onChange={jest.fn()} />);

    const keyWarnings = error.mock.calls.filter(([message]) => String(message).includes('"key" prop is being spread'));
    error.mockRestore();
    expect(keyWarnings).toEqual([]);
  });
});
