import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { useApolloCachedClient } from './src/integrations/apollo'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { Main } from './src/screens/main'
import { useMain } from './src/screens/main/hooks/use-main'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { splashStore } from './src/screens/splash/store/store'
import * as NativeSplashScreen from 'expo-splash-screen'
import Constants from 'expo-constants'
import { CustomStatusBar } from '@shared/status-bar/status-bar'
import * as Linking from 'expo-linking'

const prefix = Linking.createURL('/')

NativeSplashScreen.preventAutoHideAsync().catch(() => {})
const MainStack = createNativeStackNavigator()

const App = (): JSX.Element => {
  useMain()
  const linking = {
    prefixes: [prefix]
  }
  const client = useApolloCachedClient()
  const splashLoading = splashStore.use.loading()
  const statusBarHeight = Constants.statusBarHeight

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={{ marginTop: statusBarHeight }}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <NavigationContainer linking={linking}>
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          {client === null || splashLoading ? (
            <MainStack.Screen
              name='Splash'
              component={SplashScreen}
              options={{ animation: 'fade' }}
            />
          ) : (
            <MainStack.Screen name='Main' component={Main} />
          )}
        </MainStack.Navigator>
      </NavigationContainer>
      <CustomStatusBar />
    </SafeAreaProvider>
  )
}

export default App
