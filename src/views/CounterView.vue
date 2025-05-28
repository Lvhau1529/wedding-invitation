<template>
  <div class="grid grid-cols-2 gap-10 px-16 py-28">
    <div class="col-span-1">
      <div
        class="counter__subtitle px-6 py-2 mb-4 text-xs tracking-widest text-orange-400 uppercase border border-orange-900 rounded-xl max-w-fit"
      >
        TRAIN LIKE A BEAST
      </div>
      <h2 class="counter__title max-w-xl mb-10 text-6xl font-medium">
        Why Our AI Trainers Make a Difference
      </h2>
      <p class="counter__description max-w-2xl mb-10 text-xl">
        AI training shouldn’t be a bottleneck—it should be an accelerator. Our models are built for
        efficiency, precision, and scalability, helping you achieve faster training times, reduced
        costs, and higher accuracy. Whether you're optimizing large-scale machine learning pipelines
        or fine-tuning models for specific applications, our technology ensures maximum performance
        with minimal resources
      </p>
    </div>
    <div class="col-span-1">
      <div class="grid h-full grid-cols-6 grid-rows-3 gap-6">
        <div
          class="col-span-3 col-start-3 p-11 rounded-2xl"
          style="background-image: linear-gradient(140deg, #38281d80, #38261d40)"
        >
          <div class="flex flex-col">
            <div class="text-5xl font-medium">3X</div>
            <div class="text-lg">Faster Training</div>
          </div>
        </div>
        <div
          class="col-span-3 row-start-2 p-11 rounded-2xl"
          style="background-image: linear-gradient(140deg, #38261d, #38281d80)"
        >
          <div class="flex flex-col">
            <div class="text-5xl font-medium">50%</div>
            <div class="text-lg">Lower Costs</div>
          </div>
        </div>
        <div
          class="col-span-3 col-start-4 row-start-2 p-11 rounded-2xl"
          style="background-image: linear-gradient(140deg, #38281d80, #38261d40)"
        >
          <div class="flex flex-col">
            <div class="text-5xl font-medium">98%</div>
            <div class="text-lg">Model Accuracy</div>
          </div>
        </div>
        <div
          class="col-span-3 col-start-2 row-start-3 p-11 rounded-2xl"
          style="background-image: linear-gradient(140deg, #38281d80, #38261d40)"
        >
          <div class="flex flex-col">
            <div class="text-5xl font-medium">100+</div>
            <div class="text-lg">Clients Worldwide</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { useFade } from '@/composables/useFade'

  gsap.registerPlugin(ScrollTrigger)

  useFade('.counter__subtitle')
  useFade('.counter__title')
  useFade('.counter__description')
</script>

<style scoped></style>
