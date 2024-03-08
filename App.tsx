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
import { StatusBar } from 'expo-status-bar'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import Toast from 'react-native-toast-message'
import { toastConfig } from '@shared/components/toast/toast-config'
import Constants from 'expo-constants'

NativeSplashScreen.preventAutoHideAsync().catch(() => {})

const App = (): JSX.Element => {
  useMain()
  const client = useApolloCachedClient()
  const splashLoading = splashStore.use.loading()
  const colorScheme = mainStore.use.colorScheme()
  const MainStack = createNativeStackNavigator()
  const isConnected = mainStore.use.isConnected()
  const statusBarHeight = Constants.statusBarHeight

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={{ marginTop: statusBarHeight }}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          {client === null || splashLoading ? (
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
      <StatusBar
        backgroundColor={
          isConnected === false
            ? theme.extend.colors.primary.DEFAULT
            : colorScheme === ColorScheme.Dark
              ? theme.extend.colors.background.dark
              : theme.extend.colors.background.DEFAULT
        }
        style={colorScheme === ColorScheme.Dark ? 'light' : 'dark'}
      />
      <Toast config={toastConfig} visibilityTime={3000} />
    </SafeAreaProvider>
  )
}

export default App
