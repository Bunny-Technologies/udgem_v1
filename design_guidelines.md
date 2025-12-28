# UdGEM Design Guidelines

## Design Approach

**Selected Framework:** Material Design principles adapted for Bootstrap 5, emphasizing government credibility and accessibility.

**Core Principles:**
- **Clarity First:** Information hierarchy optimized for scanning subsidy details, eligibility criteria, and application steps
- **Trust & Authority:** Clean, professional aesthetic that conveys government legitimacy without appearing cold
- **Accessibility:** High contrast, readable text, clear navigation for diverse user base including rural households
- **Progressive Disclosure:** Complex subsidy calculations and eligibility presented in digestible chunks

---

## Typography

**Font Family:** Poppins (Google Fonts)
- **Headings (H1-H3):** Poppins SemiBold (600), slightly condensed letter-spacing (-0.02em)
- **Body Text:** Poppins Regular (400), line-height 1.7 for comfortable reading
- **Accents/CTAs:** Poppins Medium (500)

**Scale:**
- H1: 2.5rem (mobile: 1.75rem) - Hero headlines only
- H2: 2rem (mobile: 1.5rem) - Section headers
- H3: 1.5rem (mobile: 1.25rem) - Card titles, sub-sections
- Body: 1rem (16px base)
- Small/Caption: 0.875rem - Form labels, disclaimers

---

## Layout System

**Spacing Units:** Use Tailwind-style spacing - primarily **4, 8, 12, 16, 20, 24** (in Bootstrap: p-3, p-4, p-5, etc.)

**Container Widths:**
- Max-width: 1200px for content sections
- Hero sections: Full-width with inner container at 1200px
- Forms: Max 600px centered for optimal readability

**Vertical Rhythm:**
- Section padding: py-5 (80px) on desktop, py-4 (48px) on mobile
- Card spacing: mb-4 between stacked cards
- Paragraph spacing: mb-3

**Grid Usage:**
- Feature cards: 3-column on desktop (lg:grid-cols-3), 1-column mobile
- Statistics/counters: 4-column on desktop, 2-column tablet, 1-column mobile
- Form layouts: Single column throughout for simplicity

---

## Component Library

### Navigation
- **Fixed top navbar** with subtle shadow (box-shadow: 0 2px 4px rgba(0,0,0,0.1))
- Logo "UdGEM" on left in Poppins SemiBold
- Desktop: Horizontal menu with 8px padding between items
- Mobile: Hamburger menu, full-width dropdown
- Active state: 3px bottom border in solar yellow

### Hero Sections
- **Home Hero:** Split layout (50/50 on desktop)
  - Left: Heading + subheading + 2 CTAs (vertical stack on mobile)
  - Right: Bootstrap carousel with flyer images, rounded corners (border-radius: 8px)
  - Height: 75vh minimum, naturally expands with content
  - Background: Subtle gradient from light gray to white

### Cards
- **Feature Cards:** Bootstrap card component with:
  - Icon at top (FontAwesome solar/energy icons, 48px size, solar yellow)
  - Title in H3
  - 2-3 line description
  - Padding: p-4
  - Border: 1px solid #e0e0e0
  - Hover: Subtle lift (transform: translateY(-4px), shadow increase)

- **SDG Cards:** 
  - Colored left border (8px) matching SDG color
  - Icon + number in top-left
  - White background with light shadow

### Forms
- **Application Form:**
  - Single column layout
  - Labels above inputs (mb-2)
  - Input fields: Full-width, border-radius: 4px, py-2 px-3
  - Focus state: Blue border (2px) + subtle shadow
  - Required fields: Asterisk in red
  - Validation errors: Red text below field with icon
  - Submit button: Large (py-3), full-width on mobile

### Data Display
- **Subsidy Table:** Responsive Bootstrap table
  - Header row: Deep blue background, white text
  - Zebra striping for readability
  - Mobile: Stack into cards with labels

- **Calculator Widget:**
  - 2-column inputs (desktop), stacked (mobile)
  - Output box: Light blue background (#e3f2fd), larger text
  - Calculate button: Primary CTA style

### Statistics/Counters
- Large number display (3rem font-size, Poppins SemiBold)
- Label below in smaller gray text
- Optional count-up animation on viewport entry
- Arranged in 4-column grid

### CTAs
- **Primary Button:** Deep blue background, white text, py-3 px-5, border-radius: 6px
- **Secondary Button:** Yellow background, deep blue text
- **Hover states:** 5% darken + subtle lift (2px)
- **On hero images:** Semi-transparent backdrop (backdrop-filter: blur(8px), background: rgba(0,59,115,0.85))

### Footer
- **3-column layout** (desktop): Contact info | Quick links | Social/Trust badges
- Deep blue background (#003b73), white text
- Section dividers: 1px solid rgba(255,255,255,0.2)
- Bottom bar: Copyright + minimal legal links

---

## Images

**Hero Images (Flyers):**
- Use provided flyer images in Bootstrap carousel on homepage hero
- Aspect ratio: 16:9 or natural, max-height: 500px
- Border-radius: 8px
- Auto-rotate every 5 seconds with fade transition

**SDG Icons:**
- Use official UN SDG icons (small, 60x60px) or FontAwesome equivalents
- Place at top of SDG cards

**Solar Panel Imagery:**
- For PM Surya Ghar page header: Small banner image (200px height) showing rooftop solar panels
- Impact page: Consider illustrative icons/graphics instead of photos for lightweight feel

**Placeholder Approach:**
- Where images aren't provided, use colored placeholder boxes with icon/text indicating content type

---

**Key Distinction:** This is NOT a marketing-heavy site - prioritize clear information architecture, scannable content blocks, and straightforward navigation over visual flourishes. Every section should serve a clear functional purpose in the subsidy application journey.