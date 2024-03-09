import {
  NotificationType,
  notificationStore
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
  private readonly store = notificationStore.getState()

  private timer: NodeJS.Timeout | undefined

  public show(options: INotificationShowOptions): void {
    if (this.store.open) {
      return
    }

    const { message, type, autoClose = true, timeout } = options

    this.store.setNotification(true, message, type)
    if (!autoClose) {
      return
    }

    this.timer = setTimeout(() => {
      this.store.setOpen(false)
    }, timeout ?? this.defaultTime)
  }

  public hide(): void {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
    }
    this.store.setOpen(false)
  }

  public updateNotification(message: string, type: NotificationType): void {
    this.store.setMessage(message)
    this.store.setNotificationType(type)
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

export default new Notification()
