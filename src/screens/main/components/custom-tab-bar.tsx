import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { View, TouchableHighlight, Text } from 'react-native'
import Animated, {
  FadeInDown,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import HomeIcon from './home-icon'
import SearchIcon from './search-icon'
import PlayIcon from './play-icon'
import { TabName } from '../home.types'
import { useEffect } from 'react'
import { mainStore } from '../store/store'

const AnimatedTouchableHighlight =
  Animated.createAnimatedComponent(TouchableHighlight)

export const CustomTabBar = ({
  state,
  descriptors,
  navigation
}: BottomTabBarProps): JSX.Element => {
  const colorScheme = mainStore.use.colorScheme()

  return (
    <Animated.View className='flex flex-row h-[70px] justify-center px-[10vw] bg-background dark:bg-background-dark'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = (options.title ?? route.name) as TabName
        const buttonWidth = useSharedValue(25)

        const buttonAnimatedStyle = useAnimatedStyle(() => {
          return {
            width: `${buttonWidth.value}%`
          }
        })

        const isFocused = state.index === index
        const {
          tabBarActiveTintColor,
          tabBarInactiveTintColor: inactiveTintColor
        } = options
        const tabBarInactiveTintColor =
          colorScheme === 'dark' ? '#FFFFFF' : inactiveTintColor

        useEffect(() => {
          buttonWidth.value = withSpring(isFocused ? 50 : 25, {
            duration: 500,
            dampingRatio: 0.4,
            stiffness: 182,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 34.21,
            reduceMotion: ReduceMotion.System
          })
        }, [isFocused])

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = (): void => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <AnimatedTouchableHighlight
            underlayColor={'none'}
            testID={options.tabBarTestID}
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[buttonAnimatedStyle]}
          >
            <View className='flex items-center flex-row h-full justify-center'>
              <View
                className='flex flex-row px-8 py-3 rounded-full items-center justify-center'
                style={[
                  {
                    backgroundColor: isFocused
                      ? 'rgba(233, 0, 100, 0.08)'
                      : 'transparent'
                  }
                ]}
              >
                <View className='flex max-h-6 mr-2'>
                  {label === TabName.HOME ? (
                    <HomeIcon
                      size={24}
                      focused={isFocused}
                      activeTintColor={tabBarActiveTintColor}
                      inactiveTintColor={tabBarInactiveTintColor}
                    />
                  ) : label === TabName.SEARCH ? (
                    <SearchIcon
                      size={24}
                      focused={isFocused}
                      color={tabBarActiveTintColor}
                      activeTintColor={tabBarActiveTintColor}
                      inactiveTintColor={tabBarInactiveTintColor}
                    />
                  ) : label === TabName.PLAY ? (
                    <PlayIcon
                      size={24}
                      focused={isFocused}
                      color={tabBarActiveTintColor}
                      activeTintColor={tabBarActiveTintColor}
                      inactiveTintColor={tabBarInactiveTintColor}
                    />
                  ) : null}
                </View>
                {isFocused && (
                  <Animated.View entering={FadeInDown.duration(100)}>
                    <Text
                      numberOfLines={1}
                      className='text-primary font-lato-bold'
                    >
                      {label}
                    </Text>
                  </Animated.View>
                )}
              </View>
            </View>
          </AnimatedTouchableHighlight>
        )
      })}
    </Animated.View>
  )
}
