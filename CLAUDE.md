# ComfyUI Frontend Development Guidelines

## Repository & Workflow
- Fork: MaximilianLombardo/ComfyUI_frontend (git@github.com:MaximilianLombardo/ComfyUI_frontend.git)
- Use `npm run` to see available commands
- Run single tests for performance, not the whole suite
- Add "Fixes #n" to PR descriptions when solving issues

## Development Process
1. Write tests (unit/component/browser as appropriate)
2. Run tests until passing
3. Run `typecheck`, `lint`, `format`
4. Update relevant READMEs and check if docs.comfy.org needs updates

## Commit & PR Conventions
- Use square brackets for prefixes: `[feat]`, `[fix]`, `[docs]` (not `feat:`)
- Never mention Claude/Claude Code in commits, PRs, or documentation

## Code Style & Architecture
- **Priority**: Clean, scalable APIs for thousands of users/extensions
- Follow domain-driven design and design patterns
- Prefer Tailwind utilities over custom CSS
- Dark theme: use `dark-theme:` prefix (not `dark:`)

## Vue 3 Guidelines
- Use Composition API (except when extending PrimeVue components)
- Use Vue 3.5 prop destructuring (maintains reactivity)
- Use vue-i18n for all string literals (src/locales/en/main.json)
- Follow Vue 3 style guide

## Key Resources
- PrimeVue docs: https://primevue.org
- ComfyUI docs: https://docs.comfy.org
- Check README files in key folders (tests-ui, browser_tests, composables, etc.)
- GitHub info: Use API, local copies, or curl HTML/JSON

## Documentation Links
- PrimeVue theming: https://primevue.org/theming
- Vitest browser: https://vitest.dev/guide/browser/
- Playwright: https://playwright.dev/docs/api/class-test
- Electron: https://www.electronjs.org/docs/latest/api/browser-window