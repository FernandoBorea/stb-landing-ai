## Relevant Files

- `website/index.html` - Main landing page (all sections + Tailwind CDN include).
- `website/assets/css/site.css` - Small custom CSS (fonts, CSS variables/tokens, marquee animation, focus styles not covered by Tailwind).
- `website/assets/js/site.js` - Vanilla JS interactions (menu open/close + focus handling, carousel pause-on-hover/focus).
- `website/assets/fonts/` - Locally hosted Circular Std font files (copied from `reference/assets/brand/font/`).
- `website/assets/img/logo/` - STB logo assets used by the page (copied from `reference/assets/brand/logo/`).
- `website/assets/img/gallons/` - Gallon images used by hero/menu (copied from `reference/assets/gallons/`).
- `website/assets/video/` - Video used in the video-card section (copied from `reference/assets/video/stb_factory.mp4`).

### Notes

- This is a **single landing page**. Keep all navigation/footer links as `href="#"` for now.
- **Carousel logos are not clickable** (placeholders today; real client logos later).
- Brand colors (from brand book):
  - Blue: `#1F6EAD`
  - Orange: `#E9891F`
  - Accent Orange: `#F15A24`
- Menu overlay uses `five_gallons.png` as a decorative image (b-egg inspired), responsive for mobile and desktop.

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [x] 1.0 Review requirements and design references
  - [x] 1.1 Read `tasks/prd-stb-landing-page.md` and summarize must-haves (sections, behaviors, Spanish copy)
  - [x] 1.2 Review `reference/current_site/` screenshots to extract copy and section order
  - [x] 1.3 Review `reference/design_reference/` for: b-egg menu, Figma carousel, Banana Blossom video card, Hartzler layout
  - [x] 1.4 Confirm brand tokens to use (blue/orange/accent) and where they apply (backgrounds, labels, buttons)

- [x] 2.0 Set up static site skeleton (vanilla + Tailwind CDN + assets)
  - [x] 2.1 Create `website/` directory (keep repo root tidy; only site implementation lives here)
  - [x] 2.2 Create `website/index.html` with Tailwind CDN include and a clean semantic structure (`header`, `main`, `footer`)
  - [x] 2.3 Add `website/assets/css/site.css` and `website/assets/js/site.js` and wire them in `website/index.html`
  - [x] 2.4 Create `website/assets/` folder structure for fonts/images/video
  - [x] 2.5 Copy required assets from `reference/assets/` into `website/assets/` (logos, gallons, video)
  - [x] 2.5 Add `@font-face` declarations for Circular Std and set a global font stack
  - [x] 2.6 Add CSS variables for brand colors and map them to Tailwind usage (via utility classes or custom CSS)

- [x] 3.0 Build the landing page sections (structure + styling)
  - [x] 3.1 Build header/nav: left hamburger, centered STB logo linking to home (`href="#"`)
  - [x] 3.2 Build overlay menu (layout only): oversized items (Productos, ¿Por qué Elegirnos?, Clientes, Contacto) + close “X”
  - [x] 3.3 Add menu decorative image using `five_gallons.png` (desktop b-egg-like placement; mobile-friendly)
  - [x] 3.4 Build hero section with 3 gallons + labels (Sandía / Piña Colada / Café) using brand blue
  - [x] 3.5 Build “Clientes” carousel section container (structure + spacing; placeholders using STB logos, not clickable)
  - [x] 3.6 Build “NATURAL & FRESH” headline section with Hartzler-like typography/spacing
  - [x] 3.7 Build video card section: background video, overlay text (“Bienvenidos a Smoothies The Best”), CTA “Contáctanos”
  - [x] 3.8 Build footer: STB logo link, 4 menu buttons, WhatsApp icon link placeholder (`href="#"`)

- [x] 4.0 Implement interactive behavior (menu + carousel + video)
  - [x] 4.1 Implement menu open/close (click hamburger / click X / Esc key)
  - [x] 4.2 Disable body scroll while menu is open
  - [x] 4.3 Implement focus management for accessibility (focus into menu on open, restore on close; trap if feasible)
  - [x] 4.4 Implement carousel auto-scroll loop (marquee-style) and smooth movement
  - [x] 4.5 Pause carousel auto-scroll on hover and on keyboard focus within the carousel
  - [x] 4.6 Ensure carousel still allows manual scroll/swipe on mobile (and doesn’t fight user interaction)
  - [x] 4.7 Configure video element for autoplay requirements (muted, loop, playsinline) and responsive cover behavior

- [x] 5.0 Responsive QA, accessibility, and final polish
  - [x] 5.1 Mobile QA: spacing, text sizes, menu layout, carousel interaction, video readability
  - [x] 5.2 Desktop QA: alignment, large-screen spacing (Hartzler-inspired), menu decorative image placement
  - [x] 5.3 Accessibility QA: focus visibility, keyboard navigation, Esc behavior, `alt` text, `aria-hidden` for duplicated carousel logos
  - [x] 5.4 Performance polish: lazy-load below-the-fold images, compress/size assets appropriately, avoid layout shift
  - [x] 5.5 Update WhatsApp link behavior note: open in new tab when real `wa.me` URL is provided

