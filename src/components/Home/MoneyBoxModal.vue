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
    :dismissable-mask="false"
    :draggable="false"
    :breakpoints="{ '1199px': '90vw' }"
  >
    <div class="flex items-center justify-center gap-4 text-primary">
      <div class="border border-primary rounded-md p-3">
        <p class="text-lg font-semibold text-center mb-2 uppercase">Chú rể</p>
        <!-- Bank Info -->
        <div class="flex items-center">
          <p class="mr-2 min-w-20">Ngân hàng:</p>
          <p class="font-semibold">TPBank</p>
        </div>

        <!-- Account Number -->
        <div class="flex items-center">
          <p class="mr-2 min-w-20">Số tài khoản:</p>
          <p class="font-semibold">0418 3535 601</p>
        </div>

        <!-- QR Code Placeholder -->
        <div
          class="w-full max-w-[260px] aspect-square mx-auto border-8 border-white outline-primary flex items-center justify-center"
        >
          <img
            class="w-full h-full object-contain"
            src="@/assets/images/hau-qr.png"
            alt="qr-code"
          />
        </div>
      </div>
      <div class="border border-primary rounded-md p-3">
        <p class="text-lg font-semibold text-center mb-2 uppercase">Cô dâu</p>
        <!-- Bank Info -->
        <div class="flex items-center">
          <p class="mr-2 min-w-20">Ngân hàng:</p>
          <p class="font-semibold">TPBank</p>
        </div>

        <!-- Account Number -->
        <div class="flex items-center">
          <p class="mr-2 min-w-20">Số tài khoản:</p>
          <p class="font-semibold">2566 6267 766</p>
        </div>

        <!-- QR Code Placeholder -->
        <div
          class="w-full max-w-[260px] aspect-square mx-auto border-8 border-white outline-primary flex items-center justify-center"
        >
          <img
            class="w-full h-full object-contain"
            src="@/assets/images/hau-qr.png"
            alt="qr-code"
          />
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'

  const props = defineProps({
    modelValue: Boolean // Or the appropriate type for your data
  })

  // const emit = defineEmits(['update:modelValue'])

  const visible = ref(props.modelValue)
  // const handleOk = () => {
  //   visible.value = false
  //   emit('update:modelValue', visible.value)
  // }
</script>

<style scoped></style>
