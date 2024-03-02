import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@screens/home'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { TabName } from './home.types'
import { theme } from '@tailwind'
import { Dimensions } from 'react-native'
import HomeIcon from '@shared/components/icons/home-icon'
import SearchIcon from '@shared/components/icons/search-icon'
import PlayIcon from '@shared/components/icons/play-icon'
import { TabBarButton } from './components/tabBarButton'
import { TabBarIcon } from './components/tabBarIcon'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()
  const { colors } = theme.extend
  const deviceWidth = Dimensions.get('window').width

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
    <ApolloProvider client={client!}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: deviceWidth * 0.1,
            backgroundColor: colors.background.DEFAULT
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary.DEFAULT,
          tabBarInactiveTintColor: colors.text.DEFAULT
        }}
      >
        <Tab.Screen
          name={TabName.HOME}
          component={HomeScreen}
          options={{
            tabBarButton: TabBarButton,
            tabBarIcon: (props) => (
              <TabBarIcon Icon={HomeIcon} {...props} label={TabName.HOME} />
            )
          }}
        />
        <Tab.Screen
          name={TabName.SEARCH}
          component={SearchScreen}
          options={{
            tabBarButton: TabBarButton,
            tabBarIcon: (props) => (
              <TabBarIcon Icon={SearchIcon} {...props} label={TabName.SEARCH} />
            )
          }}
        />
        <Tab.Screen
          name={TabName.PLAY}
          component={PlayScreen}
          options={{
            tabBarButton: TabBarButton,
            tabBarIcon: (props) => (
              <TabBarIcon Icon={PlayIcon} {...props} label={TabName.PLAY} />
            )
          }}
        />
      </Tab.Navigator>
    </ApolloProvider>
  )
}
