import type { FC } from 'react'
import { ScrollView } from 'react-native'
import ItemCardCarousel from './item-card-carousel'
const SimpleCarousel: FC = () => {
  return (
    <>
      <ScrollView
        className='w-full flex flex-row'
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        decelerationRate={0}
        snapToAlignment='center'
        contentInset={{
          top: 0,
          bottom: 0
        }}
      >
        <ItemCardCarousel />
        <ItemCardCarousel />
        <ItemCardCarousel />
        <ItemCardCarousel />
      </ScrollView>
    </>
  )
}

export default SimpleCarousel
