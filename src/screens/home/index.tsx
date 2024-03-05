import { ScrollView, View } from 'react-native'
// components
import Header from './components/header'
import SearchBar from '../../shared/components/search-bar'
import { useCallback } from 'react'
import { RefreshIndicator } from '@shared/components/refresh-control'
import { CategoryEnum } from './types/home.types'
import { MainBannerWrapper } from './components/mainBanner/main-banner-wrapper'
import { usePosts } from './hooks/usePosts'

export const HomeScreen = (): JSX.Element => {
  const { refetch, loading } = usePosts({ categoryName: CategoryEnum.CODE })

  const onRefresh = useCallback(() => {
    refetch().catch(console.error)
  }, [refetch])

  return (
    <ScrollView
      refreshControl={
        <RefreshIndicator onRefresh={onRefresh} refreshing={loading} />
      }
      className='flex-1 bg-background dark:bg-background-dark'
    >
      <Header />
      <View className='px-4'>
        <SearchBar />
      </View>
      <View>
        <MainBannerWrapper categoryName={CategoryEnum.CODE} loading={loading} />
      </View>
    </ScrollView>
  )
}
