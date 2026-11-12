---
status: proposed
date: 2026-11-05
---

# Ship the pre-React app loader as a Vite plugin

Every app hand-rolls the same loading overlay in `index.html`: markup, inline
CSS with hex values copied from the palette, and two scripts in `public/`.
The copies have drifted. Graph's background is `#121212`, while the palette
says `#1D1D1D`. Graph's light-mode script is inline, and the app CSP blocks
inline scripts. `appLoader` from `@telicent-oss/ds/app-loader` replaces all of it.

## Decisions

1. **A Vite plugin, not a React component.** The loader must paint from the
   first byte of HTML. Anything in the bundle paints too late.
2. **Colours come from the palette.** `background.default`, `text.primary`
   and `primary.main`, from `createDarkPalette` and `createLightPalette`. A
   theme missing a token fails the app build.
3. **Dark unless the user stored light.** No `prefers-color-scheme`. A user
   who never chose light never sees a light screen.
4. **Scripts are emitted, CSS is inlined.** App CSPs allow `script-src 'self'`
   and `style-src 'unsafe-inline'`. Scripts get content-hashed names, so
   cached copies never go stale.
5. **The handoff contract is unchanged.** `body.app-ready` dismisses the
   overlay. The `initial-overlay*` ids stay, so existing selectors keep working.
6. **A separate Node build.** The entry runs inside the apps' `vite.config`,
   so the palette is bundled in. Only node builtins and `vite` are external.

## Consequences

- Apps delete their overlay markup, overlay CSS and `public/loading-overlay-*.js`.
- An app that toggles mode at runtime must persist it under `modeStorageKey`
  and keep `<html data-theme>` in step.
- Apps that pin their own page background drop the pin, or the handoff
  shows a colour step.

## Considered alternatives

- **A React component.** Rejected because it paints after the bundle loads.
- **Copying static files into `public/` on postinstall.** Rejected because
  the hex values can't come from the palette and the files can't be hashed.
- **Inline scripts.** Rejected because the app CSPs block them.
