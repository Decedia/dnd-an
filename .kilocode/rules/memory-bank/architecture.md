# System Patterns: DND-AN

## Architecture Overview

```
src/
├── main.jsx                # React entry point
├── App.jsx                 # Root component + NavigationProvider
├── index.css               # Tailwind imports + custom theme
├── utils/
│   ├── storage.js          # localStorage helper
│   └── navigation.jsx      # Navigation context (useNavigate, useCurrentView)
├── components/
│   ├── BottomNav.jsx       # Floating bottom navigation
│   └── Wizard.jsx          # Multi-step character creation wizard
└── pages/
    ├── Home.jsx            # Character list home screen
    └── CharacterLibrary.jsx # Character library view
```

## Key Design Patterns

### 1. View-Based Routing

Uses React context for simple view-based routing instead of a router library:
- `currentView` state holds active screen: `'home'`, `'new'`, or `'library'`
- `useNavigate()` hook updates the view
- `NavigationProvider` wraps the app

### 2. Component Organization Pattern

```
src/components/
├── BottomNav.jsx       # Reusable navigation component
└── Wizard.jsx          # Multi-step wizard with progress indicator

src/pages/
├── Home.jsx            # Character list with empty state
└── CharacterLibrary.jsx # Character management view

src/utils/
├── storage.js          # localStorage CRUD helpers
└── navigation.jsx      # Navigation context provider + hooks
```

### 3. State Management

- `useState` for local component state (wizard step, character form data)
- React Context for shared navigation state
- No external state management library needed at this scale

### 4. Wizard Pattern

The character creator uses a step-based wizard:
- `STEPS` array defines step order
- `STEP_COMPONENTS` array maps index to component
- Progress bar shows completion via flex dots
- Next/Back buttons conditionally rendered
- Save on final step calls `onSave(character)` which writes to localStorage

## Styling Conventions

### Tailwind CSS Usage
- Utility classes directly on elements
- Custom theme colors defined in `@theme` block in `src/index.css`
- Mobile-first: default styles for narrow screens, `md:` for larger

### Custom Theme Colors
- `charcoal` / `charcoal-light` / `charcoal-lighter`: dark backgrounds
- `parchment` / `parchment-dark`: card and text backgrounds
- `burgundy` / `burgundy-dark`: accent colors
- `gold` / `gold-dark`: highlight and active states

### Common Patterns
```tsx
// Centered max-width container
<div className="max-w-lg mx-auto px-4 py-6">

// Card with rounded corners
<div className="bg-charcoal-light rounded-xl p-4">

// Floating bottom nav container
<div className="fixed bottom-4 left-4 right-4 z-50">
```

## File Naming Conventions

- Components: PascalCase (`BottomNav.jsx`, `Wizard.jsx`)
- Utilities: camelCase (`storage.js`, `navigation.jsx`)
- Pages: PascalCase (`Home.jsx`, `CharacterLibrary.jsx`)
- Directories: lowercase (`components/`, `pages/`, `utils/`)

## Storage Conventions

### localStorage Schema

- `dnd-char-index`: JSON array of `{ id, name }` objects
- `dnd-char-<id>`: JSON object of full character data

### Helper Functions

```js
import { saveCharacter, loadCharacter, listCharacters, deleteCharacter, generateId } from '../utils/storage.js'
```

## Mobile Layout Conventions

- Single column layout with `max-w-lg mx-auto`
- Padding `px-4` for comfortable touch targets
- Buttons use `rounded-full` with `py-3` for easy tapping
- Bottom nav fixed at `bottom-4` with `backdrop-blur` for elevation
- Dragon button centered and elevated (`-mt-6`) as the hero action
