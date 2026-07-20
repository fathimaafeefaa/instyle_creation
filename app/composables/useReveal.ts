import { onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null

  const observeAll = (selector = '.reveal') => {
    if (!import.meta.client) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Unobserve after animating in if we want it to run once
          observer?.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer?.observe(el))
  }

  const cleanup = () => {
    observer?.disconnect()
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    observeAll,
    cleanup
  }
}
