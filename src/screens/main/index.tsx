import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@screens/home'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { CustomTabBar } from './components/custom-tab-bar'
import { TabName } from './home.types'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
    <ApolloProvider client={client!}>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: '#D83636',
          tabBarInactiveTintColor: '#212121'
        }}
      >
        <Tab.Screen name={TabName.HOME} component={HomeScreen} />
        <Tab.Screen name={TabName.SEARCH} component={SearchScreen} />
        <Tab.Screen name={TabName.PLAY} component={PlayScreen} />
      </Tab.Navigator>
    </ApolloProvider>
  )
}
