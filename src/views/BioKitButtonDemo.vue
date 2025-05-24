<template>
  <div class="biokit-button-demo p-8">
    <h1 class="biokit-h1">BioKit Button Components Demo</h1>

    <section class="mb-8">
      <h2 class="biokit-h2">Primary Buttons</h2>
      <div class="flex gap-4 items-center flex-wrap">
        <button class="biokit-btn-primary">Primary Button</button>
        <button class="biokit-btn-primary" disabled>Disabled Primary</button>
        <button class="biokit-btn-primary biokit-btn-small">
          Small Primary
        </button>
        <button class="biokit-btn-primary biokit-btn-large">
          Large Primary
        </button>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="biokit-h2">Secondary Buttons</h2>
      <div class="flex gap-4 items-center flex-wrap">
        <button class="biokit-btn-secondary">Secondary Button</button>
        <button class="biokit-btn-secondary" disabled>
          Disabled Secondary
        </button>
        <button class="biokit-btn-secondary biokit-btn-small">
          Small Secondary
        </button>
        <button class="biokit-btn-secondary biokit-btn-large">
          Large Secondary
        </button>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="biokit-h2">Icon Buttons</h2>
      <div class="flex gap-4 items-center flex-wrap">
        <button class="biokit-btn-icon">
          <i class="pi pi-home"></i>
        </button>
        <button class="biokit-btn-icon" disabled>
          <i class="pi pi-user"></i>
        </button>
        <button class="biokit-btn-icon biokit-btn-small">
          <i class="pi pi-cog"></i>
        </button>
        <button class="biokit-btn-icon biokit-btn-large">
          <i class="pi pi-search"></i>
        </button>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="biokit-h2">Buttons with Icons</h2>
      <div class="flex gap-4 items-center flex-wrap">
        <button class="biokit-btn-primary">
          <i class="pi pi-plus mr-2"></i>
          Add Item
        </button>
        <button class="biokit-btn-secondary">
          <i class="pi pi-download mr-2"></i>
          Download
        </button>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="biokit-h2">Interactive States</h2>
      <p class="biokit-body mb-4">
        Hover over buttons to see hover states. Click to see active states. Tab
        to see focus states.
      </p>
      <div class="grid grid-cols-3 gap-4 max-w-2xl">
        <div>
          <h3 class="biokit-h4">Primary States</h3>
          <button class="biokit-btn-primary mb-2 w-full">Normal</button>
          <button class="biokit-btn-primary mb-2 w-full hover">
            Hover (simulated)
          </button>
          <button class="biokit-btn-primary mb-2 w-full active">
            Active (simulated)
          </button>
        </div>
        <div>
          <h3 class="biokit-h4">Secondary States</h3>
          <button class="biokit-btn-secondary mb-2 w-full">Normal</button>
          <button class="biokit-btn-secondary mb-2 w-full hover">
            Hover (simulated)
          </button>
          <button class="biokit-btn-secondary mb-2 w-full active">
            Active (simulated)
          </button>
        </div>
        <div>
          <h3 class="biokit-h4">Icon States</h3>
          <button class="biokit-btn-icon mb-2">
            <i class="pi pi-star"></i>
          </button>
          <button class="biokit-btn-icon mb-2 hover">
            <i class="pi pi-star"></i>
          </button>
          <button class="biokit-btn-icon mb-2 active">
            <i class="pi pi-star"></i>
          </button>
        </div>
      </div>
    </section>

    <section>
      <h2 class="biokit-h2">Specifications Check</h2>
      <div class="biokit-panel">
        <h3 class="biokit-h3">Primary Button</h3>
        <ul class="list-disc pl-6 mb-4">
          <li>Background: BioKit Orange (#FF5335) ✓</li>
          <li>Text: White (#FFFFFF) ✓</li>
          <li>Border: None ✓</li>
          <li>Border Radius: 8px ✓</li>
          <li>Padding: 12px 24px ✓</li>
          <li>Font: Inter Medium 14px ✓</li>
          <li>Hover: Darker orange (#E03D20) ✓</li>
          <li>Active: Even darker (#CC3015) ✓</li>
          <li>Disabled: 50% opacity ✓</li>
        </ul>

        <h3 class="biokit-h3">Secondary Button</h3>
        <ul class="list-disc pl-6 mb-4">
          <li>Background: Transparent ✓</li>
          <li>Text: Black (light) / White (dark) ✓</li>
          <li>Border: 2px solid black (light) / white (dark) ✓</li>
          <li>Border Radius: 8px ✓</li>
          <li>Padding: 10px 22px (accounting for border) ✓</li>
          <li>Font: Inter Medium 14px ✓</li>
          <li>Hover: BioKit Orange border and text ✓</li>
          <li>Active: Filled with BioKit Orange, white text ✓</li>
          <li>Disabled: 50% opacity ✓</li>
        </ul>

        <h3 class="biokit-h3">Icon Button</h3>
        <ul class="list-disc pl-6">
          <li>Size: 40px × 40px ✓</li>
          <li>Background: Transparent ✓</li>
          <li>Icon Color: Black (light) / White (dark) ✓</li>
          <li>Border: 1px solid #E0E0E0 (light) / #333333 (dark) ✓</li>
          <li>Border Radius: 8px ✓</li>
          <li>Hover: BioKit Orange icon color ✓</li>
          <li>Active: BioKit Orange background, white icon ✓</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Demo page for BioKit button components
</script>

<style scoped>
/* Simulated hover state for demonstration */
.hover:not(:disabled) {
  background-color: #e03d20 !important;
  transform: translateY(-1px) !important;
  box-shadow: var(--biokit-shadow-md) !important;
}

.biokit-btn-secondary.hover:not(:disabled) {
  background-color: transparent !important;
  color: var(--biokit-orange) !important;
  border-color: var(--biokit-orange) !important;
}

.biokit-btn-icon.hover:not(:disabled) {
  background-color: transparent !important;
  color: var(--biokit-orange) !important;
  border-color: var(--biokit-orange) !important;
}

/* Simulated active state for demonstration */
.active:not(:disabled) {
  background-color: #cc3015 !important;
  transform: translateY(0) !important;
  box-shadow: var(--biokit-shadow-sm) !important;
}

.biokit-btn-secondary.active:not(:disabled) {
  background-color: var(--biokit-orange) !important;
  color: #ffffff !important;
  border-color: var(--biokit-orange) !important;
}

.biokit-btn-icon.active:not(:disabled) {
  background-color: var(--biokit-orange) !important;
  color: #ffffff !important;
  border-color: var(--biokit-orange) !important;
}
</style>
