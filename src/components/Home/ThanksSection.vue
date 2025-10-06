<template>
  <section class="bg-image h-[300px] relative">
    <div class="bg-overlay" />
    <div class="px-6 py-8 h-full absolute text-center flex flex-col items-center justify-between">
      <p class="text-lg text-white">Cảm ơn bạn đã dành tình cảm cho chúng mình!</p>
      <p class="flex-1 text-lg text-white">
        Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được
        cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.
      </p>
      <p class="text-5xl font-arcittya-begatri text-white">Thank you!</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .bg-image {
    background-image: url('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
