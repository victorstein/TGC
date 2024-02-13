import { Text, View, Image } from 'react-native'
// logo
// @ts-expect-error errorURL
import LogoTGC from '../../../assets/LOGO.png'
import type { layoutProps } from './propsLayoutTypes'

const LayoutScreen = (props: layoutProps): JSX.Element => {
  return (
    <View className='flex flex-col h-screen pt-6 bg-blue-500'>
      <View className='h-[90px] flex flex-row gap-6 justify-between items-center'>
        <View className='h-full flex flex-row gap-6 justify-start items-center'>
          <Image className='w-[50px] h-[54px]' source={LogoTGC} />
          <Text>
            Bienvenido a{'\n'}
            Tech, code y Gaming.
          </Text>
        </View>
        <View className='pr-3'>
          <Text>Icon</Text>
        </View>
      </View>
      <View className='w-full h-auto flex-1'>{props.children}</View>
    </View>
  )
}

export default LayoutScreen
