## Introduction / Overview

Smoothies The Best (STB) needs a **more professional, polished landing page** based on the existing WordPress concept, while keeping the current content structure and improving spacing, typography, sizing, and overall visual consistency.

The landing page is **Spanish-first** (navigation + primary CTA in Spanish) and is implemented in **full vanilla** (HTML/CSS/JS) using **Tailwind via CDN**.

Design direction:

- Overall look/feel inspired by **Hartzler Dairy** (clean layout, strong product imagery, big typography).
- Left-side menu pattern inspired by **b-egg** (full-screen overlay with oversized menu typography).
- Client logos carousel inspired by **Figma** (horizontal scrolling row of logos).
- Video card section inspired by **Banana Blossom Salads** (video background with overlay text and CTA).

Reference sources in repo:

- WordPress concept screenshots: `reference/current_site/`
- Component references: `reference/design_reference/`
- Brand assets (logos, gallons, video): `reference/assets/`

## Goals

- Deliver a **single-page landing** that matches the intended section order and content from the WordPress concept, but with **improved layout polish** and consistent spacing/typography.
- Implement a **left-side hamburger menu** and **full-screen overlay navigation** matching the b-egg style (adapted to STB branding).
- Implement a **responsive client-logo carousel** section.
- Implement a **video card** section with overlay text + CTA and the provided video file.
- Keep all navigation/footer links as `href="#"` for now, while ensuring the **STB brand logo links to home** (`href="#"`).
- Ensure excellent **responsive behavior** on mobile and desktop.

## User Stories

- As a potential B2B client (restaurant/hotel), I want to quickly understand what STB offers and why it’s valuable, so I can decide to contact them.
- As a potential client, I want to see recognizable brands/clients, so I can trust STB’s credibility.
- As a visitor, I want clear navigation to sections (Productos, ¿Por qué Elegirnos?, Clientes, Contacto), so I can jump to what matters.
- As a visitor on mobile, I want an easy-to-use menu and readable layout, so the page feels professional and modern.

## Functional Requirements

1. **Tech stack**
   1.1. The landing page must be built with **vanilla HTML/CSS/JS**.
   1.2. Tailwind CSS must be included via **CDN** (no build step required).

2. **Page structure & order**
   2.1. The landing page must include the following sections in this order:
   - Nav bar
   - Hero (3 gallons + their names)
   - Carousel (client logos)
   - “Natural & Fresh” headline section (per current concept)
   - Video card section (video background + overlay text + CTA)
   - Footer (logo, menu buttons, WhatsApp icon)

3. **Navigation**
   3.1. The nav bar must include:
   - A **hamburger/menu button on the left**.
   - The STB logo centered or prominently placed (as per concept).
   3.2. Clicking the hamburger must open a **full-screen overlay menu** inspired by b-egg:
   - Oversized, stacked menu items
   - Close “X” control (top-right)
   - Background color aligned to STB brand
   - A decorative product image using `reference/assets/gallons/five_gallons.png`, similar to the b-egg desktop menu reference (adapt responsively for mobile)
   3.3. Menu items must be in Spanish:
   - **Productos**
   - **¿Por qué Elegirnos?**
   - **Clientes**
   - **Contacto**
   3.4. Menu item links must be `href="#"` for now.
   3.5. Menu must be keyboard accessible:
   - Close on `Esc`
   - Focus trapped within open menu (or, at minimum, focus moved into menu on open and returned on close)
   - Body scroll disabled while open

4. **Hero section (3 gallons)**
   4.1. The hero must display **three gallon products** prominently (use existing gallon assets in `reference/assets/gallons/`).
   4.2. Each gallon must show a visible label with the product name consistent with the concept:
   - Sandía
   - Piña Colada
   - Café
   4.3. The hero must preserve the clean, product-forward layout inspired by Hartzler Dairy while improving spacing and responsiveness.

5. **Client logos carousel**
   5.1. The carousel must show a **horizontal row of logos** and feel similar to the Figma reference.
   5.2. For now, use **STB logo variants** as placeholders (from `reference/assets/brand/logo/`), repeated as needed.
   5.3. Logos in the carousel must **not** be clickable (they will be replaced later by other companies’ logos).
   5.4. Carousel behavior must:
   - Auto-scroll continuously (marquee-style)
   - Pause auto-scroll while hovered (desktop) and while focused (keyboard accessibility)
   - Still allow manual horizontal scroll/swipe on mobile if the user interacts
   5.5. Carousel should include reasonable accessibility:
   - Logos have `alt` text
   - If duplicating logos to loop seamlessly, duplicates should be `aria-hidden="true"` to avoid repetitive announcements

6. **“Natural & Fresh” headline**
   6.1. A headline section must exist after the carousel, matching the concept’s prominence.
   6.2. Copy should be extracted from the current concept screenshots.
   6.3. The headline must remain **“NATURAL & FRESH”** (keep in English).

7. **Video card section**
   7.1. The page must include a section with a **video playing in the background** using `reference/assets/video/stb_factory.mp4`.
   7.2. The video must have overlay text and a CTA button similar to the Banana Blossom Salads reference.
   7.3. The primary CTA button text must be **“Contáctanos”**.
   7.4. CTA link must be `href="#"` for now.
   7.5. Video behavior:
   - Autoplay, muted, loop (to allow autoplay in browsers)
   - Responsive sizing with proper cropping (`object-fit: cover`)
   - Overlay must remain readable (use gradient/scrim)

8. **Footer**
   8.1. Footer must include:
   - STB logo (clickable to home `href="#"`)
   - Buttons for the same menu items: Productos, ¿Por qué Elegirnos?, Clientes, Contacto (all `href="#"`)
   - A WhatsApp icon/button (clickable, currently `href="#"`)
   8.2. Footer style should align with Hartzler-inspired simplicity and STB brand colors.

9. **Language**
   9.1. Navigation and primary CTA must be in Spanish.
   9.2. Remaining copy must be extracted from the WordPress screenshots unless otherwise specified.

10. **Responsive + quality**
   10.1. Layout must be responsive for mobile and desktop, with improved spacing/sizing over the WordPress concept.
   10.2. Images must not overflow or appear blurry; use modern responsive image practices (`max-width: 100%`, appropriate sizing).

## Non-Goals (Out of Scope)

- Implementing additional pages beyond the landing page.
- Implementing real routing/navigation (all links remain `href="#"` for now).
- Implementing a CMS or WordPress integration.
- Collecting/processing form submissions or building backend APIs.
- Adding analytics, tracking, cookies, or consent management at this stage.

## Design Considerations

### Visual references

- **Overall inspiration**: `reference/design_reference/www.hartzlerdairy.com - desktop.png`, `reference/design_reference/www.hartzlerdairy.com - mobile.png`
- **Menu inspiration**: `reference/design_reference/www.b-egg.farm - menu desktop.jpeg`, `reference/design_reference/www.b-egg.farm - menu mobile.png` (use `reference/assets/gallons/five_gallons.png` as the menu’s decorative image)
- **Logo carousel inspiration**: `reference/design_reference/www.figma.com - logo carousel mobile.png`
- **Video card inspiration**: `reference/design_reference/bananablossomsalads.com - video section mobile.png`
- **Current concept (source of truth for content/order)**: `reference/current_site/`

### Branding (colors/typography)

- **Fonts**: Use the Circular Std family from `reference/assets/brand/font/` (loaded via `@font-face`).
- **Logos**: Use variants from `reference/assets/brand/logo/`.
- **Colors**:
  - Use the palette from the brand book in `reference/assets/brand/brand_book/brand_book.pdf`.
  - Extracted palette (from PDF drawing operators):
    - Primary Blue: **#1F6EAD**
    - Primary Orange: **#E9891F**
    - Secondary Orange (accent): **#F15A24**
    - White: **#FFFFFF**
    - Black: **#000000**

### Copy extraction notes (from current screenshots)

Observed copy elements in the current concept include:

- Video overlay: “Bienvenidos a Smoothies The Best”
- Video CTA (current): “Solicite información” (to be replaced by “Contáctanos” per requirement)
- Hero labels: “Sandía”, “Piña Colada”, “Café”
- Headline: “NATURAL & FRESH” (confirmed to remain in English)

## Technical Considerations

- **Single-page structure**: Prefer a single `index.html` with sections anchored by IDs (even if `href="#"` initially).
- **Tailwind via CDN**:
  - Use Tailwind Play CDN or standard CDN include.
  - Define brand tokens via CSS variables and/or Tailwind config-in-script (if using Play CDN) to keep design consistent.
- **Assets**:
  - Reference local assets under `reference/assets/` for images and video.
- **Accessibility**:
  - Ensure sufficient color contrast for overlay text on video.
  - Provide `alt` text for product images and logos.
  - Make menu operable via keyboard and ensure focus handling.
- **Performance**:
  - Use `preload` for fonts if appropriate.
  - Use `loading="lazy"` for non-critical images (not for above-the-fold hero).

## Success Metrics

- The landing page matches the required **section order** and uses the specified **references** for the menu, carousel, and video card.
- The page is **visibly more polished** than the WordPress concept (consistent spacing/typography, responsive layout).
- The menu is usable on mobile/desktop and can be opened/closed reliably.
- Carousel functions on mobile (scroll/swipe) and desktop (scroll/controls if implemented).
- Video card loads and plays (muted/loop) with readable overlay and a clear **“Contáctanos”** CTA.

## Open Questions

1. WhatsApp footer icon: confirm the final destination number when available (expected: `https://wa.me/<number>`). Link should open in a **new tab**.

