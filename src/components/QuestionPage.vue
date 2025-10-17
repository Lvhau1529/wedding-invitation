<template>
  <div
    class="flex flex-col items-center justify-center h-[100vh] bg-gradient-to-tr from-primary to-primary/80"
  >
    <Toast position="top-center" />
    <div
      class="flex flex-col items-center justify-center gap-4 max-w-[440px] p-4 rounded-lg bg-white shadow-sm"
    >
      <p class="text-xl font-semibold tracking-wider uppercase font-roboto">
        Xác nhận thông tin của bạn
      </p>
      <p class="text-sm text-gray-500 font-roboto">Bạn là khách mời của cô dâu hay chú rể?</p>
      <SelectButton
        v-model="selectedOption"
        fluid
        :options="options"
        option-label="label"
        option-value="value"
      />
      <Button
        label="Tiếp theo"
        severity="secondary"
        :disabled="!selectedOption"
        @click="goToInvitation"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import SelectButton from 'primevue/selectbutton'
  import Button from 'primevue/button'
  import Toast from 'primevue/toast'
  import { useRouter } from 'vue-router'
  import { useToast } from 'primevue/usetoast'

  const router = useRouter()
  const toast = useToast()
  const selectedOption = ref('')
  const options = ref([
    { label: 'Chú rể', value: 'groom' },
    { label: 'Cô dâu', value: 'bride' }
  ])

  const goToInvitation = () => {
    if (selectedOption.value === '') {
      toast.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng chọn khách của ai'
      })
    }
    router.push({
      name: 'Invitation',
      query: {
        guest: selectedOption.value
      }
    })
  }
</script>

<style lang="scss" scoped></style>
