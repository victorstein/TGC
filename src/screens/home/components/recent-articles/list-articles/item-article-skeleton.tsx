import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { type FC } from 'react'
import { View, useWindowDimensions } from 'react-native'

const ItemArticleSkeleton: FC = () => {
  const { width } = useWindowDimensions()
  return (
    <View className='mb-[24px] flex flex-row'>
      <SkeletonComponent
        style={{
          marginRight: 12
        }}
        width={110}
        height={110}
      />

      <View className='flex flex-col w-full max-w-[68%] justify-center'>
        <View className='pb-2'>
          <SkeletonComponent
            style={{
              marginBottom: 2,
              marginTop: 8
            }}
            width={width * 0.6}
            height={25}
          />
        </View>
        <View className='flex flex-row items-center'>
          <SkeletonComponent
            style={{
              marginRight: 10
            }}
            width={50}
            height={15}
          />
          <SkeletonComponent width={50} height={15} />
        </View>
        <View className='py-2'>
          <SkeletonComponent width={width * 0.35} height={35} />
        </View>
      </View>
    </View>
  )
}

export default ItemArticleSkeleton
