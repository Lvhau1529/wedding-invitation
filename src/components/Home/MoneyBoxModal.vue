<template>
  <Dialog
    v-model:visible="visible"
    modal
    pt:root:class="!border-0 !bg-white"
    pt:mask:class="backdrop-blur-sm"
    pt:header:class="p-4! pb-2!"
    closable
    block-scroll
    header="Cảm ơn bạn đã gửi lời chúc đến ngày vui của chúng mình!"
    :draggable="false"
    :breakpoints="{ '1199px': '90vw' }"
    :resizable="false"
    append-to="body"
  >
    <Toast position="top-center" />
    <div class="flex flex-col items-center gap-4 text-primary">
      <template v-for="bank in bankData" :key="bank.name">
        <div class="border border-primary rounded-md p-3 w-full">
          <p class="text-lg font-semibold text-center mb-2 uppercase">{{ bank.name }}</p>
          <!-- Bank Info -->
          <div class="flex items-center">
            <p class="mr-2 min-w-20">Ngân hàng:</p>
            <p class="font-semibold">{{ bank.bank }}</p>
          </div>

          <!-- Account Number -->
          <div class="flex items-center">
            <p class="mr-2 min-w-20">Số tài khoản:</p>
            <p class="font-semibold mr-1">{{ bank.number }}</p>
            <i class="pi pi-copy cursor-pointer" @click="copyToClipboard(bank.number)"></i>
          </div>

          <!-- QR Code Placeholder -->
          <div class="mt-2 max-w-[180px] mx-auto">
            <img class="w-full h-full object-cover" :src="bank.qr" alt="qr-code" />
          </div>
        </div>
      </template>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import qrGroom from '@/assets/images/hau-qr.png'
  import qrBride from '@/assets/images/ngan-qr.png'
  import { useToast } from 'primevue/usetoast'

  // Props
  const props = defineProps({
    modelValue: Boolean // Or the appropriate type for your data
  })

  // State
  const toast = useToast()
  const visible = ref(props.modelValue)
  const bankData = ref([
    {
      name: 'Chú rể',
      bank: 'TPBank',
      number: '0418 3535 601',
      qr: qrGroom
    },
    {
      name: 'Cô dâu',
      bank: 'TPBank',
      number: '2566 6267 766',
      qr: qrBride
    }
  ])
  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number)
    toast.add({
      severity: 'success',
      summary: 'Đã copy số tài khoản',
      life: 3000
    })
  }
</script>
