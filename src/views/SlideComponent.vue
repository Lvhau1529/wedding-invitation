<template>
  <div class="relative">
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide>
        <img
          :src="'https://images.unsplash.com/photo-1745679519301-4d612cdea170?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          alt=""
          srcset=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src=""
          alt=""
          srcset="
            https://images.unsplash.com/photo-1746897785282-cfbdf7497f39?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          "
        />
      </swiper-slide>
    </swiper>
    <div class="absolute top-0 w-[90%] left-[50%] translate-x-[-50%] h-full z-10">
      <div class="flex justify-center items-center h-full px-4">
        <h1 class="title text-center text-white text-7xl text-shadow-amber-50">Văn Hậu</h1>
        <span class="title text-white text-7xl text-shadow-amber-50 mx-4">&</span>
        <h1 class="title text-center text-white text-7xl text-shadow-amber-50">Anh Ngân</h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import { Pagination, Navigation } from 'swiper/modules'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
      }
    }
  }
</script>

<style scoped lang="scss">
  .swiper {
    width: 100%;
    height: calc(100vh - 100px);
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    font-family: 'Great Vibes', cursive;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>
