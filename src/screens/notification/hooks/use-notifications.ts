import { type ApolloError, type ApolloQueryResult } from '@apollo/client'
import {
  type Notifications,
  useNotifications as useNotificationFetch
} from '../graphql/notification.queries.generated'
import { notificationStore } from '../store/store'
import { useEffect, useMemo } from 'react'
import {
  type TApiNotifications,
  type TNotifications
} from '../store/store-types'

interface IUseNotificationsOutput {
  notifications: TNotifications
  error?: ApolloError
  refetch: () => Promise<ApolloQueryResult<Notifications>>
  loading: boolean
  resetStore: () => void
}

export const useNotifications = (): IUseNotificationsOutput => {
  const { data, error, refetch, loading } = useNotificationFetch()
  const setNotification = notificationStore.use.setNotifications()
  const notifications = notificationStore.use.notifications()
  const resetStore = notificationStore.use.resetStore()

  useEffect(() => {
    const apiNotifications = data?.notificationCenter ?? []
    const parsedApiNotifications = apiNotifications.filter(
      (apiNotification): apiNotification is TApiNotifications[0] =>
        apiNotification !== null
    )
    setNotification(parsedApiNotifications)
  }, [setNotification, data?.notificationCenter])

  const filteredNotifications = useMemo(() => {
    return Object.entries(notifications).reduce<TNotifications>(
      (acc, [id, notification]) => {
        if (notification.dismissed === false) {
          acc[id] = notification
        }
        return acc
      },
      {}
    )
  }, [notifications])

  return {
    notifications: filteredNotifications,
    error,
    refetch,
    loading,
    resetStore
  }
}
