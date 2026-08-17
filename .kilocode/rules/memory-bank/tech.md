# Technical Context: DND-AN

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Vite         | 6.x     | Build tool and dev server       |
| React        | 19.x    | UI library                      |
| Tailwind CSS | 4.x     | Utility-first CSS               |
| Font Awesome | 6.5.x   | Icon font via CDN               |
| Bun          | Latest  | Package manager & runtime       |

## Development Environment

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (for compatibility)

### Commands

```bash
bun install        # Install dependencies
bun dev            # Start dev server (http://localhost:5173)
bun build          # Production build
bun lint           # Run ESLint
bun typecheck      # Run TypeScript type checking
```

## Project Configuration

### Vite Config (`vite.config.js`)

- React plugin for JSX
- Dev server on port 5173

### TypeScript Config (`tsconfig.json`)

- Strict mode enabled
- Target: ESNext
- JSX: react-jsx

### Tailwind CSS 4 (`postcss.config.mjs`)

- Uses `@tailwindcss/postcss` plugin
- CSS-first configuration (v4 style)
- Custom theme: Cinzel + Inter fonts, dark fantasy palette (charcoal, parchment, burgundy, gold)

### ESLint (`eslint.config.mjs`)

- Flat config format (ESLint v9)
- React Hooks and React Refresh plugins

## Key Dependencies

### Production Dependencies

```json
{
  "react": "^19.2.3", // UI library
  "react-dom": "^19.2.3" // React DOM
}
```

### Dev Dependencies

```json
{
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^4.7.0",
  "autoprefixer": "^10.5.4",
  "postcss": "^8.5.6",
  "tailwindcss": "^4.1.17",
  "@tailwindcss/postcss": "^4.1.17",
  "typescript": "^5.9.3",
  "vite": "^6.4.3",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.1.1",
  "eslint-plugin-react-refresh": "^0.5.4",
  "globals": "^17.11.0"
}
```

## File Structure

```
/
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── bun.lock                # Bun lockfile
├── vite.config.js          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript config for Vite
├── postcss.config.mjs      # PostCSS (Tailwind) config
├── eslint.config.mjs       # ESLint configuration
├── index.html              # Vite entry HTML
├── public/                 # Static assets
└── src/                    # Source code
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component with navigation state
    ├── index.css           # Global styles + Tailwind imports
    ├── utils/
    │   ├── storage.js      # localStorage helper
    │   └── navigation.jsx  # Navigation context
    ├── components/
    │   ├── BottomNav.jsx   # Floating bottom navigation
    │   └── Wizard.jsx      # Multi-step character creation wizard
    └── pages/
        ├── Home.jsx        # Character list home screen
        └── CharacterLibrary.jsx # Character library view
```

## Technical Constraints

### Starting Point

- Mobile-first, single-page feel with view-based routing
- No backend, no login, no database
- localStorage for persistence only

### Browser Support

- Modern browsers (ES2020+)
- No IE11 support

### Performance Considerations

- Tree-shaking enabled by default
- Tailwind CSS purges unused styles

## Deployment

### Build Output

- Static assets in `dist/`
- Can be deployed to any static host (Vercel, Netlify, etc.)

### Environment Variables

- None required for base template
- Add as needed for features
- Use `.env.local` for local development
