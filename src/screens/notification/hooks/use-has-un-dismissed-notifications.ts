import { notificationStore } from '@screens/notification/store/store'
import { useMemo } from 'react'

export const useHasUnDismissedNotifications = (): boolean => {
  const notifications = notificationStore.use.notifications()

  return useMemo(() => {
    return (
      Object.values(notifications).filter(
        ({ dismissed }) => dismissed === false
      ).length > 0
    )
  }, [notifications])
}
