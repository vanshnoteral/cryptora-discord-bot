# Cryptora Discord Bot - Cyberpunk Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern cyberpunk aesthetics, gaming interfaces, and futuristic tech products. The design emphasizes visual appeal and emotional engagement to showcase the bot's advanced capabilities.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary Colors:**
- Background: 220 25% 8% (deep dark blue-gray)
- Surface: 220 20% 12% (elevated dark surface)
- Primary Neon Cyan: 180 100% 50%
- Secondary Neon Purple: 280 100% 65%
- Accent Electric Blue: 240 100% 70%

**Gradients:**
- Hero gradient: Cyan to purple to electric blue
- Card accents: Subtle cyan to purple transitions
- Button highlights: Electric blue to cyan
- Border glows: Animated cycling through all three neon colors

### B. Typography
**Primary Font**: Orbitron (futuristic, geometric)
**Secondary Font**: Exo 2 (clean, modern)
**Fallback**: System fonts (Inter, sans-serif)

**Hierarchy:**
- Hero Title (CRYPTORA): 4rem, bold, glowing text effect
- Section Headers: 2.5rem, medium weight
- Card Titles: 1.25rem, medium weight
- Body Text: 1rem, regular weight
- Captions: 0.875rem, light weight

### C. Layout System
**Spacing Units**: Tailwind units of 4, 8, 16, and 24 (p-4, m-8, gap-16, py-24)
**Container**: Max width 1200px, centered with horizontal padding
**Grid System**: CSS Grid with responsive breakpoints

### D. Component Library

**Glassmorphism Cards:**
- Semi-transparent backgrounds with blur effects
- Subtle neon borders (1-2px glowing outlines)
- Rounded corners (12px radius)
- Backdrop blur and subtle shadows

**Interactive Elements:**
- Glowing buttons with neon gradients
- Hover effects with scale transforms and glow intensification
- Animated border transitions
- Smooth opacity and transform animations (300ms duration)

**Navigation:**
- Fixed header with glassmorphism background
- Smooth scroll behavior between sections
- Glowing hover states for nav links

### E. Visual Effects & Animations

**Background Elements:**
- Animated particle system with floating neon dots
- Subtle grid overlay with pulsing lines
- Gradient overlays with slow color shifts

**Interaction Animations:**
- Cards: Scale on hover (1.02) with enhanced glow
- Buttons: Pulse effect and gradient shifts
- Text: Typing animation for command demonstrations
- Icons: Gentle floating animations

**Page Transitions:**
- Fade-in animations on scroll
- Staggered reveals for card grids
- Smooth parallax effects for background elements

## Section-Specific Design

**Hero Section:**
- Full viewport height with centered content
- Large animated CRYPTORA logo with neon glow effect
- Particle background with slow movement
- Two prominent CTA buttons with different neon colors

**Module Cards:**
- 3-4 column responsive grid
- Each card with unique neon accent color
- Icon + title + brief description layout
- Hover reveals additional details

**Features Grid:**
- Large statistics with animated counters
- Command preview with typewriter effect
- Glassmorphism containers with subtle animations

**Team Cards:**
- Profile-style cards with role indicators
- Consistent neon accent per team member
- Social links with glowing icons

## Images
No large hero images required. The design relies on:
- Animated particle/grid backgrounds
- Neon glowing text and UI elements
- Abstract cyberpunk visual effects
- Icon-based graphics for modules and features

All visual interest comes from the neon color scheme, glassmorphism effects, and animated backgrounds rather than photographic content.