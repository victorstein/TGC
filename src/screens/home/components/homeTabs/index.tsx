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
        containerStyle={{
          height: 200,
          backgroundColor: 'yellow',
          // display: 'flex',
          // flex: 0,
          // margin: 10
          position: 'relative'
        }}
        tabItemContainerStyle={{
          // display: 'flex',
          // alignItems: 'baseline',
          padding: 13,
          // flex: 0,
          backgroundColor: 'red',
          // height: 200,
          position: 'relative'
        }}
      >
        <TabView.Item className='bg-blue-600 relative'>
          <MainBanner
            title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
            bgImageUrl='https://techraptor.net/sites/default/files/styles/hero/public/2024-01/palworld-and-detective-pikachu.jpg?itok=fUusvjUN'
            duration={12}
          />
          {/* <View className='p-2'></View> */}
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <MainBanner
              title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
              bgImageUrl='https://img.freepik.com/foto-gratis/jugador-tiro-medio-sentado-silla_23-2149829176.jpg?w=740&t=st=1709524136~exp=1709524736~hmac=ef0e20645c9439cac626bdefc759b874e671dd6af81920a4eb973dc815bf7732'
              duration={10}
            />
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <MainBanner
              title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
              bgImageUrl='https://img.freepik.com/foto-gratis/persona-trabajando-html-computadora_23-2150038860.jpg?t=st=1709527890~exp=1709531490~hmac=1b5dfc627407c77cd5bbe9cd42c35a1cb8b9594ee77a6a0ceb3456e5be6fd137&w=996'
              duration={10}
            />
          </View>
        </TabView.Item>
        <TabView.Item className='flex-1'>
          <View className='p-2'>
            <MainBanner
              title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
              bgImageUrl='https://img.freepik.com/vector-gratis/desarrollo-nuevas-aplicaciones-escritorio_23-2148684987.jpg'
              duration={10}
            />
          </View>
        </TabView.Item>
      </TabView>
    </>
  )
}

export default HomeTabs
