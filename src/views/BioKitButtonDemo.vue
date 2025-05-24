<template>
  <div class="biokit-demo-page p-8">
    <h1 class="biokit-h1">BioKit Components Demo</h1>
    <p class="biokit-body-large">
      This page demonstrates the BioKit design system components including
      buttons and form elements.
    </p>

    <!-- Button Components Section -->
    <section class="mb-12">
      <h2 class="biokit-h1">Button Components</h2>

      <div class="mb-8">
        <h3 class="biokit-h2">Primary Buttons</h3>
        <div class="flex gap-4 items-center flex-wrap">
          <button class="biokit-button biokit-btn-primary">
            Primary Button
          </button>
          <button class="biokit-button biokit-btn-primary" disabled>
            Disabled Primary
          </button>
          <button class="biokit-button biokit-btn-primary biokit-btn-small">
            Small Primary
          </button>
          <button class="biokit-button biokit-btn-primary biokit-btn-large">
            Large Primary
          </button>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="biokit-h2">Secondary Buttons</h3>
        <div class="flex gap-4 items-center flex-wrap">
          <button class="biokit-button biokit-btn-secondary">
            Secondary Button
          </button>
          <button class="biokit-button biokit-btn-secondary" disabled>
            Disabled Secondary
          </button>
          <button class="biokit-button biokit-btn-secondary biokit-btn-small">
            Small Secondary
          </button>
          <button class="biokit-button biokit-btn-secondary biokit-btn-large">
            Large Secondary
          </button>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="biokit-h2">Icon Buttons</h3>
        <div class="flex gap-4 items-center flex-wrap">
          <button class="biokit-button biokit-btn-icon">
            <i class="pi pi-home"></i>
          </button>
          <button class="biokit-button biokit-btn-icon" disabled>
            <i class="pi pi-user"></i>
          </button>
          <button class="biokit-button biokit-btn-icon biokit-btn-small">
            <i class="pi pi-cog"></i>
          </button>
          <button class="biokit-button biokit-btn-icon biokit-btn-large">
            <i class="pi pi-search"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Form Components Section -->
    <section class="mb-12">
      <h2 class="biokit-h1">Form Components</h2>

      <div class="grid grid-cols-2 gap-8">
        <!-- Text Inputs -->
        <div>
          <h3 class="biokit-h2">Text Inputs</h3>

          <div class="biokit-form-group">
            <label class="biokit-label">Regular Input</label>
            <input
              type="text"
              class="biokit-input"
              placeholder="Enter text..."
            />
            <div class="biokit-helper-text">This is helper text</div>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label biokit-label-required"
              >Required Input</label
            >
            <input
              type="text"
              class="biokit-input"
              placeholder="This field is required"
            />
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Error State</label>
            <input
              type="text"
              class="biokit-input biokit-input-error"
              value="Invalid input"
            />
            <div class="biokit-error-message">
              <svg
                class="biokit-error-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <line x1="12" y1="8" x2="12" y2="12" stroke-width="2" />
                <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2" />
              </svg>
              This field contains an error
            </div>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Disabled Input</label>
            <input
              type="text"
              class="biokit-input"
              placeholder="Disabled"
              disabled
            />
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Success State</label>
            <input type="text" class="biokit-input" value="Valid input" />
            <div class="biokit-success-message">
              <svg
                class="biokit-success-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M20 6L9 17l-5-5" stroke-width="2" />
              </svg>
              Successfully validated
            </div>
          </div>
        </div>

        <!-- Textarea and Select -->
        <div>
          <h3 class="biokit-h2">Textarea & Select</h3>

          <div class="biokit-form-group">
            <label class="biokit-label">Textarea</label>
            <textarea
              class="biokit-textarea"
              rows="4"
              placeholder="Enter multiple lines of text..."
            ></textarea>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Select Dropdown</label>
            <select class="biokit-select">
              <option>Choose an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Disabled Select</label>
            <select class="biokit-select" disabled>
              <option>Disabled dropdown</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Checkboxes and Radio Buttons -->
      <div class="grid grid-cols-2 gap-8 mt-8">
        <div>
          <h3 class="biokit-h2">Checkboxes</h3>

          <div class="biokit-checkbox-wrapper">
            <input
              id="check1"
              type="checkbox"
              class="biokit-checkbox"
              checked
            />
            <label for="check1">Checked checkbox</label>
          </div>

          <div class="biokit-checkbox-wrapper">
            <input id="check2" type="checkbox" class="biokit-checkbox" />
            <label for="check2">Unchecked checkbox</label>
          </div>

          <div class="biokit-checkbox-wrapper">
            <input
              id="check3"
              type="checkbox"
              class="biokit-checkbox biokit-checkbox-error"
            />
            <label for="check3">Error state checkbox</label>
          </div>

          <div class="biokit-checkbox-wrapper disabled">
            <input
              id="check4"
              type="checkbox"
              class="biokit-checkbox"
              disabled
            />
            <label for="check4">Disabled checkbox</label>
          </div>

          <div class="biokit-checkbox-wrapper disabled">
            <input
              id="check5"
              type="checkbox"
              class="biokit-checkbox"
              checked
              disabled
            />
            <label for="check5">Disabled checked</label>
          </div>
        </div>

        <div>
          <h3 class="biokit-h2">Radio Buttons</h3>

          <div class="biokit-radio-wrapper">
            <input
              id="radio1"
              type="radio"
              name="demo-radio"
              class="biokit-radio"
              checked
            />
            <label for="radio1">Selected radio</label>
          </div>

          <div class="biokit-radio-wrapper">
            <input
              id="radio2"
              type="radio"
              name="demo-radio"
              class="biokit-radio"
            />
            <label for="radio2">Unselected radio</label>
          </div>

          <div class="biokit-radio-wrapper">
            <input
              id="radio3"
              type="radio"
              name="demo-radio"
              class="biokit-radio"
            />
            <label for="radio3">Another option</label>
          </div>

          <div class="biokit-radio-wrapper">
            <input
              id="radio4"
              type="radio"
              name="demo-radio2"
              class="biokit-radio biokit-radio-error"
            />
            <label for="radio4">Error state radio</label>
          </div>

          <div class="biokit-radio-wrapper disabled">
            <input
              id="radio5"
              type="radio"
              name="demo-radio3"
              class="biokit-radio"
              disabled
            />
            <label for="radio5">Disabled radio</label>
          </div>
        </div>
      </div>

      <!-- Form Layout Examples -->
      <div class="mt-8">
        <h3 class="biokit-h2">Form Layout Examples</h3>

        <div class="biokit-panel">
          <h4 class="biokit-h3">Contact Form Example</h4>

          <div class="biokit-form-row">
            <div class="biokit-form-group">
              <label class="biokit-label biokit-label-required"
                >First Name</label
              >
              <input type="text" class="biokit-input" placeholder="John" />
            </div>
            <div class="biokit-form-group">
              <label class="biokit-label biokit-label-required"
                >Last Name</label
              >
              <input type="text" class="biokit-input" placeholder="Doe" />
            </div>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label biokit-label-required">Email</label>
            <input
              type="email"
              class="biokit-input"
              placeholder="john.doe@example.com"
            />
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Subject</label>
            <select class="biokit-select">
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Sales</option>
              <option>Other</option>
            </select>
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Message</label>
            <textarea
              class="biokit-textarea"
              rows="5"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div class="biokit-checkbox-wrapper">
            <input id="newsletter" type="checkbox" class="biokit-checkbox" />
            <label for="newsletter">Subscribe to newsletter</label>
          </div>

          <div class="biokit-form-actions">
            <button class="biokit-button biokit-btn-secondary">Cancel</button>
            <button class="biokit-button biokit-btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>

    <!-- PrimeVue Components Section -->
    <section class="mb-12">
      <h2 class="biokit-h1">PrimeVue Components</h2>

      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3 class="biokit-h2">PrimeVue Inputs</h3>

          <div class="biokit-form-group">
            <label class="biokit-label">InputText</label>
            <InputText placeholder="PrimeVue input" />
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Textarea</label>
            <Textarea rows="3" placeholder="PrimeVue textarea" />
          </div>

          <div class="biokit-form-group">
            <label class="biokit-label">Dropdown</label>
            <Dropdown
              v-model="selectedOption"
              :options="dropdownOptions"
              option-label="label"
              placeholder="Select an option"
            />
          </div>
        </div>

        <div>
          <h3 class="biokit-h2">PrimeVue Checkboxes & Radio</h3>

          <div class="biokit-form-group">
            <div class="flex items-center gap-2">
              <Checkbox
                v-model="checked1"
                :binary="true"
                input-id="pv-check1"
              />
              <label for="pv-check1">PrimeVue Checkbox</label>
            </div>
          </div>

          <div class="biokit-form-group">
            <div class="flex items-center gap-2">
              <Checkbox
                v-model="checked2"
                :binary="true"
                input-id="pv-check2"
              />
              <label for="pv-check2">Another Checkbox</label>
            </div>
          </div>

          <div class="biokit-form-group">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="radioValue"
                  input-id="pv-radio1"
                  value="option1"
                />
                <label for="pv-radio1">Option 1</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="radioValue"
                  input-id="pv-radio2"
                  value="option2"
                />
                <label for="pv-radio2">Option 2</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="radioValue"
                  input-id="pv-radio3"
                  value="option3"
                />
                <label for="pv-radio3">Option 3</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="biokit-h2">PrimeVue Buttons</h3>
        <div class="flex gap-4 flex-wrap">
          <Button label="Primary" severity="primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Danger" severity="danger" />
          <Button label="Warning" severity="warning" />
          <Button label="Info" severity="info" />
          <Button label="Help" severity="help" />
          <Button label="Disabled" disabled />
        </div>

        <div class="flex gap-4 flex-wrap mt-4">
          <Button icon="pi pi-check" label="With Icon" />
          <Button icon="pi pi-times" label="Cancel" severity="secondary" />
          <Button icon="pi pi-plus" rounded />
          <Button icon="pi pi-search" rounded severity="secondary" />
        </div>
      </div>
    </section>

    <!-- Specifications Check -->
    <section>
      <h2 class="biokit-h1">Specifications Checklist</h2>

      <div class="grid grid-cols-2 gap-8">
        <div class="biokit-panel">
          <h3 class="biokit-h3">Text Input / Textarea</h3>
          <ul class="list-disc pl-6">
            <li>Background: White (light) / #2A2A2A (dark) ✓</li>
            <li>Border: 1px solid #E0E0E0 (light) / #404040 (dark) ✓</li>
            <li>Border Radius: 8px ✓</li>
            <li>Padding: 12px 16px ✓</li>
            <li>Font: Inter Regular 14px ✓</li>
            <li>Text Color: Black (light) / White (dark) ✓</li>
            <li>Placeholder: #999999 (light) / #666666 (dark) ✓</li>
            <li>Focus: 2px BioKit Orange border, slight shadow ✓</li>
            <li>Error: Red border (#D32F2F) ✓</li>
            <li>Disabled: 50% opacity, cursor not-allowed ✓</li>
          </ul>
        </div>

        <div class="biokit-panel">
          <h3 class="biokit-h3">Select Dropdown</h3>
          <ul class="list-disc pl-6">
            <li>Style: Similar to text input ✓</li>
            <li>Dropdown Icon: Custom chevron in BioKit Orange ✓</li>
            <li>Background: White (light) / #2A2A2A (dark) ✓</li>
            <li>Border: 1px solid border color ✓</li>
            <li>Shadow: biokit-shadow-md ✓</li>
            <li>Item hover: BioKit Orange background with white text ✓</li>
          </ul>
        </div>

        <div class="biokit-panel">
          <h3 class="biokit-h3">Checkbox / Radio</h3>
          <ul class="list-disc pl-6">
            <li>Size: 20px × 20px ✓</li>
            <li>Border: 2px solid #E0E0E0 (light) / #404040 (dark) ✓</li>
            <li>Border Radius: 4px (checkbox) / 50% (radio) ✓</li>
            <li>Checked Background: BioKit Orange ✓</li>
            <li>Checkmark/dot: White ✓</li>
            <li>Focus: BioKit Orange outline ✓</li>
          </ul>
        </div>

        <div class="biokit-panel">
          <h3 class="biokit-h3">Form Validation States</h3>
          <ul class="list-disc pl-6">
            <li>Error border: Red (#D32F2F) ✓</li>
            <li>Error message: Red text below field ✓</li>
            <li>Success state: Green accent (optional) ✓</li>
            <li>Helper text: Smaller font (12px), muted color ✓</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import { ref } from 'vue'

// Demo data for PrimeVue components
const selectedOption = ref(null)
const dropdownOptions = ref([
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
  { label: 'Option 4', value: 'opt4' }
])

const checked1 = ref(true)
const checked2 = ref(false)
const radioValue = ref('option1')
</script>

<style scoped>
.biokit-demo-page {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
