<template>
  <div
    class="biokit-logo-wrapper"
    :class="{ 'biokit-logo-clickable': clickable }"
    @click="handleClick"
  >
    <img
      :src="logoSrc"
      :alt="alt"
      :width="width"
      :height="height"
      class="biokit-logo"
      :class="sizeClass"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useColorPaletteStore } from '@/stores/workspace/colorPaletteStore'

interface Props {
  size?: 'small' | 'medium' | 'large' | 'full'
  variant?: 'icon' | 'full'
  clickable?: boolean
  href?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'icon',
  clickable: true,
  href: 'https://biokit.ai',
  alt: 'BioKit Labs'
})

const colorPaletteStore = useColorPaletteStore()

const sizeClass = computed(() => `biokit-logo-${props.size}`)

const dimensions = computed(() => {
  const sizes = {
    small: { icon: 24, full: 120 },
    medium: { icon: 32, full: 180 },
    large: { icon: 48, full: 280 },
    full: { icon: 64, full: 560 }
  }

  const size = sizes[props.size]
  return props.variant === 'icon'
    ? { width: size.icon, height: size.icon }
    : { width: size.full, height: size.full / 3 } // Assuming 3:1 aspect ratio for full logo
})

const width = computed(() => dimensions.value.width)
const height = computed(() => dimensions.value.height)

const logoSrc = computed(() => {
  const isDark = !colorPaletteStore.completedActivePalette.light_theme
  const variant = props.variant === 'icon' ? 'icon' : 'logo'
  // In dark mode, we want the light logo; in light mode, we want the dark logo (no suffix)
  const theme = isDark ? '' : 'light'
  const suffix = theme ? `-${theme}` : ''

  if (props.variant === 'full') {
    // For full logo, use specific size variants
    const sizeMap = {
      small: '180x60px',
      medium: '280x80px',
      large: '560x160px',
      full: '560x160px'
    }
    return `/assets/images/biokit-labs-logo-dark-${sizeMap[props.size]}-all.svg`
  }

  return `/assets/images/biokit-labs-${variant}${suffix}.svg`
})

const handleClick = () => {
  if (props.clickable && props.href) {
    window.open(props.href, '_blank', 'noopener,noreferrer')
  }
}
</script>

<style scoped>
.biokit-logo-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.biokit-logo-clickable {
  cursor: pointer;
  transition: opacity var(--biokit-duration-normal) var(--biokit-easing-out);
}

.biokit-logo-clickable:hover {
  opacity: 0.8;
}

.biokit-logo {
  user-select: none;
  display: block;
  max-width: 100%;
  height: auto;
}

/* Size classes */
.biokit-logo-small {
  /* Icon: 24px, Full: 120px */
}

.biokit-logo-medium {
  /* Icon: 32px, Full: 180px */
}

.biokit-logo-large {
  /* Icon: 48px, Full: 280px */
}

.biokit-logo-full {
  /* Icon: 64px, Full: 560px */
}
</style>
