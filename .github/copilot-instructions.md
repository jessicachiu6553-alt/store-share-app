# Store-Share App: AI Coding Agent Instructions

## Project Overview
A React + TypeScript authentication demo application using Zustand for state management. The app implements route protection based on auth state, with localStorage persistence.

**Stack:** React 19, TypeScript 5.9, Zustand 5.0.8, React Router 7.9.5, Create React App

## Architecture & Data Flow

### Core State Management Pattern (Zustand)
- **Single store:** `src/store/useAuthStore.ts` - all auth state centralized
- **Store structure:** `{ user, isAuthenticated, login, logout, initializeAuth }`
- **localStorage persistence:** Auth data stored as `authUser` JSON string; restored on app mount
- **Usage:** Components call `useAuthStore((state) => state.PROPERTY)` - subscriptions are fine-grained (component only re-renders if selected property changes)

### Route Protection
- `App.tsx` wraps the home route in `<ProtectedRoute>` component
- `ProtectedRoute` reads `isAuthenticated` from store; redirects unauthenticated users to `/login`
- Run `initializeAuth()` on app mount (`useEffect` in `App`) to restore persisted auth state

### Component Hierarchy
```
App (initializes auth, defines routes)
├── NavTopbar (displays auth status, logout)
├── ProtectedRoute → HomePage (displays user info)
└── LoginPage (form submission updates store)
```

**Key pattern:** Components select only the store slice they need; avoid subscribing to entire store state.

## Development Workflows

### Start Development
```bash
npm start
# Opens http://localhost:3000; auto-reloads on file changes
```

### Run Tests
```bash
npm test
# Interactive watch mode; tests use React Testing Library
# Key config: `setupTests.js` (DOM setup), `App.test.ts` (integration example)
```

### Build for Production
```bash
npm run build
# Outputs optimized bundle to `build/` folder
```

## Project Conventions & Patterns

### File Organization
- **Components** (`src/components/`): Reusable UI elements (NavTopbar, NavPane)
- **Pages** (`src/pages/`): Route-level components (HomePage, LoginPage)
- **Store** (`src/store/`): Zustand stores (useAuthStore)
- Each component exports default; imports use destructuring for hooks/stores

### Styling Pattern
- Inline styles via `Record<string, React.CSSProperties>` objects
- Example: `const styles = { nav: { display: 'flex', ... } }` in `NavTopBar.tsx`
- No external CSS framework; styles co-located with components

### TypeScript Usage
- **Strict mode enabled** (`tsconfig.json`)
- React imports: `import { type JSX }` for type imports (avoid cluttering value namespace)
- Store types: Interface `AuthState` defines shape; `create<AuthState>()` ensures type safety
- Component props: Use `React.CSSProperties` for style objects; `FormEvent` for event handlers

### Form Handling
- Controlled components with `useState` for input fields (see `LoginPage.tsx`)
- Form submission prevents default, updates store, then navigates
- Demo auth: accepts any non-empty username/password pair

## Critical Integration Points

1. **Auth Flow:**
   - Login form → `useAuthStore.login()` → localStorage → re-render subscribers
   - Logout → `useAuthStore.logout()` → clear localStorage → navigate to `/login`

2. **Route Navigation:**
   - `useNavigate()` after successful auth actions (e.g., post-login navigate to `/`)
   - Zustand state change triggers component re-render → UI reflects auth status

3. **Component Mounting:**
   - `App` calls `initializeAuth()` in `useEffect(() => { ... }, [initializeAuth])` to hydrate store from localStorage on load

## Common Tasks

### Add a New Authenticated Page
1. Create component in `src/pages/`
2. Add route in `App.tsx` inside `<ProtectedRoute>`
3. Use `useAuthStore` to access user data if needed

### Add UI to NavPane
`NavPane.tsx` is empty; follow `NavTopbar.tsx` pattern—import `useAuthStore`, define styles inline

### Extend Auth Store
Modify `useAuthStore` interface and reducer functions; components subscribing to new state auto-update

## Testing Notes
- Tests use `@testing-library/react` (user-centric queries preferred)
- `setupTests.js` configures jest-dom matchers
- Example: `App.test.ts` demonstrates integration testing approach
