import { type Notifications } from '../graphql/notification.queries.generated'

export type TApiNotifications = Array<
  NonNullable<NonNullable<Notifications['notificationCenter']>[0]>
>

export type TNotificationCenter = Omit<TApiNotifications[0], 'id'> & {
  read: boolean
  dismissed: boolean
}

export type TNotifications = Record<string, TNotificationCenter>

export interface INotificationGetters {
  notifications: TNotifications
}

export interface INotificationSetters {
  setNotifications: (notifications: TApiNotifications) => void
  setRead: (notificationId: string) => void
  setDismissed: (notificationId: string) => void
  resetStore: () => void
}

export interface INotificationStore
  extends INotificationGetters,
    INotificationSetters {}
