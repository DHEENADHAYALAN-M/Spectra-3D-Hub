# Spectra 3D Hub

## Overview

Spectra 3D Hub is a modern, futuristic website for a 3D printing services business. The application showcases premium 3D printing services including ambient lighting, home décor, custom keychains, aerospace models, startup prototypes, and artistic prints. The site features a dark theme with neon cyan/blue accents, smooth animations, custom cursor effects, and WhatsApp integration for instant quotes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (dark mode with neon accents)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and interactive effects
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Development**: tsx for running TypeScript directly
- **Static Serving**: Express serves built client assets in production
- **API Pattern**: RESTful endpoints prefixed with `/api`

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # React components including UI and page sections
    pages/        # Page components (Home, NotFound)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client setup
server/           # Backend Express server
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface (currently in-memory)
  static.ts       # Static file serving
  vite.ts         # Vite dev server integration
shared/           # Shared code between client and server
  schema.ts       # Database schema and Zod validation
```

### Design System
- Dark theme foundation with neon cyan (`#00E0E0`) and electric blue accents
- Custom cursor with glowing dot and delayed ring follower
- Glow effects, tech-style borders, and luminous visual treatments
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- Responsive design with mobile-first approach

### Key Features
- Hero section with background image and animated content
- Service cards with hover video effects
- Scroll-triggered animations throughout
- Gallery with category filtering and modal views
- WhatsApp integration for instant quote requests
- Custom interactive cursor (desktop only)

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table defined in `shared/schema.ts`
- **Validation**: Drizzle-Zod for schema-to-validation integration
- **Storage**: Currently uses in-memory storage (`MemStorage`), ready for PostgreSQL when `DATABASE_URL` is configured

### Third-Party Services
- **WhatsApp Business**: Quote requests via WhatsApp deep links (phone: 916385444407)
- **Google Fonts**: Space Grotesk, Inter, JetBrains Mono
- **Unsplash**: Gallery placeholder images

### Key NPM Packages
- `framer-motion`: Animation library for React
- `@tanstack/react-query`: Server state management
- `wouter`: Lightweight React router
- `react-icons`: Icon library (social icons)
- `lucide-react`: Icon library (UI icons)
- `zod`: Runtime type validation
- `express-session` / `connect-pg-simple`: Session management (ready for auth)
- `vaul`: Drawer component
- `embla-carousel-react`: Carousel functionality
- `recharts`: Charting library (available but not currently used)