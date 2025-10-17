<template>
  <section class="bg-primary py-8 px-4 lazy-section">
    <div class="flex items-center">
      <p class="text-white whitespace-nowrap text-5xl font-great-vibes mr-4">
        Kỷ niệm của chúng tôi
      </p>
      <div class="w-full h-[1px] bg-white" />
    </div>
    <p class="text-white my-7">
      Album này ghi lại những khoảnh khắc đẹp nhất trong ngày đặc biệt của chúng tôi - tràn đầy tình
      yêu, niềm vui và những kỷ niệm không thể nào quên. Từ lời thề nguyện chân thành đến điệu nhảy
      đầu tiên, mỗi bức ảnh đều kể lại câu chuyện về hành trình của hai chúng tôi. Giữa vòng tay của
      gia đình và bạn bè, chúng tôi đã cùng nhau đón mừng một tình yêu sẽ bền lâu suốt đời.
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
          class="w-full h-full object-cover object-[70%_50%]"
          src="@/assets/images/IMG_7342.jpg"
          alt="flower-album"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      <div>
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/IMG_7368.jpg"
          alt="flower-album"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      <div class="col-start-2 row-start-2">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/IMG_7442.jpg"
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
          <img
            class="w-full h-full"
            :src="item.img"
            alt="album-image"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import mainImage from '@/assets/images/IMG_7305.jpg'
  import img1 from '@/assets/images/IMG_7598.jpg'
  import img2 from '@/assets/images/IMG_7625.jpg'
  import img3 from '@/assets/images/IMG_7655.jpg'
  import img4 from '@/assets/images/IMG_7711.jpg'
  import img5 from '@/assets/images/IMG_7720.jpg'
  import img6 from '@/assets/images/IMG_7605.jpg'

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
      img: img6
    },
    {
      id: 4,
      img: img3
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img4
    }
  ])
</script>

<style scoped lang="scss">
  :deep(img) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .lazy-section {
    content-visibility: auto;
    contain-intrinsic-size: 800px 600px;
  }
</style>
