<template>
  <section class="py-8 px-4 bg-img-gray relative">
    <p class="text-center mb-6">
      Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân
      trọng!
    </p>
    <Toast />
    <Form v-slot="$form" :initial-values :resolver class="w-full" @submit="onFormSubmit">
      <div class="flex flex-col">
        <div class="mb-2">
          <InputText
            v-model="initialValues.name"
            name="name"
            type="text"
            placeholder="Tên của bạn"
            fluid
          />
          <Message
            v-if="$form.name?.invalid"
            class="text-red-500"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.name.error?.message }}</Message
          >
        </div>
        <div>
          <Textarea
            v-model="initialValues.message"
            class="w-full"
            name="message"
            rows="5"
            placeholder="Gửi lời nhắn đến cô dâu chú rể"
            fluid
            style="resize: none"
          />
          <Message
            v-if="$form.message?.invalid"
            class="text-red-500"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.message.error?.message }}</Message
          >
        </div>
        <div>
          <Select
            v-model="initialValues.willCome"
            name="willCome"
            :options="options"
            option-label="name"
            option-value="code"
            placeholder="Bạn sẽ đến chứ?"
            class="w-full"
          />
          <Message
            v-if="$form.willCome?.invalid"
            class="text-red-500"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.willCome.error?.message }}</Message
          >
        </div>
      </div>
      <div class="mt-4">
        <Button
          type="submit"
          variant="outlined"
          raised
          :loading="submitting"
          :disabled="isSubmitted"
          class="w-full mb-2"
        >
          <span class="uppercase font-medium">Gửi lời nhắn</span>
        </Button>
        <Button type="submit" severity="secondary" raised class="w-full" @click="open = true">
          <span class="uppercase font-medium">Mừng cưới</span>
        </Button>
      </div>
    </Form>
    <CountDownSection />
    <div class="absolute top-0 left-0 z-0 pointer-events-none">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/flower-left-participation.png"
        alt="flower-participant"
      />
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 right-0 z-0 pointer-events-none">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/flower-right-participation.png"
        alt="flower-participant"
      />
    </div>
  </section>
  <MoneyBoxModal v-if="open" v-model:visible="open" />
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import CountDownSection from '@/components/Home/CountDownSection.vue'
  import MoneyBoxModal from '@/components/Home/MoneyBoxModal.vue'
  import { Form } from '@primevue/forms'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import Select from 'primevue/select'
  import Toast from 'primevue/toast'
  import Button from 'primevue/button'
  import { useToast } from 'primevue/usetoast'
  import { useGuestbook } from '@/composables/useGuestbook'
  import type { GuestbookEntryInput } from '@/types/guestbook'

  const { addEntry, submitting } = useGuestbook()

  const toast = useToast()

  // State
  const open = ref(false)
  const options = ref([
    { name: 'Mình chắc chắn sẽ đến', code: 'YES' },
    { name: 'Xin lỗi mình bận rồi', code: 'NO' }
  ])
  const initialValues = reactive<GuestbookEntryInput>({
    name: '',
    message: '',
    willCome: null
  })
  const isSubmitted = ref<boolean>(false)

  // Method

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolver = ({ values }: { values: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {}

    if (!values.name) {
      errors.name = [{ message: 'Tên của bạn là gì?' }]
    }

    if (!values.message) {
      errors.message = [{ message: 'Gửi lời nhắn đến cô dâu chú rể' }]
    }

    if (!values.willCome) {
      errors.willCome = [{ message: 'Bạn sẽ đến chứ?' }]
    }

    return {
      values: initialValues,
      errors
    }
  }

  const onFormSubmit = async ({ valid }: { valid: boolean }) => {
    if (valid) {
      const id = await addEntry(initialValues)
      if (id) {
        toast.add({
          severity: 'success',
          summary: 'Gửi lời nhắn thành công.',
          life: 3000
        })
        isSubmitted.value = true
      } else {
        toast.add({
          severity: 'error',
          summary: 'Gửi lời nhắn thất bại.',
          life: 3000
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  :deep(.p-inputtext:enabled:focus) {
    border-color: var(--color-primary);
  }
  :deep(.p-textarea:enabled:focus) {
    border-color: var(--color-primary);
  }
  :deep(.p-select:not(.p-disabled).p-focus) {
    border-color: var(--color-primary);
  }
  :deep(.p-button-outlined) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  :deep(.p-button-secondary) {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }
</style>
