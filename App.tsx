import { useApolloCachedClient } from './src/integrations/apollo'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { Main } from './src/screens/main'
import { useMain } from './src/screens/main/hooks/useMain'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '@tailwind'
import { splashStore } from './src/screens/splash/store/store'
import * as NativeSplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { mainStore, ColorScheme } from '@screens/main/store/store'

const { colors } = theme.extend

NativeSplashScreen.preventAutoHideAsync().catch(() => {})

const App = (): JSX.Element => {
  useMain()
  const client = useApolloCachedClient()
  const splashLoading = splashStore.use.loading()
  const MainStack = createNativeStackNavigator()
  const coloScheme = mainStore.use.colorScheme()

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <StatusBar
        backgroundColor={`${coloScheme === ColorScheme.Dark ? colors.background.dark : colors.background.DEFAULT}`}
      />
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
    </SafeAreaProvider>
  )
}

export default App
