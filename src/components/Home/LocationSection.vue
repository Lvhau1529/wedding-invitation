<template>
  <section class="px-8 pb-8 bg-img-gray">
    <div class="flex justify-center pt-4">
      <div class="w-24">
        <img src="@/assets/images/flower-invitation.png" alt="flower" />
      </div>
    </div>

    <p class="text-center uppercase my-4 text-xl font-medium">
      {{ dataDetail.ceremony }}
    </p>
    <div class="flex flex-col justify-center items-center pt-4">
      <p class="uppercase text-xl font-medium">{{ dataDetail.dayOfWeek }}</p>
      <div class="flex items-center mt-1">
        <p class="line py-1 relative uppercase text-xl">{{ dataDetail.month }}</p>
        <p class="uppercase text-5xl px-4">{{ dataDetail.day }}</p>
        <p class="line py-1 uppercase relative text-xl">{{ dataDetail.year }}</p>
      </div>
      <p class="mt-3">({{ dataDetail.date }})</p>
    </div>

    <div class="flex flex-col justify-center items-center mt-5">
      <div class="w-16">
        <img src="@/assets/images/wedding-ring-invitation.png" alt="wedding-ring" />
      </div>
      <p class="uppercase text-center text-xl mt-4">{{ dataDetail.restaurant }}</p>
      <p class="text-center mt-2">Địa chỉ: {{ dataDetail.address }}</p>
    </div>

    <a class="flex items-center justify-center mt-4" :href="dataDetail.map" target="_blank">
      <div class="w-6 mr-1">
        <img src="@/assets/images/pin-invitation.png" alt="wedding-ring" />
      </div>
      <p class="uppercase text-xl font-medium">Chỉ đường</p>
    </a>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  // Interface
  interface DataLocation {
    ceremony: string
    month: string
    dayOfWeek: string
    day: string
    year: string
    date: string
    restaurant: string
    address: string
    map: string
  }

  const route = useRoute()

  // State
  const guest = route.query.guest as string
  const dataLocation: Record<string, DataLocation> = {
    groom: {
      ceremony: 'lễ thành hôn được tổ chức vào lúc 18 giờ',
      month: 'Tháng 11',
      dayOfWeek: 'Thứ bảy',
      day: '01',
      year: 'Năm 2025',
      date: '12 tháng 09 năm Ất Tỵ',
      restaurant: 'Nguyên Đình Long Biên',
      address: 'Tầng 3 TT Thương mại TASCO Mall, Số 7-9 Nguyễn Văn Linh - Việt Hưng - Hà Nội',
      map: 'https://maps.app.goo.gl/nUgyHoFQor7gEQUb8'
    },
    bride: {
      ceremony: 'lễ vu quy được tổ chức vào lúc 18 giờ',
      month: 'Tháng 11',
      dayOfWeek: 'Thứ bảy',
      day: '08',
      year: 'Năm 2025',
      date: '19 tháng 09 năm Ất Tỵ',
      restaurant: 'Trung tâm tiệc cưới Giang Thanh',
      address: '1 P. Thiên Lôi, Đằng Giang - Ngô Quyền - Hải Phòng',
      map: 'https://maps.app.goo.gl/4nujU3TPxE7ihBUJ8'
    }
  }

  // Computed
  const dataDetail = computed(() => {
    if (guest === 'groom') {
      return dataLocation.groom
    } else {
      return dataLocation.bride
    }
  })
</script>
<style scoped lang="scss">
  .line {
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--color-primary);
      top: 0;
      left: 0;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--color-primary);
      bottom: 0;
      left: 0;
    }
  }
</style>
