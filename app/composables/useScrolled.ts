/**
 * app/composables/useScrolled.ts
 *
 * Shared reactive scroll state.
 * Returns `scrolled` (boolean) — true once the page has scrolled past the
 * given threshold (default: 80px, roughly the hero-overlapping header zone).
 *
 * Using a module-level singleton so the scroll listener is registered only
 * once regardless of how many components consume the composable.
 *
 * Usage:
 *   const { scrolled } = useScrolled()          // default 80px threshold
 *   const { scrolled } = useScrolled({ threshold: 120 })
 */

const scrolled = ref(false)
let registered = false

function register(threshold: number) {
  if (registered || import.meta.server) return
  registered = true

  const update = () => {
    scrolled.value = window.scrollY > threshold
  }

  window.addEventListener('scroll', update, { passive: true })
  update() // run once on mount to capture initial state
}

export function useScrolled(options: { threshold?: number } = {}) {
  const { threshold = 80 } = options

  onMounted(() => register(threshold))

  return { scrolled: readonly(scrolled) }
}
