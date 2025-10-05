<template>
  <div class="main__container">
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
</template>

<script setup lang="ts">
  import SaveTheDateSection from '@/components/Home/SaveTheDateSection.vue'
  import BannerSection from '@/components/Home/BannerSection.vue'
  import CalendarSection from '@/components/Home/CalendarSection.vue'
  import InvitationSection from '@/components/Home/InvitationSection.vue'
  import LocationSection from '@/components/Home/LocationSection.vue'
  import TimeLineSection from '@/components/Home/TimeLineSection.vue'
  import AlbumSection from '@/components/Home/AlbumSection.vue'
  import ParticipantSection from '@/components/Home/ParticipantSection.vue'
  import ThanksSection from '@/components/Home/ThanksSection.vue'
</script>

<style lang="scss" scoped>
  .main__container {
    max-width: 440px;
    margin: 0 auto;
  }
</style>
