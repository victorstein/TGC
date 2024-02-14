import { Text, View, Image } from 'react-native'
import type { FC } from 'react'
import logoTGC from '@assets/img/logo.png'
import Constants from 'expo-constants'

const Header: FC = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight
      }}
      className='flex flex-col w-full bg-background dark:bg-background-dark my-5'
    >
      <View className='py-5 flex flex-row gap-x-6 justify-between items-center'>
        <View className='h-full flex flex-row gap-x-6 justify-start items-center'>
          <Image className='w-[50px] h-[54px]' source={logoTGC} />
          <Text className='font-lato-bold text-16px leading-[19.2px] text-text dark:text-text-dark'>
            Bienvenido a{'\n'}
            Tech, code y Gaming.
          </Text>
        </View>
        <View className='pr-3'>
          <Text>Icon</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
