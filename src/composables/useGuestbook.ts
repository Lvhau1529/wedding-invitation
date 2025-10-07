import { ref, computed } from 'vue'
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot,
  type Unsubscribe
} from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { GuestbookEntry, GuestbookEntryInput } from '@/types/guestbook'

export function useGuestbook() {
  const entries = ref<GuestbookEntry[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const submitting = ref(false)

  let unsubscribe: Unsubscribe | null = null

  // Thêm entry mới
  const addEntry = async (input: GuestbookEntryInput): Promise<string | null> => {
    submitting.value = true
    error.value = null

    try {
      // Validate
      if (!input.name.trim() || !input.message.trim()) {
        throw new Error('Tên và lời nhắn không được để trống')
      }

      if (input.name.length > 100) {
        throw new Error('Tên không được quá 100 ký tự')
      }

      if (input.message.length > 1000) {
        throw new Error('Lời nhắn không được quá 1000 ký tự')
      }

      const docRef = await addDoc(collection(db, 'guestbook'), {
        name: input.name.trim(),
        message: input.message.trim(),
        willCome: input.willCome,
        createdAt: serverTimestamp(),
        guest: input.guest
      })

      return docRef.id
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      error.value = err.message || 'Có lỗi xảy ra khi gửi'
      console.error('Error adding entry:', err)
      return null
    } finally {
      submitting.value = false
    }
  }

  // Lấy danh sách entries (một lần)
  const fetchEntries = async (limitCount = 50) => {
    loading.value = true
    error.value = null

    try {
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'), limit(limitCount))

      const snapshot = await getDocs(q)
      entries.value = snapshot.docs.map(
        doc =>
          ({
            id: doc.id,
            ...doc.data()
          }) as GuestbookEntry
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      error.value = err.message || 'Không thể tải dữ liệu'
      console.error('Error fetching entries:', err)
    } finally {
      loading.value = false
    }
  }

  // Lắng nghe real-time
  const listenToEntries = (limitCount = 50) => {
    loading.value = true
    error.value = null

    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'), limit(limitCount))

    unsubscribe = onSnapshot(
      q,
      snapshot => {
        entries.value = snapshot.docs.map(
          doc =>
            ({
              id: doc.id,
              ...doc.data()
            }) as GuestbookEntry
        )
        loading.value = false
      },
      err => {
        error.value = err.message || 'Lỗi khi lắng nghe dữ liệu'
        console.error('Error listening to entries:', err)
        loading.value = false
      }
    )
  }

  // Dừng lắng nghe
  const stopListening = () => {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }

  // Computed
  const totalEntries = computed(() => entries.value.length)
  const attendingCount = computed(() => entries.value.filter(e => e.willCome).length)
  const notAttendingCount = computed(() => entries.value.filter(e => !e.willCome).length)

  return {
    entries,
    loading,
    error,
    submitting,
    totalEntries,
    attendingCount,
    notAttendingCount,
    addEntry,
    fetchEntries,
    listenToEntries,
    stopListening
  }
}
