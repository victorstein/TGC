import { Text, View, Image } from 'react-native'
import type { FC } from 'react'
// logo
// @ts-expect-error errorURL
import LogoTGC from '../../../assets/img/LOGO.png'
import type { layoutProps } from './propsLayoutTypes'
import Constants from 'expo-constants'

const LayoutScreen: FC<layoutProps> = (props) => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight
      }}
      className='flex flex-col flex-1 bg-background dark:bg-background-dark'
    >
      <View className='h-[70px] flex flex-row gap-x-6 justify-between items-center'>
        <View className='h-full flex flex-row gap-x-6 justify-start items-center'>
          <Image className='w-[50px] h-[54px]' source={LogoTGC} />
          <Text className='font-[700] text-16px leading-[19.2px] text-text dark:text-text-dark'>
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
