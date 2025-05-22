<template>
  <Button
    v-tooltip="{ value: tooltip, showDelay: 300, hideDelay: 300 }"
    text
    :pt="{
      root: {
        class: `side-bar-button ${
          selected
            ? 'p-button-primary side-bar-button-selected'
            : 'p-button-secondary'
        }`,
        'aria-label': tooltip
      }
    }"
    @click="emit('click', $event)"
  >
    <template #icon>
      <OverlayBadge v-if="shouldShowBadge" :value="overlayValue">
        <i :class="icon + ' side-bar-button-icon'" />
      </OverlayBadge>
      <i v-else :class="icon + ' side-bar-button-icon'" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import OverlayBadge from 'primevue/overlaybadge'
import { computed } from 'vue'

const {
  icon = '',
  selected = false,
  tooltip = '',
  iconBadge = ''
} = defineProps<{
  icon?: string
  selected?: boolean
  tooltip?: string
  iconBadge?: string | (() => string | null)
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
const overlayValue = computed(() =>
  typeof iconBadge === 'function' ? iconBadge() ?? '' : iconBadge
)
const shouldShowBadge = computed(() => !!overlayValue.value)
</script>

<style>
.side-bar-button-icon {
  font-size: var(--sidebar-icon-size) !important;
}

.side-bar-button-selected .side-bar-button-icon {
  font-size: var(--sidebar-icon-size) !important;
  font-weight: bold;
  color: #ff5335 !important; /* BioKit orange for selected icons */
}

.dark-theme .side-bar-button-selected .side-bar-button-icon {
  color: #ff5335 !important; /* Ensure BioKit orange in dark mode too */
}
</style>

<style scoped>
.side-bar-button {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
  border-radius: 0;
}

.comfyui-body-left .side-bar-button.side-bar-button-selected,
.comfyui-body-left .side-bar-button.side-bar-button-selected:hover {
  border-left: 4px solid #ff5335; /* BioKit orange border */
}

.comfyui-body-right .side-bar-button.side-bar-button-selected,
.comfyui-body-right .side-bar-button.side-bar-button-selected:hover {
  border-right: 4px solid #ff5335; /* BioKit orange border */
}

/* Add hover effect for better UX */
.side-bar-button:hover:not(.side-bar-button-selected) {
  background-color: rgba(255, 83, 53, 0.1); /* Subtle BioKit orange hover */
}

.dark-theme .side-bar-button:hover:not(.side-bar-button-selected) {
  background-color: rgba(
    255,
    83,
    53,
    0.2
  ); /* Slightly more visible in dark mode */
}
</style>
