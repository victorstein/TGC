import { type FC, useState } from 'react'
import { Tab, TabView } from '@rneui/themed'
import { theme } from '@tailwind'
// Component
import MainBanner from '../mainBanner'
import { View, type RippleBackgroundPropType, Text } from 'react-native'
const { colors } = theme.extend

const tabItemBackConfig: RippleBackgroundPropType = {
  type: 'RippleAndroid',
  borderless: false,
  rippleRadius: undefined,
  color: 1
}

const HomeTabs: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabIndexHandler = (e: number): void => {
    setTabIndex(e)
  }

  return (
    <>
      <View className='px-10'>
        <Tab
          value={tabIndex}
          onChange={tabIndexHandler}
          titleStyle={(active) => ({
            color: colors.text.DEFAULT,
            fontSize: 12,
            fontWeight: active ? '700' : '400',
            lineHeight: 14.4,
            paddingHorizontal: 0,
            paddingVertical: 0,
            paddingBottom: 6.5
          })}
          indicatorStyle={{
            height: 2,
            backgroundColor: colors.primary.DEFAULT
          }}
        >
          <Tab.Item background={tabItemBackConfig} title='Podcast' />
          <Tab.Item title='Gaming' background={tabItemBackConfig} />
          <Tab.Item title='Tech' background={tabItemBackConfig} />
          <Tab.Item title='Code' background={tabItemBackConfig} />
        </Tab>
      </View>
      <TabView
        value={tabIndex}
        onChange={tabIndexHandler}
        tabItemContainerStyle={{ display: 'flex', alignItems: 'baseline' }}
      >
        <TabView.Item className='w-full'>
          <View className='p-2'>
            <Text>PODCAST</Text>
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <Text>GAMING</Text>
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <Text>TECH</Text>
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <Text>CODE</Text>
          </View>
        </TabView.Item>
      </TabView>
    </>
  )
}

export default HomeTabs
