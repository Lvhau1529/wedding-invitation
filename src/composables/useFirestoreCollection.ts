import { ref, onBeforeUnmount } from 'vue'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  FirestoreError,
  Timestamp
} from 'firebase/firestore'
import { db } from '@/firebase/config'

export interface BaseDoc {
  id: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
  guest?: string
  message?: string
  willCome?: string
}

export function useFirestoreCollection<T extends BaseDoc>(collectionPath: string) {
  const items = ref<T[]>([])
  const loading = ref(false)
  const error = ref<FirestoreError | null>(null)

  const colRef = collection(db, collectionPath)
  const q = query(colRef, orderBy('createdAt', 'desc'))

  loading.value = true
  const unsub = onSnapshot(
    q,
    snap => {
      items.value = snap.docs.map(d => {
        const data = d.data() as Omit<T, 'id'>
        return { id: d.id, ...data } as T
      })
      loading.value = false
    },
    err => {
      error.value = err
      loading.value = false
    }
  )

  onBeforeUnmount(() => unsub())

  async function create(payload: Omit<T, 'id' | 'createdAt' | 'updatedAt'>) {
    await addDoc(colRef, {
      ...payload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
  }

  async function update(id: string, payload: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>) {
    const d = doc(db, collectionPath, id)
    await updateDoc(d, {
      ...payload,
      updatedAt: serverTimestamp()
    })
  }

  async function remove(id: string) {
    const d = doc(db, collectionPath, id)
    await deleteDoc(d)
  }

  return {
    items,
    loading,
    error,
    create,
    update,
    remove
  }
}
