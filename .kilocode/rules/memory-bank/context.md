# Active Context: DND-AN Character Creator

## Current State

**App Status**: ✅ Full 9-step wizard + character sheet complete

DND-AN is a mobile-first D&D 5e character creator web app with a complete character creation wizard (9 steps) and a character sheet view for saved characters.

## Recently Completed

- [x] Replaced Next.js template with Vite + React scaffold
- [x] Configured Tailwind CSS 4 with dark fantasy theme (charcoal, parchment, burgundy, gold)
- [x] Added Google Fonts (Cinzel for titles, Inter for body) via CDN
- [x] Added Font Awesome 6 via CDN for icons
- [x] Implemented `src/utils/storage.js` with localStorage helpers (saveCharacter, loadCharacter, listCharacters, deleteCharacter)
- [x] Implemented `src/utils/navigation.jsx` context-based navigation with params support (useNavigate, useCurrentView, useNavigationParams)
- [x] Built `BottomNav.jsx` floating pill navigation with dragon hero button
- [x] Built `Home.jsx` with "My Characters" list and empty state
- [x] Built `CharacterLibrary.jsx` character list view
- [x] Built full 9-step wizard with separate component files in `src/components/wizard/`
- [x] Implemented all wizard steps: Identity, Race, Class, Abilities, Background, Skills, Equipment, Spells, Final Touches
- [x] Built `CharacterSheet.jsx` for viewing saved characters
- [x] Wired wizard save to navigate to character sheet
- [x] Verified `bun build`, `bun lint`, and `bun typecheck` all pass

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `index.html` | Vite entry with CDN fonts/icons | ✅ Ready |
| `src/main.jsx` | React entry point | ✅ Ready |
| `src/App.jsx` | Root component + NavigationProvider | ✅ Ready |
| `src/index.css` | Tailwind imports + custom theme | ✅ Ready |
| `src/utils/storage.js` | localStorage helper | ✅ Ready |
| `src/utils/navigation.jsx` | Navigation context with params | ✅ Ready |
| `src/components/BottomNav.jsx` | Floating bottom nav | ✅ Ready |
| `src/components/Wizard.jsx` | 9-step character wizard orchestrator | ✅ Ready |
| `src/components/wizard/` | 9 individual step components | ✅ Ready |
| `src/pages/Home.jsx` | Character list home | ✅ Ready |
| `src/pages/CharacterLibrary.jsx` | Character library view | ✅ Ready |
| `src/pages/CharacterSheet.jsx` | Character detail view | ✅ Ready |

## Quick Start Guide

### To run the dev server:

```bash
bun dev
```

### Wizard step components:

Located in `src/components/wizard/`:
- `StepIdentity.jsx` - Name (required), player name, alignment
- `StepRace.jsx` - Human, Elf, Dwarf, Halfling cards
- `StepClass.jsx` - Fighter, Wizard, Rogue cards with descriptions
- `StepAbilityScores.jsx` - Standard Array, Point Buy, Manual Entry
- `StepBackground.jsx` - Background, traits, ideals, bonds, flaws
- `StepSkills.jsx` - 18 skills checklist with info tooltips
- `StepEquipment.jsx` - Repeatable item list with placeholder hints
- `StepSpells.jsx` - Repeatable spell list with placeholder hints + skip button
- `StepFinalTouches.jsx` - Appearance fields and backstory

### Navigation with params:

```js
import { useNavigate, useNavigationParams } from '../utils/navigation.jsx'
navigate('character', { id: character.id })
const params = useNavigationParams()
```

### To add localStorage persistence:

Use `src/utils/storage.js`:
```js
import { saveCharacter, loadCharacter, listCharacters, deleteCharacter } from '../utils/storage.js'
```

## Pending Improvements

- [ ] Implement character editing (pre-fill wizard from saved character)
- [ ] Add ability score racial bonuses
- [ ] Implement full D&D 5e rules for races/classes
- [ ] Add skill proficiency logic
- [ ] Add equipment selection from predefined lists
- [ ] Add spell lists and spell slot tracking
- [ ] Add character deletion from Home view

## Session History

| Date | Changes |
|------|---------|
| 2026-08-17 | Built full 9-step character creation wizard with separate step components, CharacterSheet view, and navigation params support |
