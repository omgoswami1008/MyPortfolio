# Data Science Portfolio - Technical Specification

## 1. Concept & Vision

A sophisticated, minimalist portfolio for a Data Scientist & Developer, blending technical precision with visual elegance. The design evokes a futuristic data terminal aesthetic—dark, focused, with neon accents that pulse like data flowing through circuits. Every interaction feels intentional, every animation reveals information in a choreographed sequence.

## 2. Design Language

### Aesthetic Direction
Dark tech-forward minimalism inspired by data visualization dashboards and cyberpunk interfaces. Clean geometric shapes, subtle particle animations, and strategic use of neon accents against deep charcoal backgrounds.

### Color Palette
- **Background Primary**: `#0a0a0f` (near-black with blue undertone)
- **Background Secondary**: `#12121a` (elevated surfaces)
- **Background Tertiary**: `#1a1a24` (cards, interactive elements)
- **Neon Cyan**: `#00d4ff` (primary accent, CTAs, highlights)
- **Neon Blue**: `#0099ff` (secondary accent, gradients)
- **Text Primary**: `#f0f0f5` (headings)
- **Text Secondary**: `#a0a0b0` (body text)
- **Text Muted**: `#606070` (captions, metadata)
- **Success/Active**: `#00ff88` (progress indicators)
- **Border Subtle**: `rgba(255, 255, 255, 0.08)`

### Typography
- **Headings**: `Space Grotesk` (geometric, tech-forward) - weights 500, 700
- **Body**: `Inter` (clean, highly readable) - weights 400, 500
- **Monospace accents**: `JetBrains Mono` (code snippets, data labels)

### Spatial System
- Base unit: 4px
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container max-width: 1280px
- Card padding: 24px-32px
- Grid gap: 24px (cards), 16px (elements)

### Motion Philosophy
- **Entrance animations**: Fade-up with stagger (100ms between items), ease-out curve
- **Scroll reveals**: Intersection Observer triggered, 0.2 threshold
- **Hover states**: Scale 1.02-1.05, glow effect on interactive elements
- **Background**: Subtle floating particles, 0.3-0.5 opacity, slow drift
- **Timing**: 300-500ms for micro-interactions, 600-800ms for reveals
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out for smooth deceleration)

### Visual Assets
- **Icons**: Lucide React (consistent stroke width, minimal style)
- **Data Visualization**: Custom SVG shapes (simple charts, graphs)
- **Background**: Canvas-based particle system with connecting lines
- **Decorative**: Gradient orbs, subtle grid patterns, glow effects

## 3. Layout & Structure

### Page Architecture
```
┌─────────────────────────────────────────────┐
│  Fixed Navigation (blur backdrop)            │
├─────────────────────────────────────────────┤
│                                             │
│  Hero Section (100vh)                       │
│  - Animated particle background             │
│  - Staggered headline animation             │
│  - Glowing CTA button                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  About Module                               │
│  - Split layout: text + visual accent        │
│  - Scroll reveal animation                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Skills Grid                                │
│  - 3-column grid (responsive)               │
│  - Icon cards with hover progress bars      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Projects Section                           │
│  - Card-based layout                        │
│  - Data viz placeholder per project         │
│  - Tech stack tags                          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Experience Timeline                        │
│  - Vertical animated timeline               │
│  - Alternating left/right (desktop)         │
│  - Stacked (mobile)                         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Contact Section                            │
│  - Glassmorphism card                       │
│  - Minimal form fields                      │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │
└─────────────────────────────────────────────┘
```

### Responsive Strategy
- **Desktop (1024px+)**: Full layouts, 3-column grids, timeline alternates
- **Tablet (768px-1023px)**: 2-column grids, condensed spacing
- **Mobile (<768px)**: Single column, stacked layouts, touch-optimized

## 4. Features & Interactions

### Hero Section
- **Headline**: "Data Scientist & Developer" split into animated words
- **Animation**: Each word fades up with 100ms stagger delay
- **Sub-headline**: Brief tagline, fades after headline completes
- **CTA Button**: "View Work" with glow effect on hover, pulsing border
- **Background**: Canvas particle system with ~50 particles, slow drift, connecting lines when close

### About Module
- **Content**: Transition story from MERN stack to Data Science
- **Layout**: Text block with subtle decorative element
- **Scroll reveal**: Fade-up from bottom, 400ms delay after scroll trigger

### Skills Module
- **Grid**: 6 skills in responsive grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- **Card content**: Icon + skill name + proficiency bar
- **Hover effect**: Progress bar animates to fill, glow effect on card
- **Skills**: Python, SQL, Machine Learning, Next.js, React, Data Visualization

### Projects Module
- **Card structure**: Title, description, tech tags, data viz placeholder
- **Data viz**: Simple SVG chart shape (bar, line, or scatter representation)
- **Hover**: Card lifts with shadow, subtle scale increase
- **Tags**: Pill-style badges with tech stack
- **Projects**: 3 sample data science projects with problem-solution narratives

### Experience Timeline
- **Structure**: Vertical line with nodes at each position
- **Animation**: Nodes fade in sequentially as user scrolls
- **Content per node**: Role, company, duration, brief description
- **Visual**: Connecting line grows as sections reveal
- **Entries**: MCA education + 2-3 work experiences

### Contact Section
- **Style**: Glassmorphism (backdrop blur, semi-transparent background)
- **Form fields**: Name, Email, Message (minimal, clean inputs)
- **Submit button**: Primary CTA style matching Hero
- **Validation**: Basic client-side validation
- **Success state**: Animated checkmark, thank you message

### Navigation
- **Fixed position**: Sticks to top on scroll
- **Backdrop blur**: 12px blur on scroll
- **Links**: Smooth scroll to sections
- **Mobile**: Hamburger menu with slide-out drawer

## 5. Component Inventory

### `<Navigation />`
- **Default**: Transparent background, white text
- **Scrolled**: Blur backdrop, subtle border bottom
- **Mobile**: Hamburger icon, drawer overlay

### `<Hero />`
- **Canvas**: Full viewport particle animation
- **Text container**: Centered, max-width 800px
- **Headline**: H1, Space Grotesk, gradient text option
- **Button**: Pill shape, glow border, hover scale

### `<About />`
- **Container**: Two-column layout (text + visual accent)
- **Visual**: Abstract geometric shape or data motif
- **Text**: 2-3 paragraphs, clean typography

### `<Skills />`
- **Grid container**: Responsive CSS grid
- **SkillCard**: Icon, name, progress bar
- **Progress bar**: Animated on hover, neon gradient fill

### `<Projects />`
- **Section header**: "Data Storytelling" title
- **Card**: Elevated background, rounded corners, hover lift
- **Data viz placeholder**: SVG shape, subtle animation
- **Tags**: Small pills with tech names

### `<Timeline />`
- **Vertical line**: Gradient from top to bottom
- **Nodes**: Circular markers with icon inside
- **Content cards**: Positioned alternating left/right
- **Animation**: Line draws, nodes pop in sequence

### `<Contact />`
- **Glass card**: backdrop-blur-xl, bg-opacity-50
- **Form**: Stacked fields with floating labels
- **Input styles**: Borderless, bottom border on focus
- **Button**: Full-width, matching CTA style

### `<AnimatedBackground />`
- **Canvas element**: Full viewport, position fixed behind content
- **Particles**: Small circles with drift animation
- **Connections**: Lines drawn between nearby particles
- **Performance**: RequestAnimationFrame, reduced motion support

## 6. Technical Approach

### Framework & Libraries
- **Next.js 14+**: App Router, Server Components where applicable
- **Tailwind CSS 4**: Utility-first styling with CSS variables
- **Framer Motion**: All animations and scroll effects
- **Lucide React**: Icon library
- **TypeScript**: Full type safety

### Component Architecture
```
app/
├── layout.tsx (root layout with metadata)
├── page.tsx (assembles all sections)
├── globals.css (theme variables, base styles)
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── AnimatedBackground.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Timeline.tsx
    └── Contact.tsx
```

### SEO Implementation
- Next.js Metadata API for title, description, Open Graph
- Semantic HTML (section, nav, main, article)
- Alt text for all images/visual elements
- Structured data consideration for person profile

### Performance Considerations
- Client components only where interactivity needed
- Canvas animation pauses when tab not visible
- Reduced motion media query support
- Optimized re-renders with Framer Motion variants

### Accessibility
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG AA
- Screen reader friendly content structure
