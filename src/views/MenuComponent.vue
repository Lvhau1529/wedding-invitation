<template>
  <div class="shadow-sm px-2">
    <div class="flex items-center justify-between mx-auto my-0">
      <div class="flex items-center gap-1">
        <p>Hậu</p>
        <p>Ngân</p>
      </div>
      <ul class="flex items-center">
        <li v-for="(item, index) in 4" :key="index">
          <a class="text-sm uppercase block py-10 px-4 hover:text-yellow-400" href="#">Trang chủ</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
