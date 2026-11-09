import { act, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
import { useState } from "react";

import { setup } from "../../../test-utils";
import { IdhLabel, IdhSchemaOptions } from "./idhLabel";
import SecurityLabelEditor from "./SecurityLabelEditor";

const OPTIONS: IdhSchemaOptions = {
  classifications: ["LOW", "MID", "HIGH"],
  nats: { options: ["XAA", "XBB", "XCC"], mustInclude: ["XAA"] },
  orgs: { options: ["Org A", "Org B"], mustInclude: ["Org A"] },
  groups: { options: ["urn:telicent:groups:team-a", "urn:telicent:groups:team-c"] },
};

type WriterLabel = IdhLabel & { scheme: "idh" };

const LABEL: WriterLabel = {
  scheme: "idh",
  classification: "LOW",
  allowedNats: ["XAA", "XBB"],
  allowedOrgs: ["Org A"],
  groups: [],
};

const Harness = (props: { onChange: (label: WriterLabel) => void }) => {
  const [label, setLabel] = useState(LABEL);
  return (
    <SecurityLabelEditor
      value={label}
      options={OPTIONS}
      onChange={(next) => {
        setLabel(next);
        props.onChange(next);
      }}
    />
  );
};

// A chip the user can remove is a button; Delete removes it.
const removeChip = async (user: UserEvent, name: string) => {
  const chip = screen.getByRole("button", { name });
  act(() => chip.focus());
  await user.keyboard("{Delete}");
};

describe("SecurityLabelEditor", () => {
  it("shows the label's values, with the user's own nationality and organisation named as required", () => {
    setup(<Harness onChange={jest.fn()} />);

    expect(screen.getByRole("combobox", { name: "Classification" })).toHaveTextContent("LOW");
    expect(screen.getByText("XAA")).toBeInTheDocument();
    expect(screen.getByText("XBB")).toBeInTheDocument();
    expect(screen.getByText("Must include XAA")).toBeInTheDocument();
    expect(screen.getByText("Must include Org A")).toBeInTheDocument();
  });

  it("lets the user remove a nationality, but not their own", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    expect(screen.queryByRole("button", { name: "XAA" })).not.toBeInTheDocument();

    await removeChip(user, "XBB");

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, allowedNats: ["XAA"] });
  });

  it("offers only the classifications in the schema, and keeps fields it does not edit", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    await user.click(screen.getByRole("combobox", { name: "Classification" }));
    const offered = screen.getAllByRole("option").map((option) => option.textContent);
    expect(offered).toEqual(["LOW", "MID", "HIGH"]);

    await user.click(screen.getByRole("option", { name: "HIGH" }));

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, classification: "HIGH" });
  });

  it("shows groups by name and stores them as URNs", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    await user.click(screen.getByRole("combobox", { name: "Groups (readers need all)" }));
    await user.click(screen.getByRole("option", { name: "team-c" }));

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, groups: ["urn:telicent:groups:team-c"] });
  });

  it("marks the label as holding personal information", async () => {
    const onChange = jest.fn();
    const { user } = setup(<Harness onChange={onChange} />);

    await user.click(screen.getByRole("checkbox", { name: "Contains personally identifiable information" }));

    expect(onChange).toHaveBeenLastCalledWith({ ...LABEL, containsPii: true });
  });

  it("uses the caller's hint in place of the default", () => {
    setup(
      <SecurityLabelEditor
        value={LABEL}
        options={OPTIONS}
        onChange={jest.fn()}
        hints={{ nationalities: "Must include XAA (yours)", groups: "Only groups the parent needs" }}
      />,
    );

    expect(screen.getByText("Must include XAA (yours)")).toBeInTheDocument();
    expect(screen.getByText("Only groups the parent needs")).toBeInTheDocument();
    expect(screen.queryByText("Must include XAA")).not.toBeInTheDocument();
  });
});
