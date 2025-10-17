// src/env.d.ts

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*?url' {
  const src: string
  export default src
}

declare module '@lottiefiles/lottie-player'