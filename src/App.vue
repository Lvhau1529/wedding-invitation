<template>
  <div class="p-10">
    <HeroView />
    <ContentView />
    <CounterView />
    <ReadView />
  </div>
</template>
<script setup lang="ts">
  import HeroView from '@/views/HeroView.vue'
  import ContentView from '@/views/ContentView.vue'
  import CounterView from '@/views/CounterView.vue'
  import ReadView from '@/views/ReadView.vue'
</script>
<style scoped lang="scss"></style>
