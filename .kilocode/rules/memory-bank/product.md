# Product Context: DND-AN

## Why DND-AN Exists

D&D character creation often involves juggling paper sheets, dice, and rulebooks. DND-AN digitizes this process into a mobile-first web app that feels at home on a phone during a game session. It uses a dark fantasy aesthetic with gold and burgundy accents to evoke the feel of a D&D adventure, and stores everything locally so there's no account or login friction.

## Problems It Solves

1. **Friction**: No signup, no login, no syncing required - just open and create
2. **Mobile Experience**: Designed for narrow screens from the start, with bottom navigation and large tap targets
3. **Persistence**: localStorage keeps characters between sessions without a backend
4. **Visual Identity**: Dark fantasy theme with Cinzel headings and Font Awesome dragons makes character creation feel thematic
5. **Extensibility**: Clean component structure makes adding D&D rules straightforward

## How It Should Work (User Flow)

1. User opens DND-AN on their phone
2. Taps the dragon "New" button in the bottom nav
3. Steps through the wizard: Ability Scores → Race → Class → Skills → Equipment → Spells → Summary
4. Taps "Save Character" on the Summary step
5. Character is stored in localStorage and appears in the Home/Library list
6. User can browse saved characters and delete them as needed

## Key User Experience Goals

- **Mobile-First**: Single column, large buttons, bottom nav always reachable
- **Theme Consistency**: Dark charcoal backgrounds, parchment cards, burgundy accents, gold highlights
- **Low Friction**: No forms to sign up, no setup - just create
- **Progressive Disclosure**: Wizard breaks character creation into manageable steps
- **Offline Capable**: Works without internet after first load (CDN fonts/icons)

## What DND-AN Provides

1. **Visual Theme**: Dark fantasy palette, Cinzel + Inter fonts, Font Awesome dragon motif
2. **Navigation**: Floating pill bottom nav with Home, New Character (dragon), and Library
3. **Character Storage**: `dnd-char-<id>` keys with `dnd-char-index` for listing
4. **Wizard Shell**: 7-step progress indicator with Next/Back and Save
5. **Empty States**: Friendly prompts when no characters exist

## Integration Points

- **Storage**: Browser localStorage only
- **Icons**: Font Awesome 6 CDN
- **Fonts**: Google Fonts CDN (Cinzel, Inter)
- **No external APIs**: Everything runs client-side
