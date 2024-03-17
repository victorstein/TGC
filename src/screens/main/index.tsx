import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from './store/store'
import {
  NavigationRoutes,
  type NavigatorOverride
} from '@screens/home/types/home-types'
import { CustomTabBar } from './components/custom-tab-bar'
import { View } from 'react-native'
import { Notification } from '@shared/components/notification/notification'
import { useNetwork } from '@shared/hooks/use-network'
import ApolloWrapper from '@integrations/components/apollo-wrapper'
import { HomeNavigator } from '@screens/home/navigation/home-stack'
import { useArticleDeepLinking } from '@shared/hooks/use-article-deep-linking'

const Tab = createBottomTabNavigator<NavigatorOverride>()

const MainScreen = (): JSX.Element => {
  const { colors } = theme.extend
  const colorScheme = mainStore.use.colorScheme()
  useNetwork()
  useArticleDeepLinking()

  return (
    <View className='flex flex-col flex-1 bg-background dark:bg-background-dark'>
      <Notification />
      <View className='flex-1'>
        <ApolloWrapper>
          <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor:
                colorScheme === ColorScheme.Light
                  ? colors.primary.DEFAULT
                  : colors.primary.dark,
              tabBarInactiveTintColor:
                colorScheme === ColorScheme.Light
                  ? colors.text.DEFAULT
                  : colors.text.dark
            }}
          >
            <Tab.Screen
              name={NavigationRoutes.HOME}
              component={HomeNavigator}
            />
            <Tab.Screen
              name={NavigationRoutes.SEARCH}
              component={SearchScreen}
            />
            <Tab.Screen name={NavigationRoutes.PLAY} component={PlayScreen} />
          </Tab.Navigator>
        </ApolloWrapper>
      </View>
    </View>
  )
}

export default MainScreen
