import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../home'
import { SearchScreen } from '../search'
import { PlayScreen } from '../play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '../../integrations/store/store'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { splashStore } from '../splash/store/store'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const setLoadingFonts = splashStore.use.setLoadingFonts()
  const client = apolloStore.use.client()

  const [fontsLoaded, fontError] = useFonts({
    'sc-pro': require('../../assets/fonts/sc-pro.ttf')
  })

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError !== null) {
      setLoadingFonts(false)
    }
  }, [fontsLoaded, fontError])

  return (
    <View onLayout={onLayoutRootView}>
      {/*  eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <ApolloProvider client={client!}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Search' component={SearchScreen} />
          <Tab.Screen name='Play' component={PlayScreen} />
        </Tab.Navigator>
      </ApolloProvider>
    </View>
  )
}
