import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import '@lottiefiles/lottie-player' 
import 'primeicons/primeicons.css'
import '@/assets/css/index.scss'
import '@/assets/css/tailwind.css'

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
  .use(router)
  .mount('#app')
