import { type FC, useState } from 'react'
import { Tab, TabView } from '@rneui/themed'
import { theme } from '@tailwind'
// Component
import { View, type RippleBackgroundPropType, Text } from 'react-native'
import { mainStore, ColorScheme } from '@screens/main/store/store'
import MainBanner from '../mainBanner'
const { colors } = theme.extend

const tabItemBackConfig: RippleBackgroundPropType = {
  type: 'RippleAndroid',
  borderless: false,
  rippleRadius: undefined,
  color: 1
}

const HomeTabs: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const storeColor = mainStore.use.colorScheme()

  const tabIndexHandler = (e: number): void => {
    setTabIndex(e)
  }

  return (
    <>
      <View className='px-16 pt-5'>
        <Tab
          value={tabIndex}
          onChange={tabIndexHandler}
          titleStyle={(active) => ({
            color:
              storeColor === ColorScheme.Dark
                ? colors.text.dark
                : colors.text.DEFAULT,
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
        tabItemContainerStyle={{
          display: 'flex',
          alignItems: 'baseline',
          backgroundColor: '#000'
        }}
      >
        <TabView.Item className='w-full'>
          <View className='p-2'>
            <MainBanner
              title='The Pokemon company planea investigar a PalWorld'
              description='La compañía detrás de Pocket Monsters investigará a Palworld por posible infracción de propiedad intelectual'
              bgImageUrl='https://techraptor.net/sites/default/files/styles/hero/public/2024-01/palworld-and-detective-pikachu.jpg?itok=fUusvjUN'
              duration={12}
            />
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <Text className='text-text-dark'>GAMING</Text>
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
