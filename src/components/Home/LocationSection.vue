<template>
  <section class="px-8 pb-8 bg-img-gray">
    <div class="flex justify-center pt-4">
      <div class="w-24">
        <img src="@/assets/images/flower-invitation.png" alt="flower" />
      </div>
    </div>

    <p class="text-center uppercase my-4 text-xl font-medium">
      lễ thành hôn được tổ chức vào lúc 18 giờ
    </p>
    <div class="flex flex-col justify-center items-center pt-4">
      <p class="uppercase text-xl font-medium">Thứ bảy</p>
      <div class="flex items-center mt-1">
        <p class="line py-1 relative uppercase text-xl">Tháng 11</p>
        <p class="uppercase text-5xl px-4">01</p>
        <p class="line py-1 uppercase relative text-xl">Năm 2025</p>
      </div>
      <p class="mt-3">(Tức ngày 12 tháng 09 năm Ất Tỵ)</p>
    </div>

    <div class="flex flex-col justify-center items-center mt-5">
      <div class="w-16">
        <img src="@/assets/images/wedding-ring-invitation.png" alt="wedding-ring" />
      </div>
      <p class="uppercase text-xl mt-4">Tại Nguyên Đình Long Biên</p>
      <p class="text-center mt-2">
        Địa chỉ: Tầng 3 TT Thương mại TASCO Mall, Số 7-9 Nguyễn Văn Linh - Việt Hưng - Hà Nội
      </p>
    </div>

    <a
      class="flex items-center justify-center mt-4"
      href="https://maps.app.goo.gl/mQvSoGzjiMHz1ub57"
      target="_blank"
    >
      <div class="w-6 mr-1">
        <img src="@/assets/images/pin-invitation.png" alt="wedding-ring" />
      </div>
      <p class="uppercase text-xl font-medium">Chỉ đường</p>
    </a>
  </section>
</template>

<script setup lang="ts"></script>
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
