import { View } from 'react-native'
// components
import Header from './components/header'
import SearchBar from '../../shared/components/search-bar'
import { CategoryEnum } from './types/home-types'
import { usePosts } from './hooks/use-posts'
import { HomeTabsComponent } from './components/home-tabs/home-tabs'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'
import RecentArticles from './components/recent-articles'
import usePaginatedPost from './hooks/use-paginated-posts'
import { useNotifications } from '@screens/notification/hooks/use-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const HomeScreen = (): JSX.Element => {
  const { refetch: refetchCodeBanner } = usePosts({
    categoryName: CategoryEnum.CODE
  })

  const { refetch: refetchGamingBanner } = usePosts({
    categoryName: CategoryEnum.GAMING
  })

  const { refetch: refetchTechBanner } = usePosts({
    categoryName: CategoryEnum.TECH
  })

  const { refetch: refetchLatesArticles } = usePaginatedPost()

  const { refetch: refetchNotifications } = useNotifications()

  return (
    <ScrollRefreshView
      refetch={[
        refetchNotifications,
        refetchCodeBanner,
        refetchGamingBanner,
        refetchTechBanner,
        refetchLatesArticles
      ]}
    >
      <Header />
      <View className='px-4 mb-4'>
        <SearchBar />
      </View>
      <View className='mb-4 flex-1'>
        <HomeTabsComponent />
        <RecentArticles />
      </View>
    </ScrollRefreshView>
  )
}
