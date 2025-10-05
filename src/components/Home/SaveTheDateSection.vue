<template>
  <div class="relative bg-image">
    <div class="absolute top-[50%] translate-y-[-50%] left-0">
      <img src="@/assets/images/flower-save-the-date.png" alt="flower" />
    </div>
    <div class="px-8 py-12 text-center">
      <p class="text-2xl font-semibold tracking-wider uppercase">Chúng mình kết hôn!</p>
      <p class="text-4xl font-signature my-3">Save the date</p>
      <p class="text-4xl font-cormorant-infant font-medium mb-6">01.11.2025</p>
      <div class="w-full overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ảnh cưới của cặp đôi"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .bg-image {
    background-image: url('@/assets/images/bg-save-the-date.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
