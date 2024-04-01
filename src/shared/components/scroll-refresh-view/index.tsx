import { RefreshIndicator } from '../refresh-control'
import { homeStore } from '@screens/home/store/home-store'
import { useCallback } from 'react'
import { type ApolloQueryResult } from '@apollo/client'
import { ScrollView, type ScrollViewProps } from 'react-native'

export interface IScrollRefreshViewProps extends ScrollViewProps {
  children: React.ReactNode
  refetch: Array<() => Promise<ApolloQueryResult<unknown>> | Promise<void>>
}

export const ScrollRefreshView = ({
  children,
  refetch,
  ...props
}: IScrollRefreshViewProps): JSX.Element => {
  const refreshing = homeStore.use.isRefreshing()
  const setIsRefreshing = homeStore.use.setIsRefreshing()

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true)
      const promiseArray = refetch.map(async (refetch) => await refetch())
      await Promise.all(promiseArray)
      setIsRefreshing(false)
    } catch (error) {
      setIsRefreshing(false)
    }
  }, [refetch, setIsRefreshing])

  const onRefresh = useCallback(() => {
    refresh().catch(() => {})
  }, [refresh])

  return (
    <ScrollView
      refreshControl={
        <RefreshIndicator onRefresh={onRefresh} refreshing={refreshing} />
      }
      className='flex-1 bg-background dark:bg-background-dark'
      {...props}
    >
      {children}
    </ScrollView>
  )
}
