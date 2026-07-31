# EliasApp Roadmap

This roadmap keeps future ideas separate from implemented status. Child-facing additions should stay simple, supervised, and low-pressure.

## Priority 1: Polish and Parent Confidence

- Keep documentation updated after feature changes.
- Add more local, parent-approved image assets for vehicles, tools, and machines.
- Add more soft sound effects through `public/media/sounds/`.
- Test the installed PWA flow on a phone or tablet.

## Priority 2: Growth Features

- Add unlockable vehicle color variants, stickers, or calm home themes.
- Add optional age/difficulty modes:
  - Easy: fewer items, slower pacing, stronger hints.
  - Medium: current default play.
  - Hard: more items, light memory or sequence challenges.
- Add a simple progress or sticker bar that rewards trying without pressure.

## Priority 3: New Activities

- Simple Sequence Builder: make and repeat visual patterns.
- Photo Capture Mode: parent-only screenshot/save flow for play moments.
- Mascot customization: a simple helper character that appears across sections.
- Peek/scratch mechanic for card-based games.

## Maintenance Rules

- Keep external links out of child-facing UI unless they are behind a parent-only area.
- Review every video before adding it.
- Prefer bundled/local assets over hotlinked media.
- Run `npm run build` before shipping.
