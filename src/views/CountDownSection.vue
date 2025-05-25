<template>
  <SectionContainer title="Save The Date">
    <h3 class="text-center text-3xl italic mb-5">21 Oct 2025</h3>
    <div class="flex items-center justify-center gap-8">
      <div class="time flex items-center justify-center w-45 h-45">
        <div class="flex flex-col items-center gap-2 font-great-vibes">
          <p class="text-5xl font-great-vibes">00</p>
          <p>Days</p>
        </div>
      </div>
      <div class="time flex items-center justify-center w-45 h-45">
        <div class="flex flex-col items-center gap-2 font-great-vibes">
          <p class="text-5xl font-great-vibes">00</p>
          <p>Days</p>
        </div>
      </div>
      <div class="time flex items-center justify-center w-45 h-45">
        <div class="flex flex-col items-center gap-2 font-great-vibes">
          <p class="text-5xl font-great-vibes">00</p>
          <p>Days</p>
        </div>
      </div>
      <div class="time flex items-center justify-center w-45 h-45">
        <div class="flex flex-col items-center gap-2 font-great-vibes">
          <p class="text-5xl font-great-vibes">00</p>
          <p>Days</p>
        </div>
      </div>
    </div>
  </SectionContainer>
  <!-- <div class="py-22 flex justify-center">
    <div class="text-center">
      <h2 class="font-great-vibes text-5xl mb-11">Save The Date</h2>
    </div>
  </div> -->
</template>
<script setup lang="ts">
  import SectionContainer from '../components/SectionContainer.vue'
</script>
<style lang="scss" scoped>
  .time {
    background: url(https://themegeniuslab.com/html/pretty/assets/images/clock-bg.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
