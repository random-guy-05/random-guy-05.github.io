# Copilot instructions (arnavmana-site)

## Build, test, preview

All commands are run from the repo root.

- Install: `npm install`
- Dev server: `npm run dev` (Vite)
- Production build: `npm run build` (TypeScript project refs build + `vite build`)
- Preview built site: `npm run preview`

### Tests (Vitest + Testing Library)

- Run all tests (CI mode): `npm run test` (runs `vitest run`)
- Watch mode: `npm run test:watch`
- Run a single test file: `npx vitest run src/App.test.tsx`
- Run tests matching a name/pattern: `npx vitest run -t "copies email"`

## High-level architecture

This is a static React + Vite portfolio site.

- Entry: `index.html` mounts `#root` and loads `src/main.tsx`.
- App shell: `src/App.tsx` orchestrates the whole page:
  - Pulls copy/content from `src/data/siteContent.ts` (typed content model).
  - Composes top-level UI: `TopNav`, `ProgressBar`, background visuals, and page sections.
  - Drives global UI signals via hooks:
    - `useScrollSignals()` -> scroll progress + nav hide/show
    - `useActiveSection([...ids])` -> reads section labels via `data-section-label` + IntersectionObserver
    - `useTypewriter()` + `usePrefersReducedMotion()` -> hero “current thread” text
    - `useCopyToClipboard()` -> copy email + toast lifecycle

### Sections and content flow

- Page content is split into “sections” under `src/sections/`.
- Sections receive typed slices of `siteContent` via props (preferred over hardcoding strings).
- Section navigation / active section text is driven by:
  - Section element `id` values (e.g. `hero`, `investigations`, `contact`)
  - `data-section-label` on each section (the label shown in the nav)

### Visual system

- Global styling lives in `src/styles/global.css` (CSS variables, layout, tone classes).
- Accent/theming uses the `AccentTone` union from `siteContent.ts`.
  - Example: `BackgroundBlobs` maps `AccentTone` -> CSS class (`tone-gold`, etc.).
  - Projects carry a `tone` field; `App` lifts “active tone” state based on the active project.

### “Reveal” animation primitive

- `src/components/Reveal.tsx` + `src/hooks/useReveal.ts` provide a single “reveal on scroll” primitive.
- `Reveal` defaults to visible when `IntersectionObserver` is unavailable (SSR/tests).
- Many components/sections wrap copy blocks with `Reveal` and use `delay="short|medium|long"`.

## Key conventions (repo-specific)

- Prefer updating copy/data in `src/data/siteContent.ts` instead of embedding strings in components.
  - `SiteContent` is strongly typed; keep new fields/types here.
- Section IDs + `data-section-label` are part of the navigation system:
  - If you add/reorder sections, update the `sectionIds` list in `src/App.tsx` to match.
- “Tone” is a first-class concept:
  - `ProjectItem.tone` is used for both visuals and state (active project -> background tone).
  - Keep tone values within the `AccentTone` union.
- Testing setup:
  - Vitest uses `jsdom` and loads `src/test/setup.ts`.
  - Existing tests stub browser APIs directly when needed (e.g., `matchMedia`, `scrollTo`, `navigator.clipboard`).
- TypeScript strictness is on (`strict`, `noUnusedLocals`, `noUnusedParameters`). Expect unused code to fail the build.

