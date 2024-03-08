import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { useApolloCachedClient } from './src/integrations/apollo'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
// import { Main } from './src/screens/main'
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
// import MainStack from '@screens/main/navigation'
// import NotificationScreen from '@screens/notification'
import MainStack from '@screens/main/navigation'
import NotificationScreen from '@screens/notification'
import { HomeScreen } from '@screens/home'
import { MainScreen } from '@screens/main'

NativeSplashScreen.preventAutoHideAsync().catch(() => {})

const App = (): JSX.Element => {
  useMain()
  const client = useApolloCachedClient()
  const splashLoading = splashStore.use.loading()
  const colorScheme = mainStore.use.colorScheme()
  const RootStack = createNativeStackNavigator()

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          {client === null || splashLoading ? (
            <RootStack.Screen
              name='Splash'
              component={SplashScreen}
              options={{ animationTypeForReplace: 'pop' }}
            />
          ) : (
            <RootStack.Group>
              <RootStack.Screen
                name='Root'
                component={MainScreen}
                options={{ headerShown: false, headerShadowVisible: false }}
              />
              <RootStack.Screen
                name='Notificaciones'
                component={NotificationScreen}
                options={{
                  headerShown: true,
                  headerShadowVisible: false,
                  headerTitleStyle: { fontSize: 24, fontWeight: '700' }
                }}
              />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar
        // backgroundColor='pink'
        backgroundColor={
          colorScheme === ColorScheme.Dark
            ? theme.extend.colors.background.dark
            : theme.extend.colors.background.DEFAULT
        }
        style={colorScheme === ColorScheme.Dark ? 'light' : 'dark'}
      />
    </SafeAreaProvider>
  )
}

export default App
