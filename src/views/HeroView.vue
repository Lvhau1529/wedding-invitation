<template>
  <div class="px-16 py-10">
    <!-- Hero -->
    <div class="flex justify-center">
      <div
        class="uppercase text-orange-400 text-xs border border-orange-900 rounded-xl px-6 py-2 max-w-fit tracking-widest mb-4"
      >
        AI TRAINER MODELS SOLUTION
      </div>
    </div>
    <h1 class="hero__title max-w-[70%] mx-auto text-center text-7xl font-medium mb-8">
      Unlock the Full Potential of Your AI Models
    </h1>
    <p class="text-center text-white text-xl max-w-2xl mx-auto mb-10">
      We develop cutting-edge AI training models to accelerate your innovation. Smarter, faster, and
      more efficient AI starts here.
    </p>
    <div class="flex justify-center">
      <button
        class="text-white text-xl px-8 py-2 rounded-2xl border-2 border-orange-400 cursor-pointer hover:bg-orange-400"
      >
        Get Started
      </button>
    </div>
    <div class="w-auto h-[500px] flex justify-center items-center my-10 bg-transparent">
      <img
        class="hero__image w-auto h-full bg-transparent"
        src="https://cdn.prod.website-files.com/679e441b90452288c5c37443/679e5e9377ed62684eb7b990_Shape2-min-p-800.avif"
        alt="ball"
      />
    </div>
    <!-- End Hero -->
  </div>
</template>

<script setup lang="ts">
  import { gsap } from 'gsap'
  import { onMounted } from 'vue'

  onMounted(() => {
    gsap.to('.hero__image', {
      rotate: 360,
      duration: 18,
      ease: 'linear',
      repeat: -1
    })
  })
</script>

<style lang="scss" scoped>
  .hero__title {
    background-image: linear-gradient(150deg, rgb(255, 255, 255), rgb(255, 121, 63));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .hero__image {
    will-change: transform;
  }
</style>
