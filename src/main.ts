import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import VueLazyload from 'vue-lazyload'
import '@lottiefiles/lottie-player'
import 'primeicons/primeicons.css'
import '@/assets/css/index.scss'
import '@/assets/css/tailwind.css'
import loadingImage from './assets/images/tube-spinner.svg'

const app = createApp(App)

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.app-dark',
        cssLayer: false
      }
    }
  })
  .use(ToastService)
  .use(ConfirmationService)
  .use(VueLazyload, {
    loading: loadingImage,
    observer: true,
    observerOptions: {
      rootMargin: '0px',
      threshold: 0.1
    },
    attempt: 1,
    preLoad: 1.3,
    lazyComponent: true,
    listenEvents: ['scroll', 'resize'],
    throttleWait: 200
  })
  .use(router)
  .mount('#app')
