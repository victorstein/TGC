import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CodingTab } from './coding-tab'
import { PodcastTab } from './podcast-tab'
import { type FC } from 'react'
import { GamingTab } from './gaming-tab'
import { TechTab } from './tech-tab'
import { theme } from '@tailwind'
import { Dimensions, Text } from 'react-native'

const { colors } = theme.extend

const HomeTabs = createMaterialTopTabNavigator()

export const HomeTabsComponent: FC = () => {
  return (
    <HomeTabs.Navigator
      initialLayout={{
        width: Dimensions.get('window').width
      }}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
        paddingTop: 16,
        paddingHorizontal: 16
      }}
      screenOptions={{
        lazy: true,
        swipeEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary.DEFAULT,
          height: 2
        },
        tabBarPressOpacity: 0,
        tabBarStyle: {
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
          width: '80%',
          alignSelf: 'center'
        },
        tabBarAndroidRipple: {
          color: 'transparent',
          borderless: true
        },
        tabBarLabel: ({ focused, children }) => (
          <Text
            className={`text-sm ${focused ? 'font-lato-bold text-[13.4px]' : 'font-lato-regular'} text-text dark:text-text-dark self-center`}
          >
            {children}
          </Text>
        )
      }}
    >
      <HomeTabs.Screen name='Podcast' component={PodcastTab} />
      <HomeTabs.Screen name='Gaming' component={GamingTab} />
      <HomeTabs.Screen name='Tech' component={TechTab} />
      <HomeTabs.Screen name='Coding' component={CodingTab} />
    </HomeTabs.Navigator>
  )
}
