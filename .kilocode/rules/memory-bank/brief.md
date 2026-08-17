# Project Brief: DND-AN

## Purpose

DND-AN is a mobile-first D&D 5e character creator web app. It provides a themed, step-by-step wizard for creating and saving player characters directly in the browser using localStorage. No backend, login, or database is required.

## Target Users

- D&D players who want to quickly create and store character sheets on their phone
- Users building a lightweight, offline-capable character builder
- Teams needing a simple, shareable character creation tool

## Core Use Case

Users navigate a floating bottom tab bar with three primary actions: Home (character list), New Character (multi-step wizard), and Library (character management). The wizard guides users through Ability Scores, Race, Class, Skills, Equipment, Spells, and a Summary step. Characters persist in localStorage and can be listed, edited, and deleted.

## Key Requirements

### Must Have

- Vite + React + Tailwind CSS 4 foundation
- Mobile-first layout with large tap targets
- Floating bottom navigation with dragon hero button
- Dark fantasy theme (charcoal, parchment, burgundy, gold)
- Cinzel + Inter fonts via Google Fonts CDN
- Font Awesome icons via CDN
- localStorage persistence with `dnd-char-<id>` keys
- Character index stored under `dnd-char-index`
- Multi-step wizard with progress indicator and Next/Back navigation
- Save on last step writes to localStorage

### Nice to Have

- Character editing (pre-fill wizard from saved data)
- Character deletion from list views
- Full D&D 5e rule implementation (future)
- Spell list UI and equipment selection (future)

## Success Metrics

- Passing build, lint, and typecheck
- Clean, mobile-first UI with no horizontal overflow
- Characters persist across browser sessions

## Constraints

- No backend, no login, no database
- Framework: Vite + React 19 + Tailwind CSS 4
- Package manager: Bun
- localStorage only for persistence
