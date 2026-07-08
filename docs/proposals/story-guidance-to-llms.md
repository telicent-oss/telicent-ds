# Component guidance from stories to llms.txt

Keep long-form component docs in one markdown file per component that the story shows and `llms.txt` links.

## Problem

Component guidance sits inline in `.stories.tsx` as `parameters.docs.description.component`. It is long and never reaches `llms.txt`. Pasting it in would bloat the reference.

## Change

- Write guidance in `<Component>.docs.md` beside the story
- The story imports it with `?raw` and sets `description.component`
- `build-llms.mjs` joins every `*.docs.md` into `llms/guidance.md`
- `llms.txt` links `guidance.md`

## Illustrated here

Button only:

- `Button.docs.md` holds the guidance, moved from the story
- `Button.stories.tsx` imports it
- `guidance.md` is generated and linked from `llms.txt`

## Not here

- The other 52 stories
- Per-story `.story` blurbs (Chip and friends)
- Figma screenshots as durable guidance sources
