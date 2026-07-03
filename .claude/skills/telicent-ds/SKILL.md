---
name: telicent-ds
description: Fetches the live @telicent-oss/ds component manifest for the major version this project runs and follows it as the source of truth for Telicent UI. Use when the user asks to build, add, or change any Telicent app screen, page, form, dialog, or component; names @telicent-oss/ds or the Telicent design system; or edits or reviews a file that imports from @telicent-oss/ds (Button, Card, UIThemeProvider, ...). Pulls component names, props, and variants from the manifest instead of training memory, and avoids raw HTML/MUI/Tailwind where a DS component exists.
when_to_use: Fire on requests like "build a Telicent page/form/dashboard", "add a Telicent button/card/dialog", "use the Telicent design system", "import from @telicent-oss/ds", or "theme this Telicent screen", and whenever editing or reviewing any .tsx that imports @telicent-oss/ds. Fire before writing the JSX, not after. Do not fire for non-Telicent UI work.
allowed-tools: Bash(curl:*), Bash(node:*)
---

# Telicent Design System (@telicent-oss/ds)

The manifest below is fetched on invocation for the major version this project runs — setup, theming, every exported component with its props and `variant`s, and recipes. It is your source of truth for Telicent UI. Build from it, not from training memory.

<!-- The hop: find the @telicent-oss/ds installed in this project, read its major, fetch that major's published manifest (.../v<major>/llms.txt). Fall back to the latest manifest at the site root when the package isn't installed here or that major was never published. -->

!`M=$(node -e "const fs=require('fs'),p=require('path');let d=process.cwd(),v='';for(;;){const f=p.join(d,'node_modules/@telicent-oss/ds/package.json');if(fs.existsSync(f)){v=JSON.parse(fs.readFileSync(f,'utf8')).version;break}const u=p.dirname(d);if(u===d)break;d=u}process.stdout.write(v)" 2>/dev/null); MAJ=${M%%.*}; B=https://telicent-oss.github.io/telicent-ds; if [ -n "$MAJ" ]; then U="$B/v$MAJ/llms.txt"; else U="$B/llms.txt"; fi; echo "<!-- manifest: $U | installed @telicent-oss/ds: ${M:-none detected -> latest} -->"; curl -fsS "$U" 2>/dev/null || { echo "<!-- that major is not published; using latest at root -->"; curl -fsS "$B/llms.txt"; } || echo "MANIFEST FETCH FAILED -- use the Gotchas fallback below."`

## Constraints

- Follow the manifest's own agent instructions above — prefer an existing component over custom JSX/Tailwind, set colour through the theme rather than Tailwind classes, wrap the app in `UIThemeProvider`. Don't override them with your own MUI knowledge.
- Write against the version the project actually runs. The manifest above matches the project's installed major; its last line names the exact release it documents. Use only what it documents — an absent component or prop isn't public in this version, so don't invent it.
- Don't upgrade the project to a newer major to reach a component. If a newer major exists and nothing blocks the move, note it — but the code you write targets the installed major unless the user upgrades first.

## Gotchas

- **Which manifest loaded:** the hop reads this project's installed `@telicent-oss/ds` and fetches that major's manifest (`.../v<major>/llms.txt`). The HTML comment at the top of the fetched block names the URL used and the version detected. "none detected" means the package isn't installed here and you got the latest — confirm the intended version before building.
- **Old majors persist:** every published major keeps its own manifest, so an app pinned to an old major still gets the API it runs. `.../v2/llms.txt` documents v2, `.../v3/llms.txt` documents v3; root `.../llms.txt` is always the latest major. Majors published before this scheme existed have no per-major file — those fall back to root.
- **Fetch failed / offline:** the inline block above is empty or shows the failure line. Fall back to the installed package's types (`node_modules/@telicent-oss/ds/dist/export.d.ts`) and Storybook (https://telicent-oss.github.io/telicent-ds/), or ask — never guess the API.

Hand-maintained source behind the manifest: https://github.com/telicent-oss/telicent-ds/blob/main/docs/COMPONENTS.md
