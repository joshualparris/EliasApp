# EliasApp

EliasApp is a bright, toddler-friendly React and Vite app for Elias. It is built around garbage trucks, construction machines, cars, trucks, wheels, safe pretend tools, fixing, building, parent-approved videos, and simple tap games.

Repository: https://github.com/joshuaparris-max/EliasApp2.git

## Current State

The app is a working local-first play app. It includes the main child dashboard, themed activity sections, parent settings, parent resources, achievements, PWA metadata, local media fallbacks, and a set of toddler-safe games.

See:

- [Status](docs/status.md)
- [Roadmap](docs/roadmap.md)
- [Research Implementation Roadmap](docs/ResearchImplementationRoadmap.md)
- [Content and Safety](docs/content-and-safety.md)
- [Development](docs/development.md)

## Feature Summary

- Home dashboard with large touch cards.
- Garbage Trucks, Construction, Cars and Trucks, Tools, Screwdriver World, Things That Spin, Build and Fix, Vehicle Sounds, Watch and Learn, and Play Zone sections.
- Extra games for Sorting Station, Parking Challenge, Build a House, Sound Memory, and Paint Shop.
- Parent settings for sound, reduced motion, calm mode, Watch and Learn visibility, video card visibility, and achievement reset.
- Parent-approved video embeds using `youtube-nocookie.com`.
- Local-only achievements stored in `localStorage`.
- PWA install support through `manifest.webmanifest`, app icon metadata, and a small service worker.

## Safety Model

EliasApp is designed to be calm, mobile-first, and safe for young children:

- No login.
- No ads.
- No analytics or tracking.
- No comments or user-generated content.
- No autoplay videos.
- No random video feeds.
- No child-facing external links.
- Parent-reviewed videos and media only.

## Run Locally

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Deploy

Vercel defaults work well:

- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.

## Project Structure

```text
src/
  App.jsx
  components/
  data/
public/
  icons/
  media/
  manifest.webmanifest
  sw.js
docs/
```

Most app content is data-driven from `src/data/`. The dashboard sections live in `src/data/sections.js`.
