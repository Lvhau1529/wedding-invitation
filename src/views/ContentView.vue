<template>
  <div class="px-10 py-10">
    <div class="flex justify-center">
      <div
        class="px-6 py-2 mb-4 text-xs tracking-widest text-orange-400 uppercase border border-orange-900 rounded-xl max-w-fit"
      >
        WHAT WE DO
      </div>
    </div>
    <h2 class="max-w-xl mx-auto mb-10 text-6xl font-medium text-center">
      Your AI models deserve better
    </h2>
    <p class="max-w-2xl mx-auto mb-10 text-xl text-center">
      Building AI is challenging, but it shouldn’t be a roadblock. We solve the biggest hurdles in
      AI training—so you can focus on innovation, not limitations.
    </p>
    <div class="grid grid-cols-3 gap-6 mx-auto">
      <div v-for="index in 6" :key="index" class="px-8 py-12 rounded-2xl bg-[#38261d40]">
        <div class="mx-auto mb-5 w-14">
          <img
            class="w-full"
            src="https://cdn.prod.website-files.com/679e441b90452288c5c37443/679e64e0ef91d7de0cb76f9a_clock.svg"
            alt=""
          />
        </div>
        <h6 class="mb-4 text-3xl font-medium text-center">
          Training AI is Expensive & Time-Consuming
        </h6>
        <p class="mb-10 text-center text-xl/relaxed line-h">
          Our optimized models reduce training time and computational costs by up to 60%, making AI
          development more accessible.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
