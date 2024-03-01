import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { View, Text, Pressable } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import HomeIcon from '@shared/components/icons/home-icon'
import SearchIcon from '@shared/components/icons/search-icon'
import PlayIcon from '@shared/components/icons/play-icon'
import { TabName } from '../home.types'
import { mainStore } from '../store/store'
import { theme } from '@tailwind'
import { MotiView } from 'moti'

const { colors } = theme.extend

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
        const isFocused = state.index === index

        const {
          tabBarActiveTintColor,
          tabBarInactiveTintColor: inactiveTintColor
        } = options
        const tabBarInactiveTintColor =
          colorScheme === 'dark' ? colors.background.DEFAULT : inactiveTintColor

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

        console.log('isFocused', isFocused, label)

        return (
          <MotiView
            testID={options.tabBarTestID}
            key={`routes-${index}-${route.key}`}
            animate={{ width: isFocused ? '50%' : '25%' }}
            transition={{
              type: 'spring',
              duration: 200
            }}
          >
            <Pressable onPress={onPress} onLongPress={onLongPress}>
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
                        activeTintColor={tabBarActiveTintColor}
                        inactiveTintColor={tabBarInactiveTintColor}
                      />
                    ) : label === TabName.PLAY ? (
                      <PlayIcon
                        size={24}
                        focused={isFocused}
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
            </Pressable>
          </MotiView>
        )
      })}
    </Animated.View>
  )
}
