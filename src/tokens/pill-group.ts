/**
 * Class the pill-group treatment keys on.
 *
 * A class rather than a theme `variants` entry: MUI v5's `variants`
 * support does not cover `MuiTabs` (see `tabs-overrides.ts`), and MUI's
 * `Tabs` already owns `variant` for `standard | scrollable | fullWidth`,
 * so that name is taken.
 *
 * Lives in `tokens` so the components that apply it and the overrides
 * that style it cannot drift.
 */
export const PILL_GROUP_CLASS = "TelicentPillGroup";

/** Pill height. The well is this plus its own padding. */
export const PILL_HEIGHT = 28;
