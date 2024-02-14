import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@screens/home'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { TesScreen } from '@screens/testView'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
    <ApolloProvider client={client!}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Play' component={PlayScreen} />
        <Tab.Screen name='TesScreen' component={TesScreen} />
      </Tab.Navigator>
    </ApolloProvider>
  )
}
