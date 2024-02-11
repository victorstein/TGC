import { useApolloCachedClient } from './src/integrations/apollo'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { Main } from './src/screens/main'

const App = (): JSX.Element => {
  const client = useApolloCachedClient()

  if (client === null) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </NavigationContainer>
  )
}

export default App
