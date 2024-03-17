import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { useApolloCachedClient } from './src/integrations/apollo'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { SplashScreen } from './src/screens/splash'
import { useMain } from './src/screens/main/hooks/use-main'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { splashStore } from './src/screens/splash/store/store'
import * as NativeSplashScreen from 'expo-splash-screen'
import { ColorScheme as themeColor, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import NotificationScreen from '@screens/notification'
import MainScreen from '@screens/main'
import { CustomStatusBar } from '@shared/status-bar/status-bar'
import { Icon } from '@rneui/themed'
import * as Linking from 'expo-linking'

const prefix = Linking.createURL('/')

NativeSplashScreen.preventAutoHideAsync().catch(() => {})
const MainStack = createNativeStackNavigator()

const { colors } = theme.extend

const App = (): JSX.Element => {
  useMain()
  const linking = {
    prefixes: [prefix]
  }
  const client = useApolloCachedClient()
  const splashLoading = splashStore.use.loading()
  const colorScheme = mainStore.use.colorScheme()
  const RootStack = createNativeStackNavigator()

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      className='flex flex-1 bg-background dark:bg-background-dark'
    >
      <NavigationContainer linking={linking}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {client === null || splashLoading ? (
            <RootStack.Screen
              name='Splash'
              component={SplashScreen}
              options={{ animation: 'fade' }}
            />
          ) : (
            <RootStack.Group
              screenOptions={{
                headerStyle: {
                  backgroundColor:
                    colorScheme === themeColor.Dark
                      ? colors.background.dark
                      : colors.background.DEFAULT
                }
              }}
            >
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
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: '700',
                    color:
                      colorScheme === themeColor.Dark
                        ? colors.text.dark
                        : colors.text.DEFAULT
                  },
                  headerLeft: () => {
                    const navigation = useNavigation()
                    return (
                      <Icon
                        onPress={() => {
                          navigation.goBack()
                        }}
                        size={25}
                        type='ionicon'
                        name='chevron-back-outline'
                        color={
                          colorScheme === themeColor.Dark
                            ? colors.text.dark
                            : colors.text.DEFAULT
                        }
                      />
                    )
                  }
                }}
              />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
      <CustomStatusBar />
    </SafeAreaProvider>
  )
}

export default App
