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

  const loading = ref(true)
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 3000)
  })
</script>

<style lang="scss" scoped>
  .main__container {
    max-width: 440px;
    margin: 0 auto;
  }
</style>
