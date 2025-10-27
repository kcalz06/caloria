# Chibi Pixel Blog Template

A pixelated, chibi-style personal blog website with retro gaming aesthetics and a custom animated cursor sprite.

## Project Overview

This is a read-only blog template designed with a pixel art aesthetic. The owner manages blog posts via code, while visitors can browse the timeline, read posts, and enjoy the cozy pixel-themed interface.

## Key Features

- **Timeline View**: Chronological display of all blog posts with previews
- **Blog Detail Pages**: Full blog post view with formatted content and images
- **About Page**: Personal information and interests section
- **Custom Pixel Cursor**: Animated chibi sprite that smoothly follows the mouse cursor
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Pixel-Perfect Design**: Hard corners, retro fonts, and 8-bit aesthetic throughout

## Architecture

### Frontend
- **Framework**: React with Vite
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom pixel-art theming
- **State Management**: TanStack Query for data fetching
- **Fonts**: Press Start 2P (headings), DotGothic16, VT323 (body text)

### Backend
- **Server**: Express.js
- **Storage**: In-memory storage with sample blog posts
- **API Routes**:
  - `GET /api/blog-posts` - Returns all blog posts sorted by date
  - `GET /api/blog-posts/:id` - Returns single blog post

### Data Model

```typescript
BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string | null;
  publishedAt: Date;
}
```

## Managing Blog Posts

Blog posts are managed in `server/storage.ts`. To add a new post:

1. Edit the `initializeSamplePosts()` method in `server/storage.ts`
2. Add a new blog post object to the `samplePosts` array:

```typescript
{
  id: randomUUID(),
  title: "your post title",
  excerpt: "short preview text...",
  content: "Full blog post content here",
  imageUrl: "/path/to/image.png" as string, // or null
  publishedAt: new Date("2025-10-27"),
}
```

3. Restart the server to see changes

## Design System

### Colors
- Pixel-themed palette with purples and pinks for primary colors
- Soft pastels for accents
- High contrast borders (2px-4px) throughout
- Hard shadows for depth (no blur)

### Typography
- **Headings**: Press Start 2P (pixel font)
- **Body**: VT323/DotGothic16 for readability
- **Spacing**: 8px grid system (p-4, m-8, gap-12)

### Components
- All borders are hard corners (border-radius: 0)
- 4px borders on cards and major elements
- Pixel-style box shadows with no blur
- Bracket decorations (╔═══ TITLE ═══╗) for emphasis

## Project Structure

```
client/
  src/
    components/
      BlogCard.tsx          - Blog post preview card
      Footer.tsx            - Site footer
      Header.tsx            - Navigation header
      PixelCursor.tsx       - Animated cursor sprite
      ThemeToggle.tsx       - Dark/light mode toggle
    pages/
      About.tsx             - About page
      BlogDetail.tsx        - Individual blog post view
      Timeline.tsx          - Homepage with all posts
    App.tsx                 - Main app with routing

server/
  storage.ts              - In-memory data storage
  routes.ts               - API route handlers

shared/
  schema.ts               - TypeScript types for blog posts

attached_assets/
  generated_images/       - Pixel art images for blog
```

## Running the Project

The workflow "Start application" runs `npm run dev` which:
- Starts the Express backend on port 5000
- Serves the Vite frontend
- Enables hot module reloading

Visit the application at the provided Replit URL.

## Recent Changes

- **2025-10-27**: Initial creation with complete pixel blog template
  - Implemented timeline, blog detail, and about pages
  - Added custom pixel cursor with smooth following animation
  - Created pixel-art themed design system with hard corners
  - Set up dark/light mode theming
  - Added 3 sample blog posts with pixel art images
