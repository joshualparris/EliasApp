# EliasApp Content and Safety

## Audience

EliasApp is for toddler and preschool use with parent supervision. It favors large touch targets, short interactions, calm feedback, and familiar interests such as trucks, tools, wheels, and building.

## Safety Commitments

- No login, accounts, analytics, comments, ads, purchases, or social sharing.
- No child-facing external links.
- No random video feeds.
- No video autoplay.
- Sound is off by default unless a parent enables it.
- Real tool play should always be supervised outside the app.

## Adding Images

Put images in:

```text
public/media/images/
```

Then update the relevant `image` field in `src/data/`.

Recommended screwdriver filenames:

- `phillips.jpg`
- `flathead.jpg`
- `stubby.jpg`
- `long.jpg`
- `toy-screwdriver.jpg`
- `electric-screwdriver.jpg`

Use images around 1200px wide or smaller. If a screwdriver photo is missing, the app uses local SVG fallback illustrations.

## Adding Sounds

Put sound files in:

```text
public/media/sounds/
```

Then add a `sound` field to the matching data item. Keep sounds short, soft, and non-startling.

## Adding Videos

Video data lives in:

```text
src/data/videos.js
```

Each video should be watched and approved by a parent before being added. Prefer privacy-enhanced YouTube embeds or local video files. Do not add playlists, channels, feeds, or recommendation surfaces.

## Parent-Reviewed Resources

Resources that may inspire future parent-guided play:

- Toy Theater Build: https://toytheater.com/build/
- Toy Theater: https://toytheater.com/
- Code.org: https://code.org/
- ScratchJr: https://www.scratchjr.org/
- LEGO DUPLO World
- Toca Boca World
- Dr. Panda Trucks

These are references for adults, not child-facing destinations by default.
