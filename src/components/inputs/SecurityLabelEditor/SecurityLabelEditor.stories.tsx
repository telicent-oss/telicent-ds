import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { defaultIdhLabel, extractIdhOptions, IdhLabel } from "./idhLabel";
import SecurityLabelEditor from "./SecurityLabelEditor";

// One user's IDH label schema, as the-management's GET /v1/labels/schemas returns it under "idh".
const IDH_SCHEMA = {
  type: "object",
  $defs: {
    AccessModel: {
      type: "object",
      properties: {
        classification: { type: "string", enum: ["LOW", "MID", "HIGH"] },
        allowedNats: {
          type: "array",
          items: { type: "string", enum: ["XAA", "XBB", "XCC", "XDD", "XEE"] },
          contains: { enum: ["XAA"] },
        },
        allowedOrgs: {
          type: "array",
          items: { type: "string", enum: ["Org A", "Org B", "Org C"] },
          contains: { enum: ["Org A"] },
        },
        groups: {
          type: "array",
          items: { type: "string", enum: ["urn:telicent:groups:team-a", "urn:telicent:groups:team-c"] },
        },
      },
    },
  },
  properties: { containsPii: { type: "boolean" }, access: { $ref: "#/$defs/AccessModel" } },
};

const parsed = extractIdhOptions(IDH_SCHEMA);
if (!parsed) {
  throw new Error("The story's schema has no IDH options");
}
const OPTIONS = parsed;

const meta: Meta<typeof SecurityLabelEditor> = {
  title: "Inputs/SecurityLabelEditor",
  component: SecurityLabelEditor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Edits an IDH security label, offering only what the signed-in user's own label schema allows.

Fetch the user's schemas from the-management (\`GET /v1/labels/schemas\`), then read the IDH options:

\`\`\`tsx
const options = extractIdhOptions(schemas.idh);
if (!options) {
  // The user can build no valid label: do not offer labelling.
}
const [label, setLabel] = useState(() => defaultIdhLabel(options));

<SecurityLabelEditor value={label} options={options} onChange={setLabel} />
\`\`\`

- Every list is closed: nothing outside the schema can be entered
- The user's own nationality and organisation cannot be removed, so they can read what they label
- Fields the editor does not know about, such as \`scheme\`, are kept on change
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SecurityLabelEditor>;

const Editor = (props: { start?: Partial<IdhLabel>; disabled?: boolean }) => {
  const [label, setLabel] = useState<IdhLabel>(() => ({ ...defaultIdhLabel(OPTIONS), ...props.start }));
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 480 }}>
      <SecurityLabelEditor value={label} options={OPTIONS} onChange={setLabel} disabled={props.disabled} />
      <pre style={{ fontSize: 12 }}>{JSON.stringify(label, null, 2)}</pre>
    </div>
  );
};

export const Default: Story = {
  render: () => <Editor />,
};

export const Filled: Story = {
  render: () => (
    <Editor
      start={{
        classification: "HIGH",
        allowedNats: ["XAA", "XBB", "XCC"],
        allowedOrgs: ["Org A", "Org B"],
        groups: ["urn:telicent:groups:team-a"],
        containsPii: true,
      }}
    />
  ),
};

export const Disabled: Story = {
  render: () => <Editor disabled />,
};
