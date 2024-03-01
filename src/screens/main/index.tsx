import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@screens/home'
import { SearchScreen } from '@screens/search'
import { PlayScreen } from '@screens/play'
import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { TabName } from './home.types'
import { theme } from '@tailwind'
import { Pressable, Text, Dimensions } from 'react-native'
import { MotiView, View } from 'moti'
import HomeIcon from '@shared/components/icons/home-icon'
import Animated, { FadeInDown } from 'react-native-reanimated'
import SearchIcon from '@shared/components/icons/search-icon'
import PlayIcon from '@shared/components/icons/play-icon'

const Tab = createBottomTabNavigator()

export const Main = (): JSX.Element => {
  const client = apolloStore.use.client()
  const { colors } = theme.extend
  const deviceWidth = Dimensions.get('window').width

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-type-assertion
    <ApolloProvider client={client!}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarStyle: {
            height: 70,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: deviceWidth * 0.1,
            backgroundColor: colors.background.DEFAULT
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary.DEFAULT,
          tabBarInactiveTintColor: colors.text.DEFAULT
        }}
      >
        <Tab.Screen
          name={TabName.HOME}
          component={HomeScreen}
          options={{
            tabBarButton: (props) => {
              const isFocused = props.accessibilityState?.selected ?? false

              return (
                <MotiView
                  animate={{ width: isFocused ? '50%' : '25%' }}
                  transition={{
                    type: 'timing',
                    duration: 200
                  }}
                >
                  <Pressable {...props} />
                </MotiView>
              )
            },
            tabBarIcon: ({ focused, color }) => (
              <View className='flex items-center flex-row h-full justify-center'>
                <View
                  className='flex flex-row px-8 py-3 rounded-full items-center justify-center'
                  style={[
                    {
                      backgroundColor: focused
                        ? 'rgba(233, 0, 100, 0.08)'
                        : 'transparent'
                    }
                  ]}
                >
                  <View className='flex max-h-6 mr-2'>
                    <HomeIcon
                      size={24}
                      focused={focused}
                      activeTintColor={color}
                      inactiveTintColor={color}
                    />
                  </View>
                  {focused && (
                    <Animated.View entering={FadeInDown.duration(100)}>
                      <Text
                        numberOfLines={1}
                        className='text-primary font-lato-bold'
                      >
                        Inicio
                      </Text>
                    </Animated.View>
                  )}
                </View>
              </View>
            )
          }}
        />
        <Tab.Screen
          name={TabName.SEARCH}
          component={SearchScreen}
          options={{
            tabBarButton: (props) => {
              const isFocused = props.accessibilityState?.selected ?? false
              return (
                <MotiView
                  animate={{ width: isFocused ? '50%' : '25%' }}
                  transition={{
                    type: 'timing',
                    duration: 200
                  }}
                >
                  <Pressable {...props} />
                </MotiView>
              )
            },
            tabBarIcon: ({ focused, color }) => (
              <View className='flex items-center flex-row h-full justify-center'>
                <View
                  className='flex flex-row px-8 py-3 rounded-full items-center justify-center'
                  style={[
                    {
                      backgroundColor: focused
                        ? 'rgba(233, 0, 100, 0.08)'
                        : 'transparent'
                    }
                  ]}
                >
                  <View className='flex max-h-6 mr-2'>
                    <SearchIcon
                      size={24}
                      focused={focused}
                      activeTintColor={color}
                      inactiveTintColor={color}
                    />
                  </View>
                  {focused && (
                    <Animated.View entering={FadeInDown.duration(100)}>
                      <Text
                        numberOfLines={1}
                        className='text-primary font-lato-bold'
                      >
                        Buscar
                      </Text>
                    </Animated.View>
                  )}
                </View>
              </View>
            )
          }}
        />
        <Tab.Screen
          name={TabName.PLAY}
          component={PlayScreen}
          options={{
            tabBarButton: (props) => {
              const isFocused = props.accessibilityState?.selected ?? false
              return (
                <MotiView
                  animate={{ width: isFocused ? '50%' : '25%' }}
                  transition={{
                    type: 'timing',
                    duration: 200
                  }}
                >
                  <Pressable {...props} />
                </MotiView>
              )
            },
            tabBarIcon: ({ focused, color }) => (
              <View className='flex items-center flex-row h-full justify-center'>
                <View
                  className='flex flex-row px-8 py-3 rounded-full items-center justify-center'
                  style={[
                    {
                      backgroundColor: focused
                        ? 'rgba(233, 0, 100, 0.08)'
                        : 'transparent'
                    }
                  ]}
                >
                  <View className='flex max-h-6 mr-2'>
                    <PlayIcon
                      size={24}
                      focused={focused}
                      activeTintColor={color}
                      inactiveTintColor={color}
                    />
                  </View>
                  {focused && (
                    <Animated.View entering={FadeInDown.duration(100)}>
                      <Text
                        numberOfLines={1}
                        className='text-primary font-lato-bold'
                      >
                        Reproducir
                      </Text>
                    </Animated.View>
                  )}
                </View>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </ApolloProvider>
  )
}
