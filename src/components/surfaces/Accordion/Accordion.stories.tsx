import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
import { AccordionSummary } from "./AccordionSummary";
import { AccordionDetails } from "./AccordionDetails";
import { Text } from "../../data-display/Text/Text";
import FlexBox from "../../layout/FlexBox";

const meta: Meta<typeof Accordion> = {
  title: "Surfaces/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Collapsible surface. Wraps MUI's \`Accordion\` / \`AccordionSummary\` / \`AccordionDetails\` with DS defaults so callsites drop the four-line \`sx\` block MUI's examples ask every consumer to hand-roll.

MUI's out-of-the-box Accordion renders as a raised card with a gutter jump and a divider between siblings — a shape almost every Telicent surface has to undo with \`elevation={0} disableGutters sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}\`. The DS bakes that undo.

---

### The opinion

- **\`elevation\` defaults to \`0\`.** An Accordion is a collapse inside another surface, not a raised card of its own. Pass \`elevation={n}\` at the callsite when you genuinely want a shadow.
- **\`disableGutters\` defaults to \`true\`.** No expanded/collapsed margin jump. Pass \`disableGutters={false}\` to restore MUI's gutter.
- **Transparent root background.** The Accordion inherits its parent's surface colour rather than laying its own \`Paper\` white on top. Set via theme override, not \`sx\` at the callsite.
- **Top \`:before\` divider suppressed.** MUI paints a 1px line above every Accordion; the DS hides it. When two Accordions sit adjacent and you want a separator, add it to the parent container (a \`Divider\` between them, or a border on the wrapping \`FlexBox\`) rather than relying on MUI's implicit rule.
- **\`AccordionSummary\` supplies a default \`expandIcon={<ExpandMoreIcon />}\`.** No import in the callsite. Pass your own \`expandIcon\` to override.

---

### Defaults

- \`Accordion.elevation\`: \`0\` — via theme \`defaultProps\`, so a callsite override wins.
- \`Accordion.disableGutters\`: \`true\` — via theme \`defaultProps\`.
- \`Accordion\` root: transparent background + hidden \`:before\` — via theme \`styleOverrides\`, structural CSS with no palette token.
- \`AccordionSummary.expandIcon\`: DS \`ExpandMoreIcon\` — via the wrapper, spread last so a callsite \`expandIcon\` overrides.
- \`AccordionSummary\` / \`AccordionDetails\` padding: **not** baked. Per-callsite decision — some rows want flush-left (\`sx={{ px: 0 }}\`), others want MUI's default \`px: 2\`.

---

### Other supported features

Everything else on MUI's \`Accordion\` / \`AccordionSummary\` / \`AccordionDetails\` passes through, and a callsite prop overrides a DS default because \`{...props}\` spreads last — \`defaultExpanded\`, \`expanded\` / \`onChange\` (controlled), \`disabled\`, \`square\`, \`slots\` / \`slotProps\`, and \`TransitionComponent\` behave as MUI documents them.

---

### When & how to use it

- **Show/hide detail on demand inside an existing surface** — a form section that's only sometimes edited, a panel row whose detail is optional, a list item whose sub-fields aren't the primary read.
- **Prefer \`Card\` when the group is a distinct data entity** with its own header and actions; the Accordion is a container primitive, the Card is a semantic unit.
- **Prefer \`Drawer\` for a large side-mounted panel** — an Accordion isn't the right shape for hundreds of pixels of collapsible chrome.
- **Two adjacent Accordions have no separator.** If you want one, put it on the parent container. This is deliberate — the DS refuses to bake a divider whose colour and thickness would then be un-overridable at the callsite.

---

### Example

\`\`\`tsx
import { Accordion, AccordionSummary, AccordionDetails, Text } from "@telicent-oss/ds";

const SecurityLabelEditor = () => (
  <Accordion>
    <AccordionSummary sx={{ px: 0 }}>
      <Text variant="body2" color="text.secondary">
        Security label: IDH · O · GBR · TELICENT
      </Text>
    </AccordionSummary>
    <AccordionDetails sx={{ px: 0 }}>
      <Text>Classification, nats, orgs, groups.</Text>
    </AccordionDetails>
  </Accordion>
);
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    defaultExpanded: {
      control: "boolean",
      description:
        "Render open on first mount. Reach for this when the collapsed state is unlikely to be useful (single-item accordion used purely to visually group).",
      table: { defaultValue: { summary: "false" }, category: "Accordion" },
    },
    expanded: {
      control: false,
      description:
        "Controlled expansion. Pair with `onChange` and hold the state in the consumer. Omit both `expanded` and `onChange` for uncontrolled behaviour.",
      table: { type: { summary: "boolean" }, category: "Accordion" },
    },
    onChange: {
      control: false,
      description: "Fired with `(event, expanded)` when the panel toggles.",
      table: {
        type: { summary: "(event: SyntheticEvent, expanded: boolean) => void" },
        category: "Accordion",
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent the summary from receiving pointer or keyboard events.",
      table: { defaultValue: { summary: "false" }, category: "Accordion" },
    },
    disableGutters: {
      control: "boolean",
      description: "DS defaults this to `true`. Pass `false` to restore MUI's expand-collapse margin jump.",
      table: { defaultValue: { summary: "true" }, category: "Accordion (DS)" },
    },
    elevation: {
      control: { type: "number", min: 0, max: 24, step: 1 },
      description:
        "DS defaults this to `0`. Pass a higher number to add MUI's paper shadow when the Accordion needs to sit above the surrounding surface.",
      table: { defaultValue: { summary: "0" }, category: "Accordion (DS)" },
    },
    square: {
      control: "boolean",
      description: "Drop the rounded corners on the root surface.",
      table: { defaultValue: { summary: "false" }, category: "Accordion" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The shape every other story varies. No `sx` at the callsite — the transparent background, no gutter, hidden top divider, and default expand chevron all come from the theme.",
      },
    },
  },
  render: () => (
    <Accordion>
      <AccordionSummary>
        <Text variant="body2">Advanced options</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Fields go here.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const StartsExpanded: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`defaultExpanded` renders the panel open on first mount. Reach for this when the collapsed state is unlikely to be useful — a single-item accordion used purely to visually group a form section, or a detail whose closed state hides the primary read.",
      },
    },
  },
  render: () => (
    <Accordion defaultExpanded>
      <AccordionSummary>
        <Text variant="body2">Security label</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Classification, nats, orgs, groups.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const CustomExpandIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Override the DS-default `expandIcon` by passing your own. Any icon component or `ReactNode` works — the wrapper spreads props last, so a callsite `expandIcon` always wins.",
      },
    },
  },
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<span aria-hidden>+</span>}>
        <Text variant="body2">Custom chevron</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>The default chevron has been replaced with a plus sign.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const FlushLeftPadding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Padding on `AccordionSummary` and `AccordionDetails` is deliberately per-callsite. When the Accordion sits inside a surface that already carries horizontal padding — a form column, a panel row — pass `sx={{ px: 0 }}` on both to align the summary flush with the surrounding content. This is the shape graph's `SecurityLabelEditor` uses.",
      },
    },
  },
  render: () => (
    <Accordion>
      <AccordionSummary sx={{ px: 0 }}>
        <Text variant="body2" color="text.secondary">
          Security label: IDH · O · GBR/USA · TELICENT
        </Text>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <Text>Classification, nats, orgs, groups.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const AdjacentAccordions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Two Accordions sitting next to each other have no separator — the DS suppresses the top `:before` divider MUI paints. When you want spacing between rows, put it on the parent container (here, a `FlexBox` with `gap`). When you want a rule, add a `Divider` between them.",
      },
    },
  },
  render: () => (
    <FlexBox direction="column" gap={2} sx={{ width: 480 }}>
      <Accordion>
        <AccordionSummary>
          <Text variant="body2">First section</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>Body of the first section.</Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Text variant="body2">Second section</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>Body of the second section.</Text>
        </AccordionDetails>
      </Accordion>
    </FlexBox>
  ),
};

export const WithGutter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Opt out of the DS `disableGutters` default by passing `disableGutters={false}`. The panel then grows a margin when expanded, matching MUI's out-of-the-box behaviour. Reach for this only when the callsite genuinely benefits from the size shift.",
      },
    },
  },
  render: () => (
    <Accordion disableGutters={false}>
      <AccordionSummary>
        <Text variant="body2">Grows on expand</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Notice the margin that appears when the panel opens.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const OverriddenStyles: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When a callsite genuinely wants an Accordion that reads as a card — coloured surface, elevation, padded body — override the DS defaults inline. Every DS opinion is overridable because the wrapper spreads props last: pass `elevation={2}` to restore the shadow, `sx={{ bgcolor: ... }}` on the root to paint the surface, and per-callsite padding on Summary/Details. Prefer reaching for `Card` before doing this — the DS ships two different shapes for a reason. This story exists to show the escape hatch, not to recommend it.",
      },
    },
  },
  render: () => (
    <Accordion
      elevation={2}
      sx={(theme) => ({
        bgcolor: theme.palette.background.paper,
        borderRadius: 1,
        border: `1px solid ${theme.palette.divider}`,
        "&:hover": { borderColor: theme.palette.primary.main },
      })}
    >
      <AccordionSummary sx={{ px: 2, py: 1 }}>
        <Text variant="body2">Card-shaped Accordion</Text>
      </AccordionSummary>
      <AccordionDetails
        sx={(theme) => ({
          px: 2,
          pb: 2,
          bgcolor: theme.palette.background.default,
          borderTop: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Text>
          Elevation, background colour, rounded corners, a border, and per-section padding
          are all restored at the callsite. The DS opinions are defaults, not locks.
        </Text>
      </AccordionDetails>
    </Accordion>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`disabled` renders the summary inert — it stops receiving pointer and keyboard events, and the chevron dims. Use this when a section's content isn't yet available (e.g. requires an earlier form field to be filled).",
      },
    },
  },
  render: () => (
    <Accordion disabled>
      <AccordionSummary>
        <Text variant="body2">Not yet available</Text>
      </AccordionSummary>
      <AccordionDetails>
        <Text>Body is unreachable while the summary is disabled.</Text>
      </AccordionDetails>
    </Accordion>
  ),
};
