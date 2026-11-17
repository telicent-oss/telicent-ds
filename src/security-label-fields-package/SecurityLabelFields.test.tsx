import { act, screen } from "@testing-library/react";
import { useState } from "react";

import { setup } from "../test-utils";
import { IdhLabel, IdhSchemaOptions } from "./idhLabel";
import SecurityLabelFields from "./SecurityLabelFields";

const OPTIONS: IdhSchemaOptions = {
  classifications: ["O", "S"],
  nats: { options: ["XAA", "XBB"], mustInclude: ["XAA"] },
  orgs: { options: ["Org A", "Org B"], mustInclude: ["Org A"] },
  groups: { options: ["urn:telicent:groups:team-c"] },
};

// An app's own label type, with a field the editor does not edit.
const LABEL: IdhLabel & { scheme: "idh" } = {
  scheme: "idh",
  classification: "O",
  allowedNats: ["XAA", "XBB"],
  allowedOrgs: ["Org A"],
  groups: [],
};

const Harness = (props: { options?: IdhSchemaOptions; onChange: (label: typeof LABEL) => void }) => {
  const [label, setLabel] = useState(LABEL);
  return (
    <SecurityLabelFields
      value={label}
      options={props.options ?? OPTIONS}
      onChange={(next) => {
        setLabel(next);
        props.onChange(next);
      }}
    />
  );
};

describe("SecurityLabelFields", () => {
  it("keeps the user's own nationality, and lets them remove another", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);
    expect(screen.getByText("Must include XAA")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "XAA" })).not.toBeInTheDocument();

    const usa = screen.getByRole("button", { name: "XBB" });
    act(() => usa.focus());
    await user.keyboard("{Delete}");

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, allowedNats: ["XAA"] });
  });

  it("offers the schema's classifications, and keeps fields it does not edit", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    await user.click(screen.getByRole("combobox", { name: "Classification" }));
    await user.click(screen.getByRole("option", { name: "S: Secret" }));

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, classification: "S" });
  });

  it("shows groups by name and stores them as URNs", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    await user.click(screen.getByRole("combobox", { name: "Groups (readers need all)" }));
    await user.click(screen.getByRole("option", { name: "team-c" }));

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, groups: ["urn:telicent:groups:team-c"] });
  });

  it("shows an error when no nationality is left", async () => {
    const noneRequired = { ...OPTIONS, nats: { ...OPTIONS.nats, mustInclude: [] } };
    const { user } = setup(<Harness options={noneRequired} onChange={jest.fn()} />);

    await user.click(screen.getAllByLabelText("Clear")[0]);

    expect(screen.getByText("Choose at least one nationality, or no one can read the data")).toBeInTheDocument();
  });
});
