# EliasApp Development

## Stack

- React 18
- Vite 5
- Plain CSS
- Browser `localStorage`
- Static assets under `public/`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Data Files

Edit content in:

- `src/data/sections.js`
- `src/data/vehicles.js`
- `src/data/tools.js`
- `src/data/constructionMachines.js`
- `src/data/garbageTrucks.js`
- `src/data/spinners.js`
- `src/data/videos.js`
- `src/data/games.js`
- `src/data/miniGames.js`
- `src/data/screwdrivers.js`

Common item fields:

- `id`
- `title`
- `emoji`
- `description`
- `fact`
- `image`
- `sound`
- `category`

## Release Checklist

- Run `npm run build`.
- Smoke test the dashboard and each major section.
- Test parent settings.
- Confirm no new child-facing external links were added.
- Confirm new media is local or parent-approved.
- Commit and push to `origin/main`.
