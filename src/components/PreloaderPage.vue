<template>
  <div class="preloader-page flex items-center justify-center">
    <lottie-player
      :src="lottieUrl"
      :loop="true"
      :autoplay="true"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script setup lang="ts">
  import lottieUrl from '@/assets/lottie/weddingfloral.json?url'
</script>

<style scoped lang="scss">
  .preloader-page {
    height: 100vh;
  }
</style>
