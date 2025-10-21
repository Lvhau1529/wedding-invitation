<template>
  <section class="calendar">
    <div class="px-8 py-14">
      <h3 class="month text-4xl font-signature text-center text-white mb-6">Tháng 11</h3>

      <!-- Header thứ trong tuần -->
      <div class="grid grid-cols-7 gap-2 mb-3">
        <div
          v-for="d in weekDays"
          :key="d"
          class="text-center text-xs uppercase text-white font-sans"
        >
          {{ d }}
        </div>
      </div>

      <!-- Lưới ngày -->
      <div class="grid grid-cols-7 gap-2">
        <div
          v-for="cell in calendarCells"
          :key="cell.key"
          class="flex items-center justify-center relative"
          :class="[
            cell.inCurrentMonth ? 'text-white' : 'text-gray-300',
            cell.isTarget ? 'text-center font-bold p-3' : ''
          ]"
        >
          {{ cell.day }}
          <div v-if="cell.isTarget" class="bg-heart absolute top-1 left-0">
            <img
              src="@/assets/images/heart-calendar.png"
              alt="heart"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, nextTick, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { useRoute } from 'vue-router'

  type Cell = {
    day: number
    inCurrentMonth: boolean
    isTarget: boolean
    key: string
  }

  const route = useRoute()
  const guest = route.query.guest as string
  const calendarCells = computed<Cell[]>(() => buildMonthCells(2025, 10, guest === 'groom' ? 1 : 8))

  onMounted(async () => {
    await nextTick()
    gsap.to('.bg-heart', {
      scale: 1.3,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
  })

  // Thứ trong tuần: Mon -> Sun để khớp bố cục website
  const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']

  // Hàm tiện ích: tạo lịch một tháng theo chuẩn Mon-first
  function buildMonthCells(year: number, monthIndex0: number, targetDay?: number): Cell[] {
    // monthIndex0: 0=Jan ... 10=Nov
    const first = new Date(year, monthIndex0, 1)
    const last = new Date(year, monthIndex0 + 1, 0)

    const daysInMonth = last.getDate()

    // JS: getDay() -> 0=Sun..6=Sat. Ta cần Mon-first (1..7 với Sun=7)
    const jsFirstDay = first.getDay() // 0..6
    const monFirstIndex = jsFirstDay === 0 ? 7 : jsFirstDay // Sun -> 7
    const leading = monFirstIndex - 1 // số ô của tháng trước ở đầu lưới

    // Số ngày tháng trước
    const prevLast = new Date(year, monthIndex0, 0).getDate()

    const cells: Cell[] = []

    // Ô tháng trước
    for (let i = leading; i > 0; i--) {
      const day = prevLast - i + 1
      cells.push({
        day,
        inCurrentMonth: false,
        isTarget: false,
        key: `prev-${year}-${monthIndex0}-${day}`
      })
    }

    // Ô tháng hiện tại
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        day: d,
        inCurrentMonth: true,
        isTarget: typeof targetDay === 'number' ? d === targetDay : false,
        key: `cur-${year}-${monthIndex0 + 1}-${d}`
      })
    }

    return cells
  }
</script>

<style lang="scss" scoped>
  .calendar {
    background-image: url('@/assets/images/bg-calendar.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
