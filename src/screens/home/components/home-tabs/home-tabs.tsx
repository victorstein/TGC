import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CodingTab } from './coding-tab'
import { PodcastTab } from './podcast-tab'
import { type FC } from 'react'
import { GamingTab } from './gaming-tab'
import { TechTab } from './tech-tab'
import { theme } from '@tailwind'
import { Dimensions, Text } from 'react-native'
import { NavigationRoutes } from '@screens/home/types/home-types'

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
            className={`text-sm ${focused ? 'font-lato-bold text-[13px]' : 'font-lato-regular'} text-text dark:text-text-dark self-center`}
          >
            {children}
          </Text>
        )
      }}
    >
      <HomeTabs.Screen
        name={NavigationRoutes.PODCAST_TAB}
        component={PodcastTab}
      />
      <HomeTabs.Screen
        name={NavigationRoutes.GAMING_TAB}
        component={GamingTab}
      />
      <HomeTabs.Screen name={NavigationRoutes.TECH_TAB} component={TechTab} />
      <HomeTabs.Screen
        name={NavigationRoutes.CODING_TAB}
        component={CodingTab}
      />
    </HomeTabs.Navigator>
  )
}
