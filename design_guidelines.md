# Design Guidelines: Pixelated Chibi Personal Blog

## Design Approach
**Reference-Based: Retro Pixel Gaming Aesthetic**

Drawing inspiration from early 2000s pixel art blogs, retro RPG interfaces (Pokémon, early Final Fantasy menu systems), and pixel art communities like Habitica. The design combines nostalgic pixel-perfect precision with modern chibi cuteness, creating a homey digital space that feels like a cozy retro game hub.

**Core Principle**: Crisp, blocky pixel aesthetic with hard corners and deliberate grid-based layouts. Every element should feel intentionally pixelated, not accidentally low-res.

---

## Typography

**Primary Font**: "Press Start 2P" (Google Fonts) - pixel-perfect retro gaming font
- Headings (H1): 24px, uppercase for major titles
- Headings (H2/H3): 16px-20px for section headers and blog titles
- Body Text: 14px-16px, use "DotGothic16" or "VT323" for better readability on longer content

**Hierarchy**:
- Page titles: Large pixel font, centered or left-aligned with pixel border decorations
- Blog post titles: Medium pixel font with pixelated underline or bracket decorations [TITLE]
- Timestamps/metadata: Small pixel font, monospaced styling
- Body content: Readable pixel font with generous line-height (1.8-2.0) to prevent eye strain

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 8, 12, 16** (p-4, m-8, gap-12, py-16)
- These create pixel-perfect 4px grid alignment
- Use consistent 8px increments for section spacing
- Container padding: px-4 on mobile, px-8 on desktop

**Grid Structure**:
- Max-width container: max-w-6xl for main content area
- Timeline layout: Single column on mobile, can use sidebar navigation on desktop (sidebar: w-64 with pixel borders)
- Blog post content: max-w-3xl for optimal reading
- Grid-based layouts use gap-8 or gap-12 for consistent pixel spacing

**Pixel-Perfect Borders**: 
- Use 2px or 4px solid borders throughout (border-2, border-4)
- NO rounded corners (rounded-none everywhere)
- Double borders for emphasis: nested divs with border gaps
- Pixel-style shadows: Use hard-edge box-shadows (not blurred): `shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]`

---

## Component Library

### Navigation
**Pixel Menu Bar** (sticky top navigation):
- Fixed height bar (h-16) with hard pixel border bottom (border-b-4)
- Logo/site title on left with pixelated character sprite icon
- Navigation links displayed as pixel "buttons" with bracket styling: [ Home ] [ Timeline ] [ About ]
- Active state: Inverted pixel box or different border treatment
- Mobile: Hamburger icon as 3-line pixel stack, expands to full-width pixel menu

### Timeline View
**Chronological Blog Feed**:
- Each blog entry as a distinct pixel card with hard borders (border-4)
- Card structure:
  - Date stamp in pixel corner badge (absolute positioned with border)
  - Blog title with pixelated icon/emoji
  - Excerpt preview (2-3 lines) with pixel "Read More" button
  - Thumbnail image with hard pixel border frame
- Cards use deliberate spacing (space-y-8) creating clean vertical rhythm
- Hover state: Translate slightly with hard shadow increase (not smooth transition)

### Blog Post Page
**Single Post Layout**:
- Hero section with post title, large pixelated decorative header border
- Date/metadata displayed in pixel UI box
- Content area with pixel frame border surrounding the text
- Images displayed in hard-bordered frames with optional pixel corner decorations
- Navigation arrows (Previous/Next posts) as large pixel arrow sprites

### Image Display
- All images wrapped in thick pixel borders (border-4 to border-8)
- Optional pixel "photo corner" decorations in CSS (small squares at corners)
- Gallery grids use hard gaps (gap-4) with no border-radius
- Lightbox/modal for full-size images maintains pixel border treatment

### Buttons & Interactive Elements
**Pixel Button Style**:
- Hard rectangular shape (rounded-none)
- Thick borders (border-2 or border-4)
- Deliberate padding (px-6 py-3 for standard, px-8 py-4 for large)
- Text in pixel font, uppercase or bracketed: [CLICK ME]
- Hover: Hard shadow shift effect or border thickness change (no smooth transitions)
- Use 8-bit style pseudo-3D effect: nested borders or offset shadows

### Cursor Sprite Plugin
**Animated Pixel Companion**:
- Small chibi pixel sprite (32x32px or 48x48px)
- Follows mouse with slight delay (easing for character personality)
- Sprite animations: idle state, chasing state, interaction states
- Trail effect: optional pixelated particle trail
- Implement with JavaScript tracking mouse position, updating sprite div position
- CSS: `pointer-events: none` on sprite container, absolute positioning

### Footer
**Pixel Info Bar**:
- Full-width pixel border top (border-t-4)
- Grid layout for: Social icons (pixelated), copyright text, "Made with <pixel heart>"
- Social icons as 24x24px or 32x32px pixel sprites with hover brightness change
- Background can use subtle pixel pattern texture

---

## Visual Enhancements

### Pixel Decorations
- Corner brackets: Use CSS pseudo-elements or Unicode characters (╔ ╗ ╚ ╝)
- Divider lines: Pixelated HR with repeating pattern or thick solid borders
- Background patterns: Subtle pixel grid, tiny pixel dots, or 8-bit texture overlays
- Icon set: Use pixel art icons throughout (hearts, stars, arrows as pixel sprites)

### Animations (Minimal & Purposeful)
- Cursor sprite chase animation only
- Subtle pixel "blink" or "shimmer" on buttons (pixel-by-pixel reveal, not smooth fade)
- Page transitions: Hard cut or pixel wipe effect (optional)
- NO smooth hover transitions - use instant state changes for authentic pixel feel

### Accessibility
- Ensure pixel fonts meet WCAG contrast ratios
- Provide larger pixel text for body content (14-16px minimum)
- Hard borders create clear focus indicators for keyboard navigation
- Alt text for all pixel sprites and decorative elements

---

## Images

**Homepage/Timeline**:
- Thumbnail images for each blog post (400x300px, hard pixel border frames)
- Optional header banner: Pixelated chibi character illustration or scene (1200x400px)
- About section: Pixelated avatar/character portrait (200x200px square in pixel frame)

**Blog Posts**:
- Inline images with pixel frame borders, full-width or content-width
- Image galleries in grid layout (grid-cols-2 md:grid-cols-3) with uniform hard gaps

**Decorative**:
- Small pixel sprite icons throughout (16x16px, 24x24px)
- Pixel divider graphics between sections
- Background subtle texture (optional tiled pixel pattern)

---

## Responsive Behavior

**Mobile (base)**: Single column, stacked timeline, simplified pixel nav menu
**Tablet (md:)**: Introduce 2-column grids where appropriate, maintain pixel precision
**Desktop (lg:)**: Full layout with optional sidebar, max-width constraints, larger pixel decorations

Maintain hard corners and pixel aesthetics across all breakpoints. Scale up pixel sizes proportionally rather than introducing smooth curves.