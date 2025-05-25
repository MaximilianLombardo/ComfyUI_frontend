import '@comfyorg/litegraph/style.css'
import * as Sentry from '@sentry/vue'
import { initializeApp } from 'firebase/app'
import { createPinia } from 'pinia'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'

import '@/assets/css/biokit-components.css'
import '@/assets/css/biokit-nodes.css'
import '@/assets/css/biokit-primevue-overrides.css'
import '@/assets/css/biokit-theme.css'
import '@/assets/css/biokit-variables.css'
import '@/assets/css/style.css'
import { BioKitPreset } from '@/config/biokit-primevue-theme'
import { FIREBASE_CONFIG } from '@/config/firebase'
import router from '@/router'

import App from './App.vue'
import { i18n } from './i18n'

const firebaseApp = initializeApp(FIREBASE_CONFIG)

const app = createApp(App)
const pinia = createPinia()
Sentry.init({
  app,
  dsn: __SENTRY_DSN__,
  enabled: __SENTRY_ENABLED__,
  release: __COMFYUI_FRONTEND_VERSION__,
  integrations: [],
  autoSessionTracking: false,
  defaultIntegrations: false,
  normalizeDepth: 8,
  tracesSampleRate: 0
})
app.directive('tooltip', Tooltip)
app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: BioKitPreset,
      options: {
        prefix: 'p',
        cssLayer: {
          name: 'primevue',
          order: 'primevue, tailwind-utilities'
        },
        // This is a workaround for the issue with the dark mode selector
        // https://github.com/primefaces/primevue/issues/5515
        darkModeSelector: '.dark-theme, :root:has(.dark-theme)'
      }
    }
  })
  .use(ConfirmationService)
  .use(ToastService)
  .use(pinia)
  .use(i18n)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })
  .mount('#vue-app')
// test
