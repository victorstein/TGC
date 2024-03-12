import { CategoryEnum } from '@screens/home/types/home-types'
import { type FC } from 'react'
import { View } from 'react-native'
import { MainBannerWrapper } from '../../main-banner/main-banner-wrapper'
import CarrouselLastPodcast from '../../carrousel-lattest-posts'

export const GamingTab: FC = () => {
  return (
    <View className='mb-4'>
      <MainBannerWrapper categoryName={CategoryEnum.GAMING} />
      <CarrouselLastPodcast categoryName={CategoryEnum.GAMING} />
    </View>
  )
}
