import {
  NotificationType,
  notificationStore as store
} from '../store/notification-store'
import { theme } from '@tailwind'

const colors = theme.extend.colors

export interface INotificationShowOptions {
  message: string
  type: NotificationType
  autoClose?: boolean
  timeout?: number
}

class Notification {
  private readonly defaultTime = 4000
  private notificationStore = store.getState()
  private timer: NodeJS.Timeout | undefined
  private static instance: Notification

  public getInstance(): Notification {
    if (Notification.instance === undefined) {
      Notification.instance = new Notification()
    }

    return Notification.instance
  }

  public show(options: INotificationShowOptions): void {
    // refresh the store
    this.notificationStore = store.getState()
    const { message, type, autoClose = true, timeout } = options

    if (this.notificationStore.open && autoClose) {
      return
    }

    this.notificationStore.setNotification(true, message, type)
    if (!autoClose) {
      clearTimeout(this.timer)
      return
    }

    this.timer = setTimeout(() => {
      this.notificationStore.setOpen(false)
    }, timeout ?? this.defaultTime)
  }

  public hide(): void {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
    }
    this.notificationStore.setOpen(false)
  }

  public updateNotification(message: string, type: NotificationType): void {
    this.notificationStore.setMessage(message)
    this.notificationStore.setNotificationType(type)
  }

  public getColorBasedOnNotificationType(type: NotificationType): string {
    switch (type) {
      case NotificationType.Error:
        return colors.notification.error
      case NotificationType.Warning:
        return colors.notification.warning
    }
  }
}

export default new Notification().getInstance()
