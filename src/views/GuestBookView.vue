<template>
  <div class="p-6">
    <div class="mb-3 flex gap-4">
      <InputText v-model="nameFilter" placeholder="Tìm kiếm theo tên..." :disabled="loading" />
      <Dropdown
        v-model="attendanceFilter"
        :options="filterOptions"
        option-label="label"
        option-value="value"
        placeholder="Lọc theo tham dự"
        :disabled="loading"
        show-clear
        style="width: 200px"
      />
      <Dropdown
        v-model="guestFilter"
        :options="guestOptions"
        option-label="label"
        option-value="value"
        placeholder="Lọc theo khách"
        :disabled="loading"
        show-clear
        style="width: 200px"
      />
    </div>

    <DataTable
      :value="filteredRows"
      :loading="loading"
      data-key="id"
      paginator
      :rows="10"
      responsive-layout="scroll"
    >
      <Column field="name" header="Tên"></Column>
      <Column field="message" header="Lời chúc"></Column>
      <Column field="guest" header="Khách" align="center">
        <template #body="slotProps">
          {{ getGuestLabel(slotProps.data.guest) }}
        </template>
      </Column>
      <Column field="willCome" header="Tham gia tiệc">
        <template #body="slotProps">
          {{ getAttendanceLabel(slotProps.data.willCome) }}
        </template>
      </Column>
      <Column field="createdAt" header="Thời gian">
        <template #body="slotProps">
          {{ formatTimestamp(slotProps.data.createdAt) }}
        </template>
      </Column>
      <Column header="Hành động" style="width: 120px" align="center">
        <template #body="slotProps">
          <Button
            size="small"
            icon="pi pi-trash"
            severity="danger"
            @click="confirmDelete(slotProps.data)"
          />
        </template>
      </Column>
      <template #empty>
        <div v-if="!loading" class="flex justify-center items-center h-full">
          <p class="text-gray-500">Không có dữ liệu.</p>
        </div>
      </template>
      <template #loading>
        <div class="flex justify-center items-center h-full">
          <p class="text-gray-500">Đang tải dữ liệu...</p>
        </div>
      </template>
    </DataTable>

    <ConfirmDialog />
    <Toast />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useToast } from 'primevue/usetoast'
  import { useConfirm } from 'primevue/useconfirm'

  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import Dropdown from 'primevue/dropdown'
  import ConfirmDialog from 'primevue/confirmdialog'
  import Toast from 'primevue/toast'
  import { Timestamp } from 'firebase/firestore'
  import { useFirestoreCollection } from '@/composables/useFirestoreCollection'
  import type { BaseDoc } from '@/composables/useFirestoreCollection'

  // ==== Kiểu dữ liệu cho document trong collection ====
  interface GuestbookEntry extends BaseDoc {
    name: string
    message: string
    willCome?: string
  }

  // ==== Dùng composable cho collection "guestbook" ====
  const { items, loading, remove } = useFirestoreCollection<GuestbookEntry>('guestbook')

  // Filters
  const nameFilter = ref<string>('')
  const attendanceFilter = ref<string>('')
  const guestFilter = ref<string>('')

  const guestOptions = [
    { label: 'Chú rể', value: 'groom' },
    { label: 'Cô dâu', value: 'bride' }
  ]

  // Filter options for attendance
  const filterOptions = [
    { label: 'Tham dự', value: 'YES' },
    { label: 'Không tham dự', value: 'NO' }
  ]

  // Filtered rows based on name and attendance
  const filteredRows = computed(() => {
    let filtered = items.value

    // Filter by name
    if (nameFilter.value) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(nameFilter.value.toLowerCase())
      )
    }

    // Filter by attendance
    if (attendanceFilter.value) {
      filtered = filtered.filter(item => item.willCome === attendanceFilter.value)
    }

    // Filter by guest
    if (guestFilter.value) {
      filtered = filtered.filter(item => item.guest === guestFilter.value)
    }

    return filtered
  })

  // ===== Dialog state =====
  const toast = useToast()
  const confirm = useConfirm()

  // Helper function to get attendance label
  function getAttendanceLabel(willCome?: string) {
    const option = filterOptions.find(opt => opt.value === willCome)
    return option ? option.label : willCome || ''
  }

  function getGuestLabel(guest?: string) {
    const option = guestOptions.find(opt => opt.value === guest)
    return option ? option.label : guest || ''
  }

  function formatTimestamp(timestamp?: Timestamp | null) {
    return timestamp ? new Date(timestamp.toDate()).toLocaleString('vi-VN') : ''
  }

  function confirmDelete(row: GuestbookEntry) {
    confirm.require({
      message: `Xóa "${row.name}"?`,
      header: 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      acceptClass: 'p-button-danger',
      accept: async () => {
        try {
          await remove(row.id)
          toast.add({
            severity: 'success',
            summary: 'Đã xóa',
            detail: 'Xóa thành công',
            life: 2000
          })
        } catch (e: unknown) {
          toast.add({
            severity: 'error',
            summary: 'Lỗi',
            detail: (e as Error)?.message ?? 'Không thể xóa',
            life: 3000
          })
        }
      }
    })
  }
</script>
