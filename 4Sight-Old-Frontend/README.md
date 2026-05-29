# This is Marketing 4Sight Frontend

A modern, data-driven SEO and business automation platform frontend built with React and Vite. Deployed on Vercel, backed by a Node.js REST API.

## Global Principles

- **Frontend is a presentation + orchestration layer** – Backend owns SEO logic, scoring, and automation
- **Frontend never infers business truth** – All dynamic data enters through APIs
- **Every component tolerates empty, loading, and error states**

## Technology Stack

| Dependency | Version | Purpose |
|---|---|---|
| **React** | 19 | UI library |
| **Vite** | 7 | Build tool and dev server |
| **React Router DOM** | 7 | Client-side routing |
| **Framer Motion** | 12 | Animations and transitions |
| **Lucide React** | 0.561 | Icon system |
| Vanilla CSS | – | Styling with CSS variables (dark theme) |

## Project Structure

```
src/
├── assets/                  # Static images and videos
├── components/
│   ├── auth/                # AuthModal, LoginForm, SignupForm, AuthGuard, ProtectedRoute
│   ├── community/           # PollCard, ToolCard, ResourceCard
│   ├── home/                # HeroSection, EthosSection, ContactForm
│   ├── knowledge/           # ArticleFeed, ArticleCard, ArticleDetail
│   ├── layout/              # Header, Footer, MainLayout, SocialSidebar
│   ├── product/             # FeatureGrid, ProductDemoVideo, TestimonialsSection
│   ├── seo-grader/          # WebsiteInputStep, QuestionnaireStep, GraderReport, GraderProgress, GraderError, GraderLoading
│   └── ui/                  # Badge, Button, Card, Input, Select (reusable primitives)
├── context/
│   ├── AuthContext.jsx      # JWT auth state (login, signup, logout, modal)
│   └── ThemeContext.jsx     # Theme management
├── data/
│   └── blogContent1.js      # Static blog content
├── hooks/
│   ├── useFetch.js          # Generic data-fetching hook
│   └── useForm.js           # Form state and validation hook
├── pages/                   # Route-level page components
├── services/
│   ├── apiConfig.js         # Base URL + authenticated fetch helper
│   ├── authService.js       # Auth API calls + JWT/localStorage management
│   ├── engagementService.js # Engagement tracking
│   └── pollService.js       # Community poll API calls
├── styles/
│   └── index.css            # Design tokens (CSS variables)
├── App.jsx                  # Root router and providers
└── main.jsx                 # Entry point
```

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home page – Hero, Ethos, Contact |
| `/product` | Public | Product showcase with features and testimonials |
| `/knowledge` | Public | Knowledge base article feed |
| `/knowledge/:slug` | Public | Article detail page |
| `/community` | Public | Community hub – polls, tools, resources |
| `/community/seo-maturity-grader` | Public | SEO Maturity Grader (multi-step wizard) |
| `/community/seo-analyzer` | Protected | SEO Analyzer tool |
| `/community/roi-calculator` | Protected | ROI Calculator |
| `/community/trend-tracker` | Protected | Trend Tracker (coming soon) |
| `/community/ai-assistant` | Protected | AI Assistant (coming soon) |
| `/login` | Public | Login page (standalone, outside main layout) |
| `/signup` | Public | Sign-up page (standalone, outside main layout) |

Protected routes redirect unauthenticated users via `ProtectedRoute` and the global `AuthModal`.

## Authentication

- JWT-based authentication against the 4Sight backend API
- Token and user object are persisted in `localStorage` under keys `foresight_auth_token` / `foresight_user`
- `AuthContext` is the single source of truth – components never read `localStorage` directly
- A global `AuthModal` (login/signup) overlays the app and can be triggered from any protected action

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API base URL (defaults to the production backend if omitted)
VITE_API_URL=https://foursightbackend.onrender.com

# SEO Grader API URL (can point to a different service)
VITE_SEO_GRADER_API_URL=https://foursightbackend.onrender.com
```

## Backend API Contracts

### Auth
```
POST /auth/register   { name, email, password }
POST /auth/login      { email, password }
```

### Contact Form
```
POST /contact
{
  name: string,
  email: string,
  organization?: string,
  queryType: 'general' | 'sales' | 'support' | 'partnership',
  message: string
}
```

### Articles
```
GET /content/articles
GET /content/articles/:slug
```

### SEO Maturity Grader
```
POST /seo-grader/analyze
{
  url: string,
  category: string,
  keywords: string[],
  answers: { [questionId: string]: number }   // 1–5 scale
}
```

## Design System

All design tokens live in [src/styles/index.css](src/styles/index.css) as CSS variables:

- Color palette (dark theme)
- Typography scale
- Spacing system
- Border radius
- Transitions and animations

## Deployment

The app is deployed on **Vercel**. [vercel.json](vercel.json) configures:

- SPA fallback rewrite (`/*` → `/`) for client-side routing
- Long-term cache headers for hashed static assets under `/assets/`

## Development Guidelines

1. **State management** – Local state for UI; fetch at page boundary, pass down as props
2. **Animations** – Framer Motion for hero sections and emphasis; keep forms and data feeds animation-free
3. **Auth gating** – Wrap protected pages in `<ProtectedRoute>`; never duplicate auth checks inside components
4. **API calls** – Always use `apiRequest()` from `services/apiConfig.js` so the auth token is attached automatically
5. **CSS** – Co-locate a `.css` file next to every component; use CSS variables from the design token file instead of hard-coded values
3. **API Integration**: All API calls through custom `useFetch` hook
4. **Form Handling**: Use `useForm` hook with validation

## License

Private - All rights reserved.

## API Connection

This frontend is configured to connect to the dedicated backend:
- **Default Backend URL**: `https://foursightbackend.onrender.com`
- **Environment Variable**: `VITE_SEO_GRADER_API_URL` (Overrides default)

