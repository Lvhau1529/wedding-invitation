<template>
  <section class="bg-primary py-8 px-4 lazy-section">
    <div class="flex items-center">
      <p class="text-white whitespace-nowrap text-5xl font-great-vibes mr-4">Album của chúng tôi</p>
      <div class="w-full h-[1px] bg-white" />
    </div>
    <p class="text-white my-7">
      Album này ghi lại những khoảnh khắc đẹp nhất trong ngày đặc biệt của chúng tôi - tràn đầy tình
      yêu, niềm vui và những kỷ niệm không thể nào quên.
    </p>

    <div class="mb-3 h-72">
      <img
        class="w-full h-full object-cover"
        :src="mainImage"
        alt="Image"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </div>

    <div class="grid grid-cols-2 grid-rows-2 gap-2 mb-3 h-90">
      <div class="row-span-2">
        <img
          v-lazy="subImage1"
          class="w-full h-full object-cover object-[70%_50%]"
          alt="flower-album"
        />
      </div>
      <div>
        <img
          v-lazy="subImage2"
          class="w-full h-full object-cover"
          alt="flower-album"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      <div class="col-start-2 row-start-2">
        <img
          v-lazy="subImage3"
          class="w-full h-full object-cover"
          alt="flower-album"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <template v-for="item in albumRepresent" :key="item.id">
        <div :id="`album-${item.id}`" class="h-64">
          <img v-lazy="item.img" class="w-full h-full" alt="album-image" />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import mainImage from '@/assets/images/LEW02189.jpg'
  import subImage1 from '@/assets/images/LEW02194.jpg'
  import subImage2 from '@/assets/images/LEW02331.jpg'
  import subImage3 from '@/assets/images/LEW02349.jpg'
  import img1 from '@/assets/images/LEW02378.jpg'
  import img2 from '@/assets/images/LEW02486.jpg'
  import img3 from '@/assets/images/LEW02507.jpg'
  import img4 from '@/assets/images/LEW02529.jpg'
  import img5 from '@/assets/images/LEW02646.jpg'
  import img6 from '@/assets/images/LEW02672.jpg'
  import img7 from '@/assets/images/LEW02696.jpg'
  import img8 from '@/assets/images/LEW02701.jpg'

  const albumRepresent = ref([
    {
      id: 1,
      img: img1
    },
    {
      id: 2,
      img: img2
    },
    {
      id: 3,
      img: img3
    },
    {
      id: 4,
      img: img4
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
    {
      id: 7,
      img: img7
    },
    {
      id: 8,
      img: img8
    }
  ])
</script>

<style scoped lang="scss">
  :deep(img) {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    image-rendering: -webkit-optimize-contrast;
  }
  .lazy-section {
    content-visibility: auto;
    contain-intrinsic-size: 800px 600px;
  }
</style>
