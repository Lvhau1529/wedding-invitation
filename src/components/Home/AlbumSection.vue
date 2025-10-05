<template>
  <section class="bg-primary py-8 px-4">
    <div class="flex items-center">
      <p class="text-white whitespace-nowrap text-5xl font-great-vibes mr-4">Our memories</p>
      <div class="w-full h-[1px] bg-white" />
    </div>
    <p class="text-white my-7">
      This album captures the most beautiful moments of our special day—filled with love, joy, and
      unforgettable memories. From our heartfelt vows to the first dance, every photo tells a story
      of our journey together. Surrounded by family and friends, we celebrated a love that will last
      a lifetime.
    </p>

    <div class="mb-3 h-72">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="flower-album"
      />
    </div>

    <div class="grid grid-cols-2 grid-rows-2 gap-2 mb-3 h-80">
      <div class="row-span-2">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="flower-album"
        />
      </div>
      <div>
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="flower-album"
        />
      </div>
      <div class="col-start-2 row-start-2">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="flower-album"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <template v-for="i in 4" :key="i">
        <div class="h-64">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="flower-album"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
