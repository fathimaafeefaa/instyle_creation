// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false, // Prettier handles formatting
  },
}).append({
  rules: {
    // Allow single-word component names in Nuxt (pages, layouts)
    'vue/multi-word-component-names': 'off',
    // Prefer const
    'prefer-const': 'error',
    // No console in production code (use $logger or server logs)
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
})
