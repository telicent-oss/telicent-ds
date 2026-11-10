import { screen } from "@testing-library/react";

import { setup } from "../../../test-utils";
import Autocomplete, { Option } from "./Autocomplete";

const OPTIONS: Option[] = [
  { value: "XAA", label: "XAA" },
  { value: "XBB", label: "XBB" },
];

describe("Autocomplete multiple", () => {
  it("makes only unlocked chips removable", () => {
    setup(
      <Autocomplete multiple label="Nats" options={OPTIONS} value={OPTIONS} lockedValues={["XAA"]} onChange={jest.fn()} />,
    );

    // A removable chip is a button.
    expect(screen.queryByRole("button", { name: "XAA" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "XBB" })).toBeInTheDocument();
  });

  it("keeps locked values on clear-all", async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Autocomplete multiple label="Nats" options={OPTIONS} value={OPTIONS} lockedValues={["XAA"]} onChange={onChange} />,
    );

    await user.click(screen.getByLabelText("Clear"));

    expect(onChange).toHaveBeenLastCalledWith([OPTIONS[0]]);
  });

  it("renders chips without React's key-spread warning", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    setup(<Autocomplete multiple label="Nats" options={OPTIONS} value={OPTIONS} onChange={jest.fn()} />);

    const keyWarnings = error.mock.calls.filter(([message]) => String(message).includes('"key" prop is being spread'));
    error.mockRestore();
    expect(keyWarnings).toEqual([]);
  });
});
