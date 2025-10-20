<template>
  <div class="pb-8">
    <div class="h-[420px] relative">
      <img src="@/assets/images/timeline.webp" alt="flower" class="w-full h-full object-cover" />
      <p
        class="text-center text-4xl text-white font-prata absolute bottom-3 left-1/2 -translate-x-1/2 z-1 italic"
      >
        Lịch trình
      </p>
      <div class="bg-overlay" />
    </div>

    <div class="relative h-[580px] bg-img-gray pt-14">
      <div class="px-8 mt-16">
        <template v-for="item in timeline" :key="item.id">
          <div class="flex items-center justify-center" :class="item.id === 3 ? '' : 'mb-10'">
            <div class="max-w-[60px]">
              <img class="object-cover w-full h-full" :src="item.img" :alt="item.title" />
            </div>
            <p class="flex-shrink-0 text-xl font-medium px-3.5">{{ item.time }}</p>
            <div>
              <p class="uppercase font-medium">{{ item.title }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </template>
      </div>

      <div class="absolute top-0 right-0 pointer-events-none">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/flower-timeline.png"
          alt="flower-timeline"
        />
      </div>
      <div class="absolute bottom-[-150px] left-0 pointer-events-none">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/sea-timeline.png"
          alt="sea-timeline"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import gate from '@/assets/images/gate-timeline.png'
  import ring from '@/assets/images/proposal-ring-timeline.png'
  import champagne from '@/assets/images/champagne-timeline.png'

  const timelineGroom = [
    {
      id: 1,
      img: gate,
      time: '18:00',
      title: 'Đón khách',
      description: 'Checkin và gửi lời chúc phúc đến CDCR'
    },
    {
      id: 2,
      img: ring,
      time: '18:30',
      title: 'Lễ thành hôn',
      description: 'Cùng nhau chứng kiến khoảnh khắc thiêng liêng cùng CDCR'
    },
    {
      id: 3,
      img: champagne,
      time: '18:45',
      title: 'Khai tiệc',
      description: 'Cùng nhau ăn tiệc và nâng ly chúc mừng CDCR'
    }
  ]

  const timelineBride = [
    {
      id: 1,
      img: gate,
      time: '11:00',
      title: 'Đón khách',
      description: 'Checkin và gửi lời chúc phúc đến CDCR'
    },
    {
      id: 2,
      img: ring,
      time: '11:30',
      title: 'Lễ vu quy',
      description: 'Cùng nhau chứng kiến khoảnh khắc thiêng liêng cùng CDCR'
    },
    {
      id: 3,
      img: champagne,
      time: '11:45',
      title: 'Khai tiệc',
      description: 'Cùng nhau ăn tiệc và nâng ly chúc mừng CDCR'
    }
  ]

  const route = useRoute()
  const guest = route.query.guest as string

  const timeline = computed(() => {
    return guest === 'groom' ? timelineGroom : timelineBride
  })
</script>

<style scoped lang="scss"></style>
