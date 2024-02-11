import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../home'
import { SearchScreen } from '../search'
import { PlayScreen } from '../play'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
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
