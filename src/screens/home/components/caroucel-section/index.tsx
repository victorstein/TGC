import SimpleCaroucel from '@shared/components/simple-caroucel'
import type { FC } from 'react'
import { View } from 'react-native'

const CaroucelSection: FC = () => {
  return (
    <View className='mx-2 bg-banner-filter/75'>
      <SimpleCaroucel />
    </View>
  )
}

export default CaroucelSection
