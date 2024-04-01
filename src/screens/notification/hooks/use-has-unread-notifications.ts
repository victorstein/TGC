import { notificationStore } from '@screens/notification/store/store'
import { useMemo } from 'react'

export const useHasUnreadNotifications = (): boolean => {
  const notifications = notificationStore.use.notifications()

  return useMemo(() => {
    return Object.values(notifications)
      .filter(({ dismissed }) => !dismissed)
      .some(({ read }) => !read)
  }, [notifications])
}
