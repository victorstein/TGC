import type { FC } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { TabName } from '@screens/home/types/home-types'

export interface itemCardCarouselProps {
  title: string
  urlImg: string | any
  subTitle: string
  disable?: boolean
  goToView: string
}

const ItemCardCarousel: FC<itemCardCarouselProps> = (props) => {
  const {
    subTitle,
    title,
    urlImg,
    disable = false,
    goToView = TabName.HOME
  } = props
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    if (!disable) {
      navigation.navigate(goToView)
    }
  }

  return (
    <TouchableHighlight
      onPress={navigateHandler}
      activeOpacity={0.9}
      underlayColor='transparent'
    >
      <View
        className={`flex flex-row justify-center px-[19px] items-center border border-solid h-[90px] w-full max-w-[73vw] rounded-xl border-separator dark:border-separator-dark mr-[10px] ${disable ? 'opacity-50' : ''}`}
      >
        <Image
          className='w-[52px] h-[56px] mr-[16px]'
          source={urlImg}
          cachePolicy='memory-disk'
        />
        <View className='flex flex-col w-[75%]'>
          <Text
            numberOfLines={2}
            className='font-lato-bold text-[14px] leading-[16.8px] text-background-dark dark:text-background mb-1'
          >
            {title}
          </Text>
          <Text className='text-xs text-text/80 dark:text-text-dark/80'>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ItemCardCarousel
