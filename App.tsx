import { useApolloCachedClient } from './src/integrations/apollo'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { BottomTabNavigator } from './src/navigation/bottom.navigation'

const App = (): JSX.Element => {
  const client = useApolloCachedClient()

  if (client === null) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <BottomTabNavigator />
      </ApolloProvider>
    </NavigationContainer>
  )
}

export default App
