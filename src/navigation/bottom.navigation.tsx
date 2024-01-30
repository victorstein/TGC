import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/home'
import { SearchScreen } from '../screens/search'
import { PlayScreen } from '../screens/play'

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Play' component={PlayScreen} />
    </Tab.Navigator>
  )
}
