import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

interface CountUpOptions {
  start?: number
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function useCountUp() {
  const initCountUp = (el: HTMLElement | null, options: CountUpOptions) => {
    if (!import.meta.client || !el) return

    const start = options.start ?? 0
    const end = options.end
    const duration = options.duration ?? 1.5
    const prefix = options.prefix ?? ''
    const suffix = options.suffix ?? ''

    const obj = { val: start }

    gsap.to(obj, {
      val: end,
      duration: duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`
      }
    })
  }

  return {
    initCountUp
  }
}
