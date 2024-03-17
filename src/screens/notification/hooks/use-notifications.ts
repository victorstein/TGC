import { type ApolloError, type ApolloQueryResult } from '@apollo/client'
import {
  type Notifications,
  useNotifications as useNotificationFetch
} from '../graphql/notification.queries.generated'
import { notificationStore } from '../store/store'
import { useEffect } from 'react'
import {
  type TApiNotifications,
  type TNotifications
} from '../store/store-types'

interface IUseNotificationsOutput {
  notifications: TNotifications
  error?: ApolloError
  refetch: () => Promise<ApolloQueryResult<Notifications>>
  loading: boolean
}

export const useNotifications = (): IUseNotificationsOutput => {
  const { data, error, refetch, loading } = useNotificationFetch()
  const setNotification = notificationStore.use.setNotifications()
  const notifications = notificationStore.use.notifications()

  useEffect(() => {
    const apiNotifications = data?.notificationCenter ?? []
    const parsedApiNotifications = apiNotifications.filter(
      (apiNotification): apiNotification is TApiNotifications[0] =>
        apiNotification !== null
    )
    setNotification(parsedApiNotifications)
  }, [setNotification, data?.notificationCenter])

  return {
    notifications,
    error,
    refetch,
    loading
  }
}
