import { type FC } from 'react'
import { View } from 'react-native'
import { MainBannerWrapper } from '../../main-banner/main-banner-wrapper'
import { CategoryEnum } from '@screens/home/types/home-types'

export const PodcastTab: FC = () => {
  return (
    <View className='mb-4'>
      <MainBannerWrapper categoryName={CategoryEnum.CODE} />
    </View>
  )
}
