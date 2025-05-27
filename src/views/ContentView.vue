<template>
  <div class="px-10 py-28">
    <div class="flex justify-center">
      <div
        class="px-6 py-2 mb-4 text-xs tracking-widest text-orange-400 uppercase border border-orange-900 rounded-xl max-w-fit"
      >
        WHAT WE DO
      </div>
    </div>
    <h2 class="max-w-xl mx-auto mb-10 text-6xl font-medium text-center opacity-0 section-title">
      Your AI models deserve better
    </h2>
    <p class="max-w-2xl mx-auto mb-10 text-xl text-center opacity-0 section-paragraph">
      Building AI is challenging, but it shouldn't be a roadblock. We solve the biggest hurdles in
      AI training—so you can focus on innovation, not limitations.
    </p>
    <div class="grid grid-cols-3 gap-6 mx-auto grid-container">
      <!-- Row 1 -->
      <div
        v-for="index in 3"
        :key="index"
        class="grid-row-1 grid-item px-8 py-12 rounded-2xl bg-[#38261d40] opacity-0"
      >
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

      <!-- Row 2 -->
      <div
        v-for="index in 3"
        :key="index + 3"
        class="grid-row-2 grid-item px-8 py-12 rounded-2xl bg-[#38261d40] opacity-0"
      >
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

<script setup lang="ts">
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMounted } from 'vue'

  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    // Animation cho tiêu đề
    gsap.fromTo(
      '.section-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 90%',
          toggleActions: 'play reset play reverse'
        }
      }
    )

    // Animation cho đoạn văn
    gsap.fromTo(
      '.section-paragraph',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-paragraph',
          start: 'top 90%',
          toggleActions: 'play reset play reverse'
        }
      }
    )

    // Animation cho dòng 1 của grid
    gsap.fromTo(
      '.grid-row-1',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.grid-row-1',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animation cho dòng 2 của grid
    gsap.fromTo(
      '.grid-row-2',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.grid-row-2',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
</script>

<style scoped></style>
