<template>
  <section class="mt-8 bg-img-gray">
    <p class="text-center text-6xl font-signature mb-4">Count down</p>
    <div class="flex items-center justify-center text-4xl">
      <p>{{ days }}</p>
      <p>:</p>
      <p>{{ hoursStr }}</p>
      <p>:</p>
      <p>{{ minutesStr }}</p>
      <p>:</p>
      <p>{{ secondsStr }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue'

  const days = ref<number>(0)
  const hours = ref<number>(0)
  const minutes = ref<number>(0)
  const seconds = ref<number>(0)

  const targetDate = new Date(2025, 10, 1, 18, 0, 0, 0)

  let intervalId: number | undefined

  function updateCountdown(): void {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now

    if (distance <= 0) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      if (intervalId !== undefined) {
        clearInterval(intervalId)
      }
      return
    }

    const totalSeconds = Math.floor(distance / 1000)
    const remainingDays = Math.floor(totalSeconds / (60 * 60 * 24))
    const remainingHours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    const remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const remainingSeconds = totalSeconds % 60

    days.value = remainingDays
    hours.value = remainingHours
    minutes.value = remainingMinutes
    seconds.value = remainingSeconds
  }

  onMounted(() => {
    updateCountdown()
    intervalId = window.setInterval(updateCountdown, 1000)
  })

  onUnmounted(() => {
    if (intervalId !== undefined) {
      clearInterval(intervalId)
    }
  })

  const hoursStr = computed(() => String(hours.value).padStart(2, '0'))
  const minutesStr = computed(() => String(minutes.value).padStart(2, '0'))
  const secondsStr = computed(() => String(seconds.value).padStart(2, '0'))
</script>
<style lang="scss" scoped></style>
