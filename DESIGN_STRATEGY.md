# Vixel Media Design Strategy

## Design Philosophy: Premium Modern Agency

This document defines the visual and interaction language for Vixel Media's portfolio. All design decisions should reinforce the brand positioning: **"Strategic Graphic Design for Businesses, Events, and Brands"**.

---

## Brand Identity

### Color System
- **Primary**: Deep Blue `rgb(25, 25, 164)` / `#191BA4` — Conveys trust, professionalism, and sophistication
- **Accent**: Pure Yellow `#FFFF00` — Energy, optimism, and visual pop for CTAs and highlights
- **Neutrals**: 
  - White: `#FFFFFF` (backgrounds, cards)
  - Dark Gray: `#1a1a1a` (text, deep contrast)
  - Light Gray: `#f5f5f5` (subtle backgrounds, dividers)
  - Medium Gray: `#808080` (secondary text)

### Typography System
- **Display/Headings**: `Poppins` (bold, geometric, modern) — weights 600, 700
- **Body/UI**: `Inter` (clean, readable, professional) — weights 400, 500, 600
- **Accent/Taglines**: `Playfair Display` (elegant, premium) — weight 700

### Spacing & Rhythm
- Base unit: 8px
- Sections: 80px vertical padding (mobile: 40px)
- Cards: 24px internal padding
- Text line-height: 1.6 (body), 1.2 (headings)

---

## Visual Language

### Design Principles
1. **Minimalist with Impact**: Clean layouts with generous whitespace, bold typography, and strategic color accents
2. **Premium Aesthetics**: Subtle shadows, smooth gradients, and refined details that convey quality
3. **Strategic Contrast**: Deep blue backgrounds with white text for authority; white backgrounds with dark text for clarity
4. **Motion as Communication**: Smooth transitions (300-500ms) on hover, scroll reveals, and navigation

### Signature Elements
1. **Yellow Accent Bars**: Horizontal lines in pure yellow used as section dividers and emphasis
2. **Deep Blue Cards**: Project cards with subtle shadows and yellow hover states
3. **Geometric Shapes**: Subtle diagonal angles, circles, and abstract forms in backgrounds

### Imagery
- High-quality mockups and project presentations
- Consistent color grading (cool tones, professional lighting)
- Abstract geometric overlays on hero sections
- Subtle gradients from blue to purple in backgrounds

---

## Layout Architecture

### Navigation
- **Sticky Header**: Deep blue background with white text, yellow underline on active link
- **Mobile Menu**: Slide-out drawer with same color scheme
- **Breadcrumbs**: On case study pages for clear hierarchy

### Hero Sections
- **Full-width background image** with overlay gradient (deep blue at 0.7 opacity)
- **Large headline** in Poppins 700, white text
- **Tagline** in Playfair Display, yellow accent
- **CTA button**: Deep blue background, yellow text, hover effect

### Project Grid
- **Desktop**: 3-column grid with 24px gaps
- **Tablet**: 2-column grid
- **Mobile**: 1-column stack
- **Card hover**: Subtle lift (transform: translateY(-4px)), yellow border appears

### Testimonials Section
- **Quote card**: White background, left border in yellow
- **Author**: Name in bold, title in gray
- **Staggered animation**: Each testimonial slides in on scroll

---

## Interaction & Animation

### Hover States
- **Links**: Yellow underline fade-in (200ms ease-out)
- **Buttons**: Background color shift, slight scale (1.02x)
- **Project Cards**: Border highlight, shadow depth increase
- **Navigation Items**: Yellow underline appears below text

### Scroll Animations
- **Fade-in**: Elements appear as they enter viewport (300ms)
- **Slide-up**: Sections slide up from bottom (400ms ease-out)
- **Parallax**: Hero background moves slower than content (subtle, 0.5x speed)

### Page Transitions
- **Fade**: 200ms fade-out → fade-in between pages
- **Smooth scroll**: All internal links use smooth scroll behavior

---

## Component Patterns

### Buttons
- **Primary CTA**: Deep blue background, white text, yellow hover state
- **Secondary**: White background, deep blue border, blue text
- **Size**: 48px height (mobile), 56px (desktop)

### Cards
- **Project Card**: White background, subtle shadow, yellow left border on hover
- **Service Card**: Light gray background, deep blue heading, yellow accent line
- **Testimonial Card**: White background, left border in yellow, italic quote

### Forms
- **Input Fields**: Light gray background, dark blue border on focus, yellow label
- **Submit Button**: Deep blue background, white text, full width on mobile

---

## Page-Specific Guidelines

### Home
- **Hero**: Full-screen with background image, headline, tagline, CTA
- **Featured Projects**: 4-6 projects in grid, each with hover effect
- **Services Overview**: 5 service cards in 2-3 column layout
- **Why Choose Us**: 3-4 value propositions with icons
- **Design Process**: 4 steps with icons and descriptions
- **Testimonials**: 3-4 testimonials in carousel or grid
- **Final CTA**: "Start a Project" button with yellow background

### Portfolio
- **Grid**: 10-12 projects in 3-column layout
- **Filters**: Optional category filters (Logo, Branding, Social, etc.)
- **Project Cards**: Image, title, category, hover effect reveals CTA

### Case Study
- **Header**: Project title, client, industry
- **Sections**: Challenge, Approach, Solution, Deliverables, Outcome
- **Mockups**: High-quality product mockups with subtle shadows
- **Sidebar**: Navigation to other case studies
- **CTA**: "Start Your Project" at bottom

### Services
- **Hero**: Service title, brief description
- **Service Details**: 5 service cards with detailed descriptions
- **Benefits**: Bulleted list for each service
- **Process**: Step-by-step workflow
- **CTA**: "Get Started" button

### About
- **Story**: Agency mission and values
- **Team**: Optional team member cards
- **Philosophy**: Design approach and commitment to quality
- **CTA**: "Let's Work Together"

### Contact
- **Form**: Name, Email, Business Name, Message
- **Contact Info**: Email, WhatsApp link
- **Map**: Optional location map
- **Social Links**: Portfolio links (Behance, etc.)

---

## Responsive Breakpoints

- **Mobile**: 0-640px (full-width, single column, large touch targets)
- **Tablet**: 641-1024px (2-column grids, adjusted spacing)
- **Desktop**: 1025px+ (3-column grids, full navigation)

---

## Performance & Accessibility

- **Images**: Optimized for web, lazy-loaded
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Focus States**: Yellow outline on all interactive elements
- **Keyboard Navigation**: Full support for tab, enter, escape
- **Semantic HTML**: Proper heading hierarchy, alt text on images

---

## Implementation Notes

- All colors use the brand palette defined above
- Animations use `transition: all 300ms ease-out` as default
- Shadows use `0 4px 12px rgba(25, 25, 164, 0.1)` for consistency
- Border radius: 8px for cards, 4px for inputs
- Font sizes: 48px (h1), 32px (h2), 24px (h3), 16px (body)
