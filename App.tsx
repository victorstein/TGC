import { useApolloCachedClient } from './src/integrations/apollo'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { Main } from './src/screens/main'
import { useMain } from './src/screens/main/hooks/useMain'
import { useEffect, useState } from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = (): JSX.Element => {
  useMain()
  const [loadingApp, setLoading] = useState(true)
  const client = useApolloCachedClient()
  const MainStack = createNativeStackNavigator()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          {client === null || loadingApp ? (
            <MainStack.Screen
              name='Splash'
              component={SplashScreen}
              options={{ animationTypeForReplace: 'pop' }}
            />
          ) : (
            <MainStack.Screen name='Main' component={Main} />
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
