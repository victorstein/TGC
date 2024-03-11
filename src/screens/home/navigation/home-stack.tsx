import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '..'
import { ArticleScreen } from '@screens/article'
import { NavigationRoutes, type NavigatorOverride } from '../types/home-types'

const HomeStack = createNativeStackNavigator<NavigatorOverride>()

export const HomeNavigator = (): JSX.Element => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false, animation: 'default' }}
    >
      <HomeStack.Screen
        name={NavigationRoutes.HOME_STACK}
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          animation: 'fade_from_bottom',
          gestureEnabled: true,
          gestureDirection: 'vertical'
        }}
        name={NavigationRoutes.ARTICLE}
        component={ArticleScreen}
      />
    </HomeStack.Navigator>
  )
}
