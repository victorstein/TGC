type INotifications = Record<string, {
  read: boolean
  dismissed: boolean
}>

export interface INotificationGetters {
  notifications: INotifications
}

export interface INotificationSetters {
  setRead: (notificationId: string) => void
  setDismissed: (notificationId: string) => void
  resetStore: () => void
}

export interface INotificationStore extends INotificationGetters, INotificationSetters { }
