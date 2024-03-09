import { createSelectors } from '@screens/utils/create-selectors'
import { create } from 'zustand'

export enum NotificationType {
  Error = 'error',
  Warning = 'warning'
}

export interface INotificationGetters {
  open: boolean
  message: string
  type: NotificationType
}

export interface INotificationSetters {
  setOpen: (open: boolean) => void
  setNotificationType: (type: NotificationType) => void
  setMessage: (message: string) => void
  setNotification: (
    open: boolean,
    message: string,
    type: NotificationType
  ) => void
}

export interface IGetColorBasedOnNotificationType {
  backgroundColor: string
  textColor: string
}

export interface INotificationStore
  extends INotificationGetters,
    INotificationSetters {}

const notificationInitialState: INotificationGetters = {
  open: false,
  message: '',
  type: NotificationType.Error
}

const NotificationStore = create<INotificationStore>()((set) => ({
  ...notificationInitialState,
  setOpen: (open: boolean) => {
    set((state) => ({
      ...state,
      open
    }))
  },
  setMessage: (message: string) => {
    set((state) => ({
      ...state,
      message
    }))
  },
  setNotificationType: (type: NotificationType) => {
    set((state) => ({
      ...state,
      type
    }))
  },
  setNotification: (open: boolean, message: string, type: NotificationType) => {
    set((state) => ({
      ...state,
      open,
      message,
      type
    }))
  }
}))

export const notificationStore = createSelectors(NotificationStore)
