import type { FC } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'

const ItemCardCarousel: FC = () => {
  const logoSpotify = require('@assets/img/logo-spotify.png')

  return (
    <View className='flex flex-row justify-center px-[19px] items-center border border-solid h-[90px] w-full max-w-[73vw] rounded-xl border-separator dark:border-separator-dark mr-[10px]'>
      <Image
        className='w-[52px] h-[56px] mr-[16px]'
        source={logoSpotify}
        cachePolicy='memory-disk'
      />
      <View className='flex flex-col w-[75%]'>
        <Text
          numberOfLines={2}
          className='font-lato-bold text-[14px] leading-[16.8px] text-background-dark dark:text-background mb-1'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        </Text>
        <Text className='text-xs text-text/80 dark:text-text-dark/80'>
          12 de Feb 2023
        </Text>
      </View>
    </View>
  )
}

export default ItemCardCarousel
