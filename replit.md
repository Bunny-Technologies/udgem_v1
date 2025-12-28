# UdGEM - Udaya Green Economy Mission

## Overview

UdGEM is a web application designed to promote PM Surya Ghar rooftop solar awareness and collect leads from households in Andhra Pradesh and Telangana, India. The platform serves as a bridge between the government's PM Surya Ghar Yojana solar subsidy scheme and households looking to benefit from rooftop solar installations.

The application provides information about solar subsidies (up to Rs. 78,000), a subsidy calculator, eligibility checking, and application submission for interested households. It targets poor and middle-income families seeking to reduce electricity costs through solar energy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom UdGEM branding (deep blue #003b73, solar yellow #ffc400, green #008c4a)
- **Forms**: React Hook Form with Zod validation
- **Typography**: Poppins font family (Google Fonts)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **API Design**: RESTful JSON API with `/api` prefix
- **Validation**: Zod schemas shared between client and server

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Storage Pattern**: Repository pattern with `IStorage` interface supporting swappable implementations
- **Current Implementation**: In-memory storage (`MemStorage`) for development

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Custom build script using esbuild for server and Vite for client
- **Output**: Server bundled to `dist/index.cjs`, client to `dist/public`

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components
    pages/        # Route pages (Home, About, Apply, Contact, etc.)
    hooks/        # Custom React hooks
    lib/          # Utilities and API client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer
shared/           # Shared code between client/server
  schema.ts       # Drizzle schemas and Zod validation
```

### Key Design Decisions

1. **Shared Schema Validation**: Zod schemas defined in `shared/schema.ts` ensure type safety and validation consistency between frontend forms and backend API.

2. **Component Library**: shadcn/ui provides accessible, customizable components that follow Material Design principles adapted for government credibility.

3. **In-Memory Storage First**: Development uses `MemStorage` allowing rapid iteration without database setup. The `IStorage` interface enables easy migration to PostgreSQL.

4. **Single Page Application**: Client-side routing with server-side fallback to `index.html` for all non-API routes.

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations in `./migrations` directory
- **Session Store**: connect-pg-simple for session persistence (when using Postgres)

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: development/production mode
- `PORT`: Server port (optional, for custom deployments)

### Third-Party Services
- **Google Fonts**: Poppins font family loaded via CDN
- **External Reference**: Links to official PM Surya Ghar portal (pmsuryaghar.gov.in)

### Key Runtime Dependencies
- Express for HTTP server
- Drizzle ORM for database operations
- TanStack Query for API data fetching
- Radix UI primitives for accessible components
- Tailwind CSS for styling