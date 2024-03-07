import { type FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/home'
import NotificationScreen from '@screens/notification'
// components
const Stack = createNativeStackNavigator()

const HomeStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Notifications' component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
