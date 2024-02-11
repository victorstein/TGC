import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../home'
import { SearchScreen } from '../search'
import { PlayScreen } from '../play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '../../integrations/store/store'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <ApolloProvider client={client!}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Play' component={PlayScreen} />
      </Tab.Navigator>
    </ApolloProvider>
  )
}
