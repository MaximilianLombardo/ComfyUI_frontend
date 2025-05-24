# BioKit PrimeVue Theme Configuration

This document describes the BioKit design system integration with PrimeVue components in ComfyUI.

## Overview

The BioKit theme provides a comprehensive design system that ensures visual consistency across all PrimeVue components. It includes custom colors, typography, spacing, and component-specific styling that aligns with the BioKit brand identity.

## Architecture

### 1. Theme Configuration (`src/config/biokit-primevue-theme.ts`)

The main theme configuration file that defines:
- **Color Palette**: Primary BioKit Orange (#FF5335) and semantic colors
- **Component Overrides**: Specific styling for buttons, inputs, dialogs, etc.
- **Light/Dark Mode Support**: Complete color schemes for both themes

### 2. CSS Overrides (`src/assets/css/biokit-primevue-overrides.css`)

Additional CSS overrides that provide:
- Fine-tuned component styling
- Utility classes (e.g., `.text-muted`)
- Dark mode specific fixes
- Animation and transition effects

### 3. Design Tokens (`src/assets/css/biokit-variables.css`)

Core design system variables including:
- Colors (primary, text, background, border)
- Typography (font families, sizes, weights)
- Spacing scale
- Animation durations and easings

## Key Components Styled

### Buttons
- **Primary**: BioKit Orange background with white text
- **Secondary**: Transparent with themed borders
- **Icon**: 40x40px with subtle borders
- **States**: Hover, active, focus, and disabled states

### Form Inputs
- **Text Inputs**: Rounded corners, themed backgrounds
- **Selects/Dropdowns**: Custom dropdown styling
- **Checkboxes/Radio**: 20x20px with BioKit Orange when checked
- **Focus States**: 2px BioKit Orange border

### Dialogs & Modals
- Rounded corners (12px)
- Proper shadow depths
- Theme-aware backgrounds and borders

### Navigation & Menus
- Sidebar styling with BioKit Orange selection indicators
- Hover states with theme-appropriate colors
- Proper text contrast in both themes

## Usage

The theme is automatically applied when the application loads. No additional configuration is needed for basic usage.

### Accessing Theme Variables

Use CSS custom properties in your components:

```css
.my-component {
  color: var(--fg-color);
  background: var(--bg-color);
  border-color: var(--biokit-orange);
}
```

### Utility Classes

Available utility classes:
- `.text-muted` - Secondary text color

## Dark Mode Support

The theme automatically switches based on the `.dark-theme` class on the document body. All colors and component styles adapt accordingly.

### Key Dark Mode Variables
- Text: White (#FFFFFF)
- Background: Black (#000000)
- Surface colors: Various grays
- Borders: Subtle gray tones

## Maintenance

When updating the theme:

1. **Design Tokens**: Update `biokit-variables.css` for core design changes
2. **PrimeVue Theme**: Modify `biokit-primevue-theme.ts` for component-specific changes
3. **CSS Overrides**: Add fixes to `biokit-primevue-overrides.css` as needed

## Testing

To test theme changes:
1. Toggle between light and dark modes
2. Check all form components (inputs, buttons, selects)
3. Verify dialog and modal appearances
4. Test hover and focus states
5. Ensure proper text contrast ratios

## References

- [PrimeVue Theming Documentation](https://primevue.org/theming)
- [BioKit Design System PRD](../biokit-design-prd.md)