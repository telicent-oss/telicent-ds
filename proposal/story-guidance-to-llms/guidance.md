# @telicent-oss/ds component guidance

Long-form guidance per component. The terse reference is llms.txt.

## Button

A styled button component built on top of MUI's `<Button>`, using our design system overrides.

---

### Supported Variants

- `primary` - main action button
- `secondary` - secondary action button
- `tertiary` - tertiary action button with neutral colour
- `base` - unstyled button base

---

### Supported Props

- **Variants:** `primary`, `secondary`, `tertiary`, `base`
- **Sizes:** `small`, `medium`, `large`
- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually
- **Full Width:** Use `fullWidth` for block-style buttons
- **SX Overrides:** Use `sx` for small visual adjustments where needed

---

### Example

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="base">Base</Button>
```
