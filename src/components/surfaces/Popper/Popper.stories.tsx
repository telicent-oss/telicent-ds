import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Fade from "@mui/material/Fade";
import { Popper } from "./Popper";
import Button from "../../buttons/Button/Button";
import Paper from "../Paper/Paper";
import { Text } from "../../data-display/Text/Text";
import FlexBox from "../../layout/FlexBox";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const meta: Meta<typeof Popper> = {
  title: "Surfaces/Popper",
  component: Popper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Positioning primitive. Places a \`ReactNode\` next to an anchor element via [Popper.js](https://popper.js.org/) — nothing more.

Thin re-export of MUI's \`Popper\`. The DS bakes no defaults on this one because \`Popper\` is a *placement* primitive, not a container: it puts your content at a point in the viewport and steps back. Chrome — paper background, elevation, dismiss behaviour, focus management — is yours to add.

---

### The opinion

**None.** \`Popper\` is a placement primitive with no visual output of its own. The DS wrapper is a pass-through: it delegates to Popper.js's positioning engine and leaves everything else — surface, dismiss, focus, roles — to the callsite.

If you find yourself hand-rolling paper + backdrop + click-outside on every \`Popper\` callsite, reach for \`PopOver\` instead — that's the DS's opinionated surface. See **When to use which** below.

---

### When to use which

\`Popper\` vs \`PopOver\` vs \`Tooltip\` vs \`Menu\` — same shape (float content beside an anchor), different contract:

| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |
| --- | :---: | :---: | :---: | :---: | --- |
| \`Popper\` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — typeaheads, floating labels, hover cards. You'll bring your own container and dismiss logic. |
| \`PopOver\` | ✓ | ✓ | ✓ | ✓ (\`elevation={3}\`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu. |
| \`Tooltip\` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |
| \`DropdownButton\` / \`Menu\` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions. |

The bright line: **is the floating content interactive?** If yes, and the user's focus should be trapped there until they dismiss it, use \`PopOver\`. If no, or you're building your own dismiss (e.g. an autocomplete listbox whose dismiss is tied to blur), use \`Popper\`.

---

### Accessibility

\`Popper\` renders a positioned \`div\` and nothing else — no \`role\`, no \`aria-*\`. The callsite is responsible for:

- Setting a \`role\` on the popped content that matches the pattern (\`listbox\`, \`tooltip\`, \`dialog\`, \`menu\`, ...).
- Wiring \`aria-controls\` / \`aria-expanded\` on the anchor button to point at the popped element.
- Focus management — moving focus in on open, restoring it on close, handling arrow keys inside a listbox.
- Dismiss keys — Escape typically closes; the wrapper does not.

If you don't want to own any of that, reach for \`PopOver\` (interactive) or \`Tooltip\` (passive) instead.

---

### Other supported features

Everything on MUI's \`Popper\` passes through unchanged: \`placement\` (12 values from \`top-start\` to \`bottom-end\`), \`modifiers\` (Popper.js middleware — offset, arrow, preventOverflow, flip), \`disablePortal\` (render inline rather than at the document root), \`transition\` (with a MUI \`Fade\` / \`Grow\` / \`Slide\` child using the \`{ TransitionProps }\` render-prop shape), and \`keepMounted\`.

---

### Example

\`\`\`tsx
import { Popper, Paper, Text } from "@telicent-oss/ds";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useRef, useState } from "react";

const HoverCard = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
        Preview
      </button>

      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
            <Text>Free-form preview content.</Text>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description:
        "Whether the popped element is mounted and positioned. Controlled — hold it in the consumer.",
      table: { type: { summary: "boolean" }, category: "Popper" },
    },
    anchorEl: {
      control: false,
      description:
        "The element the pop is positioned against. A DOM node, a `VirtualElement` (for coord anchoring), or a callback returning one. Usually a ref's `.current`.",
      table: {
        type: { summary: "Element | VirtualElement | (() => Element | VirtualElement) | null" },
        category: "Popper",
      },
    },
    placement: {
      control: "select",
      options: [
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end",
      ],
      description:
        'Where the popped element sits relative to the anchor. Popper.js will flip on collision unless you disable the flip modifier.',
      table: { defaultValue: { summary: "bottom" }, category: "Popper" },
    },
    disablePortal: {
      control: "boolean",
      description:
        "Render the popped element inline (as a child of the anchor's parent) instead of portalling to the document root. Reach for this when the pop must sit inside a stacking context (a scrolling `overflow: hidden` panel, a Storybook doc block).",
      table: { defaultValue: { summary: "false" }, category: "Popper" },
    },
    transition: {
      control: "boolean",
      description:
        "Enables the render-prop shape `children = ({ TransitionProps }) => <Transition {...TransitionProps}>...`. Wrap the pop content in a MUI `Fade` / `Grow` / `Slide` to animate open/close.",
      table: { defaultValue: { summary: "false" }, category: "Popper" },
    },
    keepMounted: {
      control: "boolean",
      description:
        "Keep the popped element in the DOM while closed. Useful for SEO-visible content or when children hold expensive state.",
      table: { defaultValue: { summary: "false" }, category: "Popper" },
    },
    modifiers: {
      control: false,
      description:
        "[Popper.js modifiers](https://popper.js.org/docs/v2/modifiers/) — the escape hatch for custom positioning behaviour. Reach for this to tune `offset`, add an `arrow`, or override `preventOverflow`.",
      table: { type: { summary: "PopperModifier[]" }, category: "Popper" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popper>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The base shape every other story varies. A button anchors a `Paper` positioned `bottom-start` beneath it. Dismiss is wired via `ClickAwayListener` — the DS `Popper` does not close on outside click by itself.",
      },
    },
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <Button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
          {open ? "Close popper" : "Open popper"}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
              <Text>Anchored to the button. Click away to dismiss.</Text>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </div>
    );
  },
};

export const WithTransition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`transition` swaps `children` for a render-prop that hands you `TransitionProps`. Wrap the content in a MUI `Fade` / `Grow` / `Slide` to animate the open/close. Popper.js recalculates position before the transition runs so the content never appears in the wrong place.",
      },
    },
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <Button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
          {open ? "Close popper" : "Open popper"}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={200}>
              <Paper sx={{ p: 2, mt: 1 }} elevation={3}>
                <Text>Fades in and out.</Text>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  },
};

export const Placements: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Popper supports twelve `placement` values around the anchor. Each button here anchors its own popper at the named placement. Popper.js will flip on collision — try scrolling this doc so a "top" placement runs out of room.',
      },
    },
  },
  render: () => {
    const placements: Array<
      | "top-start"
      | "top"
      | "top-end"
      | "bottom-start"
      | "bottom"
      | "bottom-end"
    > = ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];

    return (
      <FlexBox direction="column" gap={4} sx={{ p: 8 }}>
        {placements.map((placement) => {
          const AnchorRow = () => {
            const anchorRef = useRef<HTMLButtonElement | null>(null);
            const [open, setOpen] = useState(false);
            return (
              <FlexBox alignItems="center" gap={2}>
                <Button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
                  {placement}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} placement={placement}>
                  <Paper sx={{ px: 1.5, py: 0.5, m: 1 }} elevation={3}>
                    <Text variant="caption">Placed {placement}</Text>
                  </Paper>
                </Popper>
              </FlexBox>
            );
          };
          return <AnchorRow key={placement} />;
        })}
      </FlexBox>
    );
  },
};

export const AsTypeahead: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The canonical `Popper` use case: an input's suggestion listbox. The pop is a `role=\"listbox\"` positioned under the input, dismiss is on blur (not click-away, so keyboard navigation stays intact), and `aria-controls` on the input points at the listbox `id`. Nothing about this needs `PopOver`'s backdrop or focus trap — the input owns focus throughout.",
      },
    },
  },
  render: () => {
    const options = ["Apple", "Apricot", "Avocado", "Blueberry", "Cherry"];
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const anchorRef = useRef<HTMLInputElement | null>(null);
    const filtered = options.filter((o) =>
      o.toLowerCase().startsWith(query.toLowerCase()),
    );
    const open = focused && query.length > 0 && filtered.length > 0;
    return (
      <div style={{ padding: 40 }}>
        <input
          ref={anchorRef}
          type="text"
          placeholder="Search fruit…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-controls="typeahead-listbox"
          aria-expanded={open}
          style={{ padding: 8, width: 240 }}
        />
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
          <Paper
            id="typeahead-listbox"
            role="listbox"
            sx={{ mt: 0.5, minWidth: 240, py: 0.5 }}
            elevation={3}
          >
            {filtered.map((option) => (
              <div key={option} role="option" aria-selected={false} style={{ padding: "6px 12px" }}>
                {option}
              </div>
            ))}
          </Paper>
        </Popper>
      </div>
    );
  },
};
