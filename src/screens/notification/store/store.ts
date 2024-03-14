import { create } from 'zustand'
import { type INotificationGetters, type INotificationStore } from './store-types'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSelectors } from '@screens/utils/create-selectors'

const initialState: INotificationGetters = {
  notifications: {}
}

const NotificationStore = create<INotificationStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setRead: (notificationId) => {
        set((state) => ({
          ...state.notifications,
          [notificationId]: {
            ...state.notifications[notificationId],
            read: true
          }
        }))
      },
      setDismissed: (notificationId) => {
        set((state) => ({
          ...state.notifications,
          [notificationId]: {
            ...state.notifications[notificationId],
            dismissed: true
          }
        }))
      },
      resetStore: () => {
        set(initialState)
      }
    }),
    {
      name: 'notification-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: () => ({
        notifications: true
      })
    }
  )
)

export const notificationStore = createSelectors(NotificationStore)
