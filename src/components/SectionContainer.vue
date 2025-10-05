<template>
  <div class="py-22">
    <h3 class="section-title relative font-great-vibes text-center text-5xl mb-11 pt-2">
      {{ props.title }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .section-title {
    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 0;
      background: url('https://themegeniuslab.com/html/pretty/assets/images/sec-title-flower.png')
        no-repeat center center;
      width: 100%;
      height: 100%;
    }
  }
</style>
