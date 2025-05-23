# BioKit Design Migration Plan for ComfyUI

## Overview
This document outlines the detailed implementation plan for migrating ComfyUI to the BioKit Labs visual identity system based on the Product Requirements Document.

## Current Progress
- ✅ Initial BioKit theme CSS file created (`src/assets/css/biokit-theme.css`)
- ✅ Theme toggle button added to TopMenubar
- ✅ Dark mode CSS variables implemented
- ✅ BioKit logo assets added to public/assets/images/
- ✅ Basic sidebar styling with BioKit orange accents

## Migration Phases

### Phase 1: Core Design Tokens and Typography (Week 1-2)

#### 1.1 Design Token System
- [ ] Create comprehensive CSS variables file with BioKit design tokens
  - [ ] Color system (primary, semantic, gradients)
  - [ ] Typography scales
  - [ ] Spacing system
  - [ ] Border radius values
  - [ ] Shadow definitions
  - [ ] Animation durations

#### 1.2 Typography Implementation
- [ ] Install and configure fonts
  - [ ] Add Lexend font family for headings
  - [ ] Add Inter font family for body text
  - [ ] Configure font loading strategy
- [ ] Update typography across components
  - [ ] Apply Lexend to all headings (H1-H4)
  - [ ] Apply Inter to body text
  - [ ] Set proper font weights and sizes per PRD

#### 1.3 Color System Migration
- [ ] Update color variables to match BioKit palette
  - [ ] Primary: BioKit Orange (#FF5335)
  - [ ] Black (#000000) for text and borders
  - [ ] White (#FFFFFF) for backgrounds
  - [ ] Semantic colors (success, warning, error, info)
- [ ] Create color utility classes
- [ ] Update PrimeVue theme configuration

#### 1.4 Component Library Foundation
- [ ] Button components
  - [ ] Primary button (BioKit orange)
  - [ ] Secondary button (outlined)
  - [ ] Icon buttons
  - [ ] Button states (hover, active, disabled)
- [ ] Input fields
  - [ ] Text inputs
  - [ ] Textareas
  - [ ] Select dropdowns
  - [ ] Checkboxes and radios
- [ ] Form validation states

### Phase 2: Node System and Canvas (Week 3-4)

#### 2.1 Node Design Overhaul
- [ ] Update node styling
  - [ ] Background colors (#F8F8F8 light / #1A1A1A dark)
  - [ ] Border styling (2px solid black/white)
  - [ ] Border radius (8px)
  - [ ] Shadow effects
- [ ] Node header redesign
  - [ ] Lexend SemiBold 16px font
  - [ ] Black background (light mode) / Orange (dark mode)
  - [ ] Proper padding and border radius
- [ ] Node states
  - [ ] Active state (orange border, enhanced shadow)
  - [ ] Hover effects
  - [ ] Selected state

#### 2.2 Connection Lines
- [ ] Update connection styling
  - [ ] Default: 2px solid black
  - [ ] Active/hover: 3px solid BioKit orange
  - [ ] Implement bezier curves with proper control points
- [ ] Add connection animations
  - [ ] Dashed line animation for active connections
  - [ ] Smooth transitions

#### 2.3 Canvas Background
- [ ] Implement grid pattern
- [ ] Add zoom controls with BioKit styling
- [ ] Update canvas interaction feedback

#### 2.4 Node Widgets
- [ ] Update all widget types to match BioKit design
  - [ ] Sliders
  - [ ] Number inputs
  - [ ] Combo boxes
  - [ ] Image previews
  - [ ] Text areas

### Phase 3: Panels and Navigation (Week 5-6)

#### 3.1 Top Navigation Bar
- [ ] Apply BioKit styling
  - [ ] Background colors
  - [ ] Logo integration (top-left, 32px height)
  - [ ] Menu items with proper typography
- [ ] Update workflow tabs
- [ ] Style action buttons

#### 3.2 Sidebar Redesign
- [ ] Update sidebar styling
  - [ ] Background (#F8F8F8 light / #1A1A1A dark)
  - [ ] Icon styling with BioKit orange for active state
  - [ ] Proper spacing and padding
- [ ] Tab content styling
  - [ ] Node library
  - [ ] Queue panel
  - [ ] Workflows panel

#### 3.3 Dialog System
- [ ] Update all dialogs
  - [ ] Headers with Lexend font
  - [ ] Content spacing
  - [ ] Button styling
  - [ ] Modal overlays
- [ ] Settings dialog
- [ ] About dialog with BioKit branding

#### 3.4 Context Menus
- [ ] Update context menu styling
- [ ] Apply proper shadows and borders
- [ ] Hover states with BioKit orange

### Phase 4: Polish and Testing (Week 7-8)

#### 4.1 Dark Mode Refinement
- [ ] Complete dark mode implementation
  - [ ] Verify all color inversions
  - [ ] Check contrast ratios (WCAG AA)
  - [ ] Test middle logo circle inversion
  - [ ] Ensure smooth theme transitions
- [ ] Persist theme preference
- [ ] Add theme toggle animations

#### 4.2 Animations and Transitions
- [ ] Implement micro-interactions
  - [ ] Hover transitions (150ms ease-out)
  - [ ] Active states (100ms ease-out)
  - [ ] Panel slides (300ms ease-in-out)
  - [ ] Node connections (200ms ease-out)
- [ ] Loading states
  - [ ] BioKit molecular animation
  - [ ] Progress bars with BioKit orange
  - [ ] Skeleton screens

#### 4.3 Responsive Design
- [ ] Test breakpoints
  - [ ] Desktop (1440px+)
  - [ ] Laptop (1024px-1439px)
  - [ ] Tablet (768px-1023px)
- [ ] Verify minimum sizes
  - [ ] Node minimum width (200px)
  - [ ] Font minimum size (12px)
  - [ ] Touch targets (44px minimum)

#### 4.4 Accessibility
- [ ] WCAG 2.1 AA compliance
  - [ ] Color contrast validation
  - [ ] Focus indicators with BioKit orange
  - [ ] Keyboard navigation
- [ ] Screen reader support
  - [ ] ARIA labels
  - [ ] Alt text
  - [ ] Heading hierarchy

#### 4.5 Performance Testing
- [ ] Measure render performance
- [ ] Optimize animations (60fps target)
- [ ] Asset loading optimization
- [ ] Memory usage profiling

## Technical Implementation Details

### CSS Architecture
```scss
// File structure
src/
  assets/
    css/
      biokit-theme.css      // Main theme file
      biokit-variables.css  // Design tokens
      biokit-components.css // Component styles
    fonts/
      lexend/              // Lexend font files
      inter/               // Inter font files
```

### Key Files to Update
1. `src/main.ts` - Import BioKit theme files
2. `src/assets/css/style.css` - Integrate with BioKit styles
3. `src/constants/coreColorPalettes.ts` - Add BioKit color palette
4. `src/stores/workspace/colorPaletteStore.ts` - Handle theme switching
5. Various component files for specific styling updates

### Testing Strategy
1. Visual regression testing
2. Cross-browser compatibility
3. Dark mode testing
4. Performance benchmarks
5. Accessibility audits

## Next Steps
1. Review and approve the migration plan
2. Set up development environment
3. Create feature branch for BioKit migration
4. Begin Phase 1 implementation
5. Regular progress reviews and adjustments

## Risk Mitigation
- Maintain backward compatibility for existing workflows
- Create rollback plan for each phase
- Conduct user testing at each phase completion
- Document all breaking changes
- Provide migration guides for extension developers