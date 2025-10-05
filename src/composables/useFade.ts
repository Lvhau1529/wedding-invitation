// useFade.ts
import { gsap } from 'gsap'
import { onMounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFade(selector: string, config: any = {}) {
  onMounted(() => {
    gsap.fromTo(
      selector,
      { y: 50, opacity: 0, ...config.from },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        ...config.to,
        scrollTrigger: {
          trigger: selector,
          start: 'top 90%',
          toggleActions: 'play reset play reverse',
          ...config.scrollTrigger
        }
      }
    )
  })
}
