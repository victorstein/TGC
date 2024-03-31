import { type FC } from 'react'
import { View, Text } from 'react-native'
import ItemArticle from './item-article'
import ItemArticleSkeleton from './item-article-skeleton'
import { FlashList } from '@shopify/flash-list'
import usePaginatedPost from '@screens/home/hooks/use-paginated-posts'
import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
import { homeStore } from '@screens/home/store/home-store'

const ListArticles: FC = () => {
  const homeLoading = homeStore.use.isRefreshing()
  const { posts, getNextPage, hasNextPage, loading, isFirtsLoad } =
    usePaginatedPost()

  return (
    <View className='flex flex-col'>
      <LoadingWrapper
        loading={(loading && isFirtsLoad) || homeLoading}
        skeleton={<ItemArticleSkeleton />}
      >
        <FlashList
          keyExtractor={(item) => item.id}
          data={posts}
          renderItem={({ item }) => (
            <ItemArticle
              key={item.id}
              id={item.id}
              subTitle={item.categories?.nodes[0].name ?? ''}
              title={item.title ?? ''}
              urlImg={item.featuredImage?.node.mediaItemUrl}
            />
          )}
          onEndReached={getNextPage}
          estimatedItemSize={115}
          ListFooterComponent={() => {
            if (hasNextPage) {
              return <ItemArticleSkeleton />
            } else {
              return (
                <View className='flex justify-center items-center'>
                  <Text className='opacity-60 font-lato-bold text-background-dark dark:text-background'>
                    Es Todo por el Momento
                  </Text>
                </View>
              )
            }
          }}
        />
      </LoadingWrapper>
    </View>
  )
}

export default ListArticles
