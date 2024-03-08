import { type FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationScreen from '@screens/notification'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import { MainScreen } from '..'
// import { Main } from '..'
// import { color } from '@rneui/base'
// components
const Stack = createNativeStackNavigator()

const MainStack: FC = () => {
  const colorScheme = mainStore.use.colorScheme()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          statusBarHidden: false,
          statusBarColor:
            colorScheme === ColorScheme.Dark
              ? theme.extend.colors.background.dark
              : theme.extend.colors.background.DEFAULT
        }}
      />
      {/* <Stack.Screen
        name='Notificaciones'
        component={NotificationScreen}
        options={{
          headerShadowVisible: false,
          headerTitleStyle: { fontSize: 24, fontWeight: '700' }
        }}
      /> */}
    </Stack.Navigator>
  )
}

export default MainStack
