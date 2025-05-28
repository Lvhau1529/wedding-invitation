<template>
  <div class="px-16 py-10">
    <div class="flex justify-center">
      <div
        class="uppercase text-orange-400 text-xs border border-orange-900 rounded-xl px-6 py-2 max-w-fit tracking-widest mb-4"
      >
        READ
      </div>
    </div>
    <h1 class="hero__title max-w-[70%] mx-auto text-center text-7xl font-medium mb-8">
      Insights & AI Innovations
    </h1>
    <p class="text-center text-xl max-w-2xl mx-auto">
      Stay ahead of the curve with our latest insights on AI training, model optimization, and
      industry breakthroughs.
    </p>

    <div class="grid grid-cols-3 gap-10 mt-8">
      <CardItem v-for="i in 3" :key="i">
        <div class="mb-2.5 flex justify-center">
          <img
            class="w-auto h-[180px] object-contain"
            src="https://cdn.prod.website-files.com/679e7f37b8ee13675f5482c3/679f27e4878f40ec11683667_ImagePlaceholder3.avif"
            alt=""
          />
        </div>
        <p class="mb-2.5">AI Trends</p>
        <h5 class="text-3xl font-medium mb-5">
          How to Integrate AI into Business Strategies With Efficiency
        </h5>
        <p class="text-lg">
          Learn how to effectively integrate AI into your business strategies for better outcomes.
        </p>
      </CardItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardItem from '@/components/CardItem.vue'
</script>

<style scoped></style>
