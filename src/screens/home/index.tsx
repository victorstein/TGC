import { View } from 'react-native'
// components
import Header from './components/header'
import SearchBar from '../../shared/components/search-bar'
import { CategoryEnum } from './types/home-types'
import { useMainBanner } from './hooks/use-main-banner'
import { HomeTabsComponent } from './components/home-tabs/home-tabs'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'

export const HomeScreen = (): JSX.Element => {
  const { refetch: refetchCodeBanner } = useMainBanner({
    categoryName: CategoryEnum.CODE
  })

  const { refetch: refetchGamingBanner } = useMainBanner({
    categoryName: CategoryEnum.GAMING
  })

  const { refetch: refetchTechBanner } = useMainBanner({
    categoryName: CategoryEnum.TECH
  })

  return (
    <ScrollRefreshView
      refetch={[refetchCodeBanner, refetchGamingBanner, refetchTechBanner]}
    >
      <Header />
      <View className='px-4 mb-4'>
        <SearchBar />
      </View>
      <View className='mb-4 flex-1'>
        <HomeTabsComponent />
      </View>
    </ScrollRefreshView>
  )
}
