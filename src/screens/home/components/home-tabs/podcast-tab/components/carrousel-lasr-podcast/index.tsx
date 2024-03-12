import { type FC, useMemo } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from '@rneui/themed'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import { useNavigation } from '@react-navigation/native'
import { CategoryEnum, TabName } from '@screens/home/types/home-types'
import SimpleCarousel, {
  type itemCardCarouselProps
} from '@shared/components/simple-carrousel'
import { usePosts } from '@screens/home/hooks/use-posts'
import { homeStore } from '@screens/home/store/home-store'
import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'

const { colors } = theme.extend

const CarrouselLastPodcast: FC = () => {
  const homeLoading = homeStore.use.isRefreshing()
  const coloScheme = mainStore.use.colorScheme()
  const { loading, posts } = usePosts({
    first: 11,
    categoryName: CategoryEnum.CODE
  })
  const isLoadingPost = loading || homeLoading
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    navigation.navigate(TabName.SEARCH)
  }

  const parsedPosts: itemCardCarouselProps[] = useMemo(() => {
    return posts.map<itemCardCarouselProps>((post) => ({
      title: post.title ?? '',
      subTitle: new Date(String(post.date ?? '')).toLocaleDateString(),
      urlImg: post.featuredImage?.node.mediaItemUrl,
      postId: post.id
    }))
  }, [posts])

  return (
    <>
      <View className='mb-4 my-5 mx-2'>
        <LoadingWrapper
          skeleton={<SkeletonComponent width='100%' height={20} />}
          loading={isLoadingPost}
        >
          {parsedPosts.length > 0 && (
            <TouchableHighlight
              onPress={navigateHandler}
              activeOpacity={0.9}
              underlayColor='transparent'
            >
              <View className='flex flex-row justify-between items-center'>
                <Text className='font-lato-bold text-lg text-background-dark dark:text-background'>
                  Ultimos Podcasts
                </Text>
                <Icon
                  size={18}
                  type='ionicon'
                  name='chevron-forward-outline'
                  color={
                    coloScheme === ColorScheme.Dark
                      ? colors.text.dark
                      : colors.text.DEFAULT
                  }
                />
              </View>
            </TouchableHighlight>
          )}
        </LoadingWrapper>
      </View>

      <SimpleCarousel data={parsedPosts} isLoading={isLoadingPost} />
    </>
  )
}

export default CarrouselLastPodcast
