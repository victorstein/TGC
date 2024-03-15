import { HtmlRenderer } from '@shared/components/html-renderer/html-renderer'
import { Image } from 'expo-image'
import { useMemo, type FC } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const { height } = Dimensions.get('window')

export interface IArticleProps {
  htmlString: string
  title: string
  category: string
  featuredImage: string
}

export const Article: FC<IArticleProps> = ({
  htmlString,
  title,
  category,
  featuredImage
}) => {
  const initialPosition = height * 0.25
  const titleHeight = 52
  const scrollValue = useSharedValue(initialPosition)
  const containerHeight = useSharedValue(height * 0.83)

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }): void => {
      if (contentOffset.y > 0 && scrollValue.value !== titleHeight) {
        scrollValue.value = withTiming(titleHeight, { duration: 200 })
      } else if (contentOffset.y === 0 && scrollValue.value === titleHeight) {
        scrollValue.value = withTiming(initialPosition, { duration: 200 })
      }
    }
  })

  const contentWard = (_: number, contentHight: number): void => {
    if (contentHight < containerHeight.value) {
      containerHeight.value = withTiming(height * 0.73, { duration: 200 })
    }
  }

  const titleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: scrollValue.value === initialPosition ? titleHeight : 0
        }
      ],
      opacity: interpolate(
        scrollValue.value,
        [titleHeight, initialPosition],
        [1, 0],
        Extrapolation.CLAMP
      )
    }
  })

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
    return <HtmlRenderer htmlString={htmlString} />
  }, [htmlString])

  return (
    <>
      <Image
        source={{ uri: featuredImage }}
        className='w-full h-1/2'
        cachePolicy={'memory-disk'}
      />
      <Animated.View
        className='w-full bg-notification-bg dark:bg-notification-bg-dark p-3 absolute'
        style={titleStyles}
      >
        <Text
          numberOfLines={1}
          className='text-lg font-lato-bold text-text dark:text-text-dark'
        >
          {title}
        </Text>
      </Animated.View>
      <Animated.View
        style={containerStyles}
        className='bg-background dark:bg-background-dark absolute w-full'
      >
        <Animated.ScrollView
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
                {category}
              </Text>
            </View>
            <View className='flex flex-row'>
              <Text className='font-lato-extra-bold text-text dark:text-text-dark text-base mb-4'>
                {title}
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
        </Animated.ScrollView>
      </Animated.View>
    </>
  )
}
