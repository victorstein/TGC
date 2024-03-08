import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@screens/home'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from './store/store'
import { TabName } from '@screens/home/types/home-types'
import { CustomTabBar } from './components/custom-tab-bar'
import { View } from 'react-native'
import { NetworkNotification } from '@shared/components/network-notification/network-notification'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()
  const { colors } = theme.extend
  const colorScheme = mainStore.use.colorScheme()

  return (
    <View className='flex flex-col flex-1 bg-background dark:bg-background-dark'>
      <NetworkNotification />
      <View className='flex-1'>
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion */}
        <ApolloProvider client={client!}>
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
            <Tab.Screen name={TabName.HOME} component={HomeScreen} />
            <Tab.Screen name={TabName.SEARCH} component={SearchScreen} />
            <Tab.Screen name={TabName.PLAY} component={PlayScreen} />
          </Tab.Navigator>
        </ApolloProvider>
      </View>
    </View>
  )
}
