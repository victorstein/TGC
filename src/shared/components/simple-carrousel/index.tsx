import type { FC } from 'react'
import { ScrollView, Text, View, useWindowDimensions } from 'react-native'
import ItemCardCarousel, {
  type itemCardCarouselProps
} from './item-card-carousel'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { Icon } from '@rneui/themed'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import { LoadingWrapper } from '../loading-wrapper/loading-wrapper'

interface simpleCarouselProps {
  data?: itemCardCarouselProps[]
  isError?: boolean
  isLoading?: boolean
}

const SimpleCarousel: FC<simpleCarouselProps> = (props) => {
  const coloScheme = mainStore.use.colorScheme()
  const { colors } = theme.extend
  const { data = [], isLoading = false, isError = false } = props
  const { width } = useWindowDimensions()

  if (isError) {
    return (
      <View className='w-full flex justify-center items-center py-3'>
        <View className='py-4 bg-primary/40 w-[80%] rounded-xl felx flex-row justify-center items-center'>
          <Icon
            style={{
              marginRight: 10
            }}
            size={18}
            type='ionicon'
            name='alert-circle-outline'
            color={
              coloScheme === ColorScheme.Dark
                ? colors.text.dark
                : colors.text.DEFAULT
            }
          />
          <Text className=' text-background-dark dark:text-background'>
            No Data
          </Text>
        </View>
      </View>
    )
  }

  return (
    <LoadingWrapper
      skeleton={
        <View className='w-full flex flex-row'>
          <SkeletonComponent width={width * 0.75} height={90} />
          <View className='px-[10px]' />
          <SkeletonComponent width={width * 0.75} height={90} />
        </View>
      }
      loading={isLoading}
    >
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
        {data.map((value, key) => (
          <ItemCardCarousel {...value} key={key} />
        ))}
      </ScrollView>
    </LoadingWrapper>
  )
}

export type { itemCardCarouselProps }

export default SimpleCarousel
