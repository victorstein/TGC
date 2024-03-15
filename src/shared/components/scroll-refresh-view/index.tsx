import { RefreshIndicator } from '../refresh-control'
import { homeStore } from '@screens/home/store/home-store'
import { useCallback } from 'react'
import { type ApolloQueryResult } from '@apollo/client'
import Animated, { type AnimatedScrollViewProps } from 'react-native-reanimated'

export interface IScrollRefreshViewProps<T> extends AnimatedScrollViewProps {
  children: React.ReactNode
  refetch: Array<() => Promise<ApolloQueryResult<T>>>
}

export function ScrollRefreshView<T>({
  children,
  refetch,
  ...props
}: IScrollRefreshViewProps<T>): JSX.Element {
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
    <Animated.ScrollView
      refreshControl={
        <RefreshIndicator onRefresh={onRefresh} refreshing={refreshing} />
      }
      className='flex-1 bg-background dark:bg-background-dark'
      {...props}
    >
      {children}
    </Animated.ScrollView>
  )
}
