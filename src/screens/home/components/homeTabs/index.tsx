import { type FC, useState } from 'react'
import { Tab, Text, TabView } from '@rneui/themed'
// Component
import MainBanner from '../mainBanner'

const HomeTabs: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabIndexHandler = (e: number): void => {
    setTabIndex(e)
  }

  return (
    <>
      <Tab
        value={tabIndex}
        onChange={tabIndexHandler}
        titleStyle={(active) => ({
          fontSize: 12,
          fontWeight: active ? '700' : '400',
          lineHeight: 14.4
        })}
      >
        <Tab.Item title='Podcast' />
        <Tab.Item title='Gaming' />
        <Tab.Item title='Tech' />
        <Tab.Item title='Code' />
      </Tab>
      <TabView value={tabIndex} onChange={tabIndexHandler}>
        <TabView.Item className='bg-red-200 flex-1 px-2 py-3'>
          <MainBanner
            title='The Pokemon company planea investigar a PalWorld'
            description='La compañía detrás de Pocket Monsters investigará a Palworld por posible infracción de propiedad intelectual'
            bgImageUrl='https://techraptor.net/sites/default/files/styles/hero/public/2024-01/palworld-and-detective-pikachu.jpg?itok=fUusvjUN'
            duration={12}
          />
        </TabView.Item>
        <TabView.Item className='bg-teal-300 flex-1'>
          <Text>GAMING</Text>
        </TabView.Item>
        <TabView.Item className='bg-amber-200 flex-1'>
          <Text>TECH</Text>
        </TabView.Item>
        <TabView.Item className='bg-lime-500 flex-1'>
          <Text>CODE</Text>
        </TabView.Item>
      </TabView>
    </>
  )
}

export default HomeTabs
