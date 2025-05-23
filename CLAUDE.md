# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **miraicn/ui** - a fork of shadcn/ui, an open-source component library that provides copy-and-paste React components built with Tailwind CSS, Radix UI, and TypeScript. Unlike traditional component libraries, miraicn/ui allows developers to copy components directly into their projects for full customization control.

**Note**: While this project is branded as miraicn/ui, the codebase still uses "shadcn" for package names and commands to maintain compatibility.

## Essential Commands

### Development

```bash
# Install dependencies (uses pnpm)
pnpm install

# Run the main documentation website (port 3333)
pnpm www:dev

# Run the v4 app (Tailwind CSS v4 version)
pnpm v4:dev

# Run the CLI in development mode
pnpm shadcn:dev

# Run both registry and CLI development
pnpm dev
```

### Testing & Quality

```bash
# Run all tests
pnpm test

# Run tests for specific workspace
pnpm --filter=shadcn test

# Lint code
pnpm lint
pnpm lint:fix

# Type checking
pnpm typecheck

# Format code
pnpm format:write

# Run all checks (lint, typecheck, format)
pnpm check
```

### Building

```bash
# Build all workspaces
pnpm build

# Build component registry (REQUIRED after component changes)
pnpm build:registry

# Build specific workspace
pnpm --filter=www build
```

## Architecture & Structure

### Monorepo Organization

- **pnpm workspaces** with Turborepo for orchestration
- **apps/**
  - `www` - Main documentation site (Next.js 14, MDX content)
  - `v4` - Tailwind CSS v4 version (Next.js 15)
- **packages/**
  - `shadcn` - CLI tool for adding components
  - `cli` - Basic CLI utilities

### Component Registry System

Components are not distributed as npm packages but through a registry system:
- **Style Variants**: Each component exists in multiple styles (`default`, `new-york`)
- **Registry Path**: `apps/www/registry/{style}/{type}/`
- **Types**: ui (components), example, block, hook, lib, theme
- **Build Process**:
  - Components are processed with ts-morph
  - Registry JSON generated at `/public/r/`
  - Must run `pnpm build:registry` after changes

### Key Development Patterns

1. **Component Development**:
   - Components must be added to ALL style variants
   - Each component needs TypeScript definitions
   - Uses Radix UI primitives for accessibility
   - Tailwind CSS for styling with CSS variables

2. **Testing**:
   - Vitest for unit tests
   - Test files co-located with source
   - Focus on utility functions and CLI commands

3. **Documentation**:
   - MDX files in `content/docs/`
   - Component examples with live previews
   - Code blocks with copy functionality

## Critical Workflows

### Adding/Modifying Components

1. Create/modify component in `registry/{style}/ui/`
2. Update component in ALL style variants
3. Add/update examples in `registry/{style}/example/`
4. Run `pnpm build:registry`
5. Test with `pnpm www:dev`

### CLI Development

1. Start registry server: `pnpm www:dev`
2. Run CLI dev: `pnpm shadcn:dev`
3. Test commands: `pnpm shadcn <command>`

### Releasing Changes

- Uses changesets for version management
- Follow conventional commits: `feat:`, `fix:`, `docs:`, etc.
- Run `pnpm changeset` to document changes