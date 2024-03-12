import { type FC } from 'react'
import { View } from 'react-native'
import { MainBannerWrapper } from '../../main-banner/main-banner-wrapper'
import { CategoryEnum } from '@screens/home/types/home-types'
import CarrouselLastPodcast from '../../carrousel-lattest-posts'

export const TechTab: FC = () => {
  return (
    <View className='mb-4'>
      <MainBannerWrapper categoryName={CategoryEnum.TECH} />
      <CarrouselLastPodcast categoryName={CategoryEnum.TECH} />
    </View>
  )
}
