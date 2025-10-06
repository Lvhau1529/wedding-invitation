import { Timestamp } from 'firebase/firestore'

export type WillCome = 'YES' | 'NO'

export interface GuestbookEntry {
  id?: string
  name: string
  message: string
  willCome?: WillCome | null
  createdAt: Timestamp | null
}

export interface GuestbookEntryInput {
  name: string
  message: string
  willCome?: WillCome | null
}
