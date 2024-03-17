import { create } from 'zustand'
import {
  type TApiNotifications,
  type INotificationGetters,
  type INotificationStore
} from './store-types'
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
      setNotifications: (apiNotifications: TApiNotifications) => {
        set((state) => {
          const notifications = get().notifications
          apiNotifications
            .filter(({ id }) => id ?? '' in notificationStore)
            .forEach(({ id, ...notification }) => {
              const newId = id ?? ''
              notifications[newId] = {
                read: false,
                dismissed: false,
                ...notification
              }
            })

          return {
            ...state.notifications,
            notifications
          }
        })
      },
      setRead: (notificationId) => {
        set((state) => ({
          ...state.notifications,
          [notificationId]: {
            ...state.notifications[notificationId],
            read: true
          }
        }))
      },
      setDismissed: (notificationId: string) => {
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
      partialize: (state) => ({
        notifications: state.notifications
      })
    }
  )
)

export const notificationStore = createSelectors(NotificationStore)
