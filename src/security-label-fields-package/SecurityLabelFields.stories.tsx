import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { defaultIdhLabel, IdhLabel, IdhSchemaOptions } from "./idhLabel";
import SecurityLabelFields from "./SecurityLabelFields";

const meta: Meta<typeof SecurityLabelFields> = {
  title: "candidate-packages/security-label-fields",
  component: SecurityLabelFields,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The fields of an IDH security label, for an app's own form. Pass `extractIdhOptions(schemas.idh)` from the-management's `GET /v1/labels/schemas` as `options`.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SecurityLabelFields>;

// What extractIdhOptions reads from one user's schema.
const OPTIONS: IdhSchemaOptions = {
  classifications: ["LOW", "MID", "HIGH"],
  nats: { options: ["XAA", "XBB", "XCC", "XDD", "XEE"], mustInclude: ["XAA"] },
  orgs: { options: ["Org A", "Org B", "Org C"], mustInclude: ["Org A"] },
  groups: { options: ["urn:telicent:groups:team-a", "urn:telicent:groups:team-c"] },
};

const EVERYTHING: Partial<IdhLabel> = {
  classification: "HIGH",
  allowedNats: OPTIONS.nats.options,
  allowedOrgs: OPTIONS.orgs.options,
  groups: OPTIONS.groups.options,
  containsPii: true,
};

const Editor = (props: { start?: Partial<IdhLabel>; options?: IdhSchemaOptions; disabled?: boolean; width?: number }) => {
  const options = props.options ?? OPTIONS;
  const [label, setLabel] = useState<IdhLabel>(() => ({ ...defaultIdhLabel(options), ...props.start }));
  return (
    <div style={{ maxWidth: props.width ?? 480 }}>
      <SecurityLabelFields value={label} options={options} onChange={setLabel} disabled={props.disabled} />
    </div>
  );
};

export const Default: Story = { render: () => <Editor /> };

export const Filled: Story = {
  render: () => <Editor start={{ classification: "HIGH", allowedNats: ["XAA", "XBB"], allowedOrgs: ["Org A", "Org B"] }} />,
};

export const Full: Story = { render: () => <Editor start={EVERYTHING} /> };

/** No nationality or organisation, so no one could read the data. */
export const Invalid: Story = {
  render: () => (
    <Editor
      options={{ ...OPTIONS, nats: { ...OPTIONS.nats, mustInclude: [] }, orgs: { ...OPTIONS.orgs, mustInclude: [] } }}
      start={{ allowedNats: [], allowedOrgs: [] }}
    />
  ),
};

export const Narrow: Story = { render: () => <Editor start={EVERYTHING} width={320} /> };

export const Disabled: Story = { render: () => <Editor disabled /> };
