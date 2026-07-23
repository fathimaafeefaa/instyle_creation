import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Allow single-word component names in Nuxt (pages, layouts)
      'vue/multi-word-component-names': 'off',
      // Prefer const
      'prefer-const': 'error',
      // No console in production code (use $logger or server logs)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  }
)
