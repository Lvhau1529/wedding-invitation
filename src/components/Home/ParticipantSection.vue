<template>
  <section class="py-8 px-4 bg-img-gray relative">
    <p class="text-center mb-6">
      Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân
      trọng!
    </p>

    <div class="flex flex-col gap-2">
      <input
        type="text"
        class="border rounded-lg focus:outline-primary focus:border-primary block w-full p-2.5"
        placeholder="Tên của bạn"
      />

      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full rounded-lg border focus:outline-primary focus:border-primary"
        placeholder="Gửi lời nhắn đến cô dâu chú rể"
      />

      <select
        id="default"
        class="border rounded-lg focus:outline-primary focus:border-primary block w-full p-2.5"
      >
        <option selected>Bạn sẽ đến chứ?</option>
        <option value="US">Mình chắc chắn sẽ đến</option>
        <option value="CA">Xin lỗi mình bận rồi</option>
      </select>

      <div class="mt-4">
        <button
          type="button"
          class="cursor-pointer py-2.5 w-full uppercase px-5 me-2 mb-2 font-medium focus:outline-none bg-white rounded-lg border border-primary hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Gửi lời nhắn
        </button>
        <button
          type="button"
          class="cursor-pointer text-white w-full uppercase bg-primary hover:bg-primary/80 focus:ring-4 focus:ring-primary/30 rounded-lg px-5 py-2.5 me-2 mb-2"
        >
          Mừng cưới
        </button>
      </div>
    </div>
    <CountDownSection />

    <div class="absolute top-0 left-0 z-0 pointer-events-none">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/flower-left-participation.png"
        alt="flower-participant"
      />
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 right-0 z-0 pointer-events-none">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/flower-right-participation.png"
        alt="flower-participant"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CountDownSection from '@/components/Home/CountDownSection.vue'
</script>

<style scoped></style>
