# Product Requirements Document: ComfyUI BioKit Restyling

**Document Version:** 1.0  
**Date:** May 22, 2025  
**Author:** Product Team  
**Status:** Draft

---

## 1. Executive Summary

This PRD outlines the requirements for restyling ComfyUI to align with BioKit Labs' visual identity and brand guidelines. The project aims to transform ComfyUI's interface while maintaining its core functionality and user experience patterns.

### 1.1 Objectives
- Apply BioKit Labs' visual identity system to ComfyUI
- Maintain ComfyUI's functionality and workflow efficiency
- Ensure consistent brand experience across all UI elements
- Support both light and dark modes with BioKit's color system

### 1.2 Success Metrics
- 100% compliance with BioKit brand guidelines
- No degradation in ComfyUI performance
- Positive user feedback on visual improvements
- Successful dark mode implementation

---

## 2. Visual Design Requirements

### 2.1 Color System Implementation

#### Primary Colors
- **BioKit Orange (#FF5335)**: Use for primary actions, active states, and key highlights
  - Apply to: Primary buttons, active node connections, selected elements
  - Hover state: Darken by 10% (#E64A30)
  - Disabled state: 40% opacity
  
- **Black (#000000)**: Primary text and UI elements
  - Apply to: Headers, labels, node borders, icons
  
- **White (#FFFFFF)**: Backgrounds and contrast elements
  - Apply to: Canvas background, card backgrounds, input fields

#### Background Colors
- **Light Mode Primary**: #FFFFFF
- **Light Mode Secondary**: #F8F8F8 (panels, sidebars, node backgrounds)
- **Dark Mode Primary**: #000000
- **Dark Mode Secondary**: #1A1A1A (elevated surfaces)

#### Semantic Colors (Maintaining ComfyUI Functionality)
```
Success: #10B981 (green - for successful operations)
Warning: #F59E0B (amber - for warnings)
Error: #EF4444 (red - for errors)
Info: #3B82F6 (blue - for information)
```

### 2.2 Typography System

#### Font Hierarchy
1. **Headings (Lexend)**
   - H1: 40px, Bold (700) - Main dashboard title
   - H2: 32px, SemiBold (600) - Section headers
   - H3: 24px, SemiBold (600) - Panel headers
   - H4: 20px, Medium (500) - Subsection headers

2. **Body Text (Inter)**
   - Large: 18px, Regular (400) - Important labels
   - Regular: 16px, Regular (400) - Standard UI text
   - Small: 14px, Regular (400) - Secondary text, tooltips
   - Tiny: 12px, Regular (400) - Metadata, timestamps

#### Implementation Rules
- Letter spacing: -0.03em for Lexend headings
- Line height: 1.5 for body text, 1.2 for headings
- Text rendering: optimizeLegibility for all text

---

## 3. Component Specifications

### 3.1 Node Design
```
Background: #F8F8F8 (light) / #1A1A1A (dark)
Border: 2px solid #000000 (light) / #FFFFFF (dark)
Border Radius: 8px
Padding: 16px
Shadow: 0 2px 8px rgba(0,0,0,0.1)

Active State:
- Border: 2px solid #FF5335
- Shadow: 0 2px 12px rgba(255,83,53,0.3)

Header:
- Font: Lexend SemiBold, 16px
- Background: #000000 (light) / #FF5335 (dark)
- Text Color: #FFFFFF
- Padding: 8px 16px
- Border Radius: 6px 6px 0 0
```

### 3.2 Connection Lines
```
Default: 2px solid #000000
Active/Hover: 3px solid #FF5335
Animated: Dashed line animation on active connections
Curve: Bezier with 0.5 control point offset
```

### 3.3 Button System
```
Primary Button:
- Background: #FF5335
- Text: #FFFFFF, Inter Medium 14px
- Padding: 10px 20px
- Border Radius: 6px
- Hover: Background #E64A30
- Active: Background #CC3F2A

Secondary Button:
- Background: #FFFFFF
- Border: 2px solid #000000
- Text: #000000, Inter Medium 14px
- Hover: Background #F8F8F8

Icon Button:
- Size: 32px × 32px
- Background: Transparent
- Hover: Background #F8F8F8
- Active: Background #FF5335, Icon color #FFFFFF
```

### 3.4 Input Fields
```
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 4px
Padding: 8px 12px
Font: Inter Regular 14px
Focus: Border 2px solid #FF5335
Error: Border 2px solid #EF4444
```

### 3.5 Panels and Sidebars
```
Background: #F8F8F8 (light) / #1A1A1A (dark)
Border: 1px solid #E5E5E5 (light) / #333333 (dark)
Padding: 24px
Section Spacing: 32px
Header: Lexend SemiBold 20px
```

---

## 4. Logo Integration

### 4.1 Application Header
- Position: Top-left corner
- Size: 32px height (icon only)
- Spacing: 16px from edges
- Click action: Link to BioKit Labs homepage

### 4.2 Loading Screen
- Full logo (icon + text)
- Size: 180px width
- Center-aligned
- Animated molecular structure (subtle rotation)

### 4.3 About Dialog
- Full logo at 120px width
- Version information below
- BioKit Labs attribution

---

## 5. Dark Mode Specifications

### 5.1 Color Inversions
```
Background: #FFFFFF → #000000
Secondary BG: #F8F8F8 → #1A1A1A
Text: #000000 → #FFFFFF
Borders: #E5E5E5 → #333333
```

### 5.2 Special Handling
- Middle logo circle: Invert from white to black
- Maintain stroke contrast on all elements
- Ensure WCAG AA compliance (4.5:1 contrast ratio)
- Node connections: Use #FFFFFF with 80% opacity

### 5.3 Toggle Implementation
- Position: Top-right corner
- Icon: Sun/Moon toggle
- Smooth transition: 200ms ease-in-out
- Persist user preference in localStorage

---

## 6. Responsive Behavior

### 6.1 Breakpoints
```
Desktop: 1440px and above
Laptop: 1024px - 1439px
Tablet: 768px - 1023px
Mobile: Below 768px (limited functionality notice)
```

### 6.2 Scaling Rules
- Minimum node size: 200px width
- Minimum font size: 12px
- Touch targets: Minimum 44px × 44px on tablet
- Canvas zoom: 50% - 200% range

---

## 7. Animation and Transitions

### 7.1 Micro-interactions
```
Hover transitions: 150ms ease-out
Active state: 100ms ease-out
Panel slides: 300ms ease-in-out
Node connections: 200ms ease-out
```

### 7.2 Loading States
- BioKit molecular animation during load
- Progress bar using BioKit Orange
- Skeleton screens for panel content

---

## 8. Implementation Guidelines

### 8.1 CSS Architecture
```scss
// Design tokens
:root {
  --biokit-orange: #FF5335;
  --biokit-black: #000000;
  --biokit-white: #FFFFFF;
  --bg-light: #FFFFFF;
  --bg-light-secondary: #F8F8F8;
  --bg-dark: #000000;
  
  --font-heading: 'Lexend', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}
```

### 8.2 Component Structure
- Use CSS Modules or styled-components
- Implement theme provider for dark mode
- Create reusable component library
- Document all design tokens

### 8.3 Asset Management
```
/assets/
  /branding/
    - biokit-logo-icon.svg
    - biokit-logo-full.svg
  /icons/
    - [ComfyUI icons in BioKit style]
  /fonts/
    - lexend-*.woff2
    - inter-*.woff2
```

---

## 9. Accessibility Requirements

### 9.1 Standards
- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Screen reader support with proper ARIA labels
- Focus indicators using BioKit Orange

### 9.2 Specific Requirements
- Alt text for all images and icons
- Proper heading hierarchy
- Color-blind friendly indicators beyond color
- Minimum touch target sizes

---

## 10. Testing and Validation

### 10.1 Visual Testing
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Dark mode contrast validation
- Responsive design testing
- Print style validation

### 10.2 Performance Testing
- No increase in render time
- Smooth animations (60fps)
- Efficient asset loading
- Memory usage optimization

### 10.3 User Testing
- A/B testing with existing users
- Accessibility testing with screen readers
- Usability testing for new visual hierarchy
- Feedback collection system

---

## 11. Migration Strategy

### 11.1 Phase 1: Core Components (Week 1-2)
- Typography system
- Color variables
- Button components
- Input fields

### 11.2 Phase 2: Node System (Week 3-4)
- Node styling
- Connection lines
- Canvas background
- Interaction states

### 11.3 Phase 3: Panels and Navigation (Week 5-6)
- Sidebars
- Headers
- Menus
- Dialogs

### 11.4 Phase 4: Polish and Testing (Week 7-8)
- Animation refinement
- Dark mode testing
- Performance optimization
- Bug fixes

---

## 12. Maintenance and Updates

### 12.1 Design System Documentation
- Create Storybook or similar component documentation
- Maintain design token changelog
- Regular brand compliance audits

### 12.2 Version Control
- Tag releases with visual changes
- Maintain backwards compatibility for custom themes
- Provide migration guides for major updates

---

## 13. Appendices

### A. Design Token Reference
[Complete list of CSS variables and their usage]

### B. Component Library
[Detailed specifications for each UI component]

### C. Icon Guidelines
[Rules for creating new icons in BioKit style]

### D. Example Mockups
[Visual references for key screens and states]

---

## Approval and Sign-off

**Product Manager:** ___________________ Date: ___________

**Design Lead:** ___________________ Date: ___________

**Engineering Lead:** ___________________ Date: ___________

**BioKit Brand Team:** ___________________ Date: ___________