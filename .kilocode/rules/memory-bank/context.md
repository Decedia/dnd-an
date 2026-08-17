# Active Context: DND-AN Character Creator

## Current State

**App Status**: ✅ Foundation complete

DND-AN is a mobile-first D&D 5e character creator web app. The foundation is scaffolded with Vite + React + Tailwind CSS 4, featuring a dark fantasy theme with floating bottom navigation, localStorage persistence, and a multi-step wizard shell.

## Recently Completed

- [x] Replaced Next.js template with Vite + React scaffold
- [x] Configured Tailwind CSS 4 with dark fantasy theme (charcoal, parchment, burgundy, gold)
- [x] Added Google Fonts (Cinzel for titles, Inter for body) via CDN
- [x] Added Font Awesome 6 via CDN for icons
- [x] Implemented `src/utils/storage.js` with localStorage helpers (saveCharacter, loadCharacter, listCharacters, deleteCharacter)
- [x] Implemented `src/utils/navigation.jsx` context-based navigation (useNavigate, useCurrentView)
- [x] Built `BottomNav.jsx` floating pill navigation with dragon hero button
- [x] Built `Home.jsx` with "My Characters" list and empty state
- [x] Built `CharacterLibrary.jsx` character list view
- [x] Built `Wizard.jsx` multi-step shell with 7 placeholder steps (Ability Scores, Race, Class, Skills, Equipment, Spells, Summary)
- [x] Implemented progress indicator and Next/Back navigation in wizard
- [x] Wired wizard Save button to localStorage via `saveCharacter()`
- [x] Verified `bun build`, `bun lint`, and `bun typecheck` all pass

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `index.html` | Vite entry with CDN fonts/icons | ✅ Ready |
| `src/main.jsx` | React entry point | ✅ Ready |
| `src/App.jsx` | Root component + NavigationProvider | ✅ Ready |
| `src/index.css` | Tailwind imports + custom theme | ✅ Ready |
| `src/utils/storage.js` | localStorage helper | ✅ Ready |
| `src/utils/navigation.jsx` | Navigation context | ✅ Ready |
| `src/components/BottomNav.jsx` | Floating bottom nav | ✅ Ready |
| `src/components/Wizard.jsx` | 7-step character wizard | ✅ Ready |
| `src/pages/Home.jsx` | Character list home | ✅ Ready |
| `src/pages/CharacterLibrary.jsx` | Character library view | ✅ Ready |

## Current Focus

Foundation is complete. Next steps depend on user requirements:

1. Implement race/class rules and stat calculations
2. Add skill selection and equipment logic
3. Add spell lists and selection
4. Implement character editing (load saved character into wizard)
5. Add character deletion from Home view

## Quick Start Guide

### To run the dev server:

```bash
bun dev
```

### To add a new wizard step:

Edit `src/components/Wizard.jsx`:
1. Add step name to `STEPS` array
2. Create a new `StepXxx` component
3. Add it to `STEP_COMPONENTS` array

### To add localStorage persistence:

Use `src/utils/storage.js`:
```js
import { saveCharacter, loadCharacter, listCharacters, deleteCharacter } from '../utils/storage.js'
```

## Pending Improvements

- [ ] Implement character editing (pre-fill wizard from saved character)
- [ ] Add character detail/view screen
- [ ] Implement D&D 5e rules for ability scores, races, classes
- [ ] Add skill selection with proficiency logic
- [ ] Add equipment selection
- [ ] Add spell lists and spell slot tracking

## Session History

| Date | Changes |
|------|---------|
| 2026-08-17 | Scaffolded DND-AN with Vite + React + Tailwind, built Home, BottomNav, Wizard, and storage plumbing |
