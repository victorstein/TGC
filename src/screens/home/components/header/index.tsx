import { Text, View, Pressable } from 'react-native'
import type { FC } from 'react'
import NotificationIcon from '../notification-icon'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'

const Header: FC = () => {
  const logoTGC = require('@assets/img/logo.png')
  const { toggleColorScheme } = useColorScheme()

  return (
    <View className='flex flex-col w-full bg-background dark:bg-background-dark mb-5 mt-8'>
      <View className='pt-5 flex flex-row gap-x-6 justify-between items-center'>
        <View className='h-full flex flex-row gap-x-6 justify-start items-center'>
          <Pressable onPress={toggleColorScheme}>
            <Image
              className='w-[50px] h-[54px]'
              source={logoTGC}
              cachePolicy='memory-disk'
            />
          </Pressable>
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
