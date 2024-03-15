import { MotiView } from 'moti'
import { Dimensions, Text, View } from 'react-native'
import { useArticle } from './hooks/use-article'
import { useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'
import { HtmlRenderer } from '@shared/components/html-renderer/html-renderer'
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useMemo, useState } from 'react'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'

const { height } = Dimensions.get('window')

export const ArticleScreen = (): JSX.Element => {
  const { params } = useRoute()
  const { redirectId: id } = params as { redirectId: string }
  const initialPosition = height * 0.25
  const titleHeight = 52
  const scrollValue = useSharedValue(initialPosition)
  const containerHeight = useSharedValue(height * 0.83)
  const [isTop, setIsTop] = useState(true)

  const { article, refetch } = useArticle({
    id
  })

  useDerivedValue(() => {
    runOnJS(setIsTop)(scrollValue.value === titleHeight)
  })

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }): void => {
      if (contentOffset.y > 0 && scrollValue.value !== 0) {
        scrollValue.value = withTiming(titleHeight, { duration: 400 })
      } else {
        scrollValue.value = withTiming(initialPosition, { duration: 400 })
      }
    }
  })

  const contentWard = (_: number, contentHight: number): void => {
    if (contentHight < height * 0.8) {
      containerHeight.value = withTiming(height * 0.75, { duration: 400 })
    }
  }

  const containerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: scrollValue.value
        }
      ],
      height: containerHeight.value,
      borderTopLeftRadius: interpolate(
        scrollValue.value,
        [titleHeight, initialPosition],
        [0, 40],
        Extrapolation.CLAMP
      ),
      borderTopRightRadius: interpolate(
        scrollValue.value,
        [titleHeight, initialPosition],
        [0, 40],
        Extrapolation.CLAMP
      )
    }
  })

  const memoizedHtmlRenderer = useMemo(() => {
    return <HtmlRenderer htmlString={article.htmlBlocks ?? ''} />
  }, [article.htmlBlocks])

  return (
    <View className='bg-background dark:bg-background-dark flex-1'>
      <Image
        source={{ uri: article.featuredImage?.node.mediaItemUrl ?? '' }}
        className='w-full h-1/2'
        cachePolicy={'memory-disk'}
      />
      <MotiView
        className='w-full bg-notification-bg dark:bg-notification-bg-dark p-3 absolute'
        animate={{
          opacity: isTop ? 1 : 0,
          top: isTop ? 0 : titleHeight
        }}
        transition={{
          type: 'timing',
          duration: 200
        }}
      >
        <Text
          numberOfLines={1}
          className='text-lg font-lato-bold text-text dark:text-text-dark'
        >
          {article.title}
        </Text>
      </MotiView>
      <MotiView
        style={containerStyles}
        className='bg-background dark:bg-background-dark flex-1 absolute w-full'
      >
        <ScrollRefreshView
          refetch={[refetch]}
          onScroll={onScroll}
          bounces={false}
          className='px-8 pt-10 rounded-t-[40px] z-10'
          fadingEdgeLength={titleHeight}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={contentWard}
        >
          <View className='items-baseline'>
            <View className='px-2 py-1 rounded-lg bg-primary/10 mb-4'>
              <Text className='text-lg font-lato-bold text-primary'>
                {article.categories?.nodes[0].name ?? ''}
              </Text>
            </View>
            <View className='flex flex-row'>
              <Text className='font-lato-extra-bold text-text dark:text-text-dark text-base mb-4'>
                {article.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingBottom: titleHeight
            }}
          >
            {memoizedHtmlRenderer}
          </View>
        </ScrollRefreshView>
      </MotiView>
    </View>
  )
}
