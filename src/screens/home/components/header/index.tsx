import { Text, View, Image } from 'react-native'
import type { FC } from 'react'
import logoTGC from '@assets/img/logo.png'
import Constants from 'expo-constants'
import { Avatar, Badge } from 'react-native-paper'
import NotificationIcon from '../notificationIcon'

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
        <NotificationIcon />
      </View>
    </View>
  )
}

export default Header
