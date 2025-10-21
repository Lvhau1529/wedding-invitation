<template>
  <div class="main__container app-dark">
    <PreloaderPage v-if="loading" />
    <div v-show="!loading">
      <BannerSection />
      <SaveTheDateSection />
      <CalendarSection />
      <InvitationSection />
      <LocationSection />
      <TimeLineSection />
      <AlbumSection />
      <ParticipantSection />
      <ThanksSection />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import PreloaderPage from '@/components/PreloaderPage.vue'
  import SaveTheDateSection from '@/components/Home/SaveTheDateSection.vue'
  import BannerSection from '@/components/Home/BannerSection.vue'
  import CalendarSection from '@/components/Home/CalendarSection.vue'
  import InvitationSection from '@/components/Home/InvitationSection.vue'
  import LocationSection from '@/components/Home/LocationSection.vue'
  import TimeLineSection from '@/components/Home/TimeLineSection.vue'
  import AlbumSection from '@/components/Home/AlbumSection.vue'
  import ParticipantSection from '@/components/Home/ParticipantSection.vue'
  import ThanksSection from '@/components/Home/ThanksSection.vue'
  import heroBannerUrl from '@/assets/images/LEW02374.webp'

  const loading = ref(true)

  function delay(ms: number) {
    return new Promise<void>(resolve => setTimeout(resolve, ms))
  }

  function preloadImage(url: string) {
    return new Promise<void>(resolve => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => resolve() // fail-safe: don't block forever
      img.src = url
    })
  }

  onMounted(async () => {
    // Ensure the hero banner is in cache before we hide the preloader
    await Promise.all([
      preloadImage(heroBannerUrl),
      delay(1200) // let lottie play briefly for UX; adjust as desired
    ])
    loading.value = false
  })
</script>

<style lang="scss" scoped>
  .main__container {
    max-width: 440px;
    margin: 0 auto;
  }
</style>
