import { MotiView } from 'moti'
import { Text, View } from 'react-native'
import { useArticle } from './hooks/use-article'
import { useRoute } from '@react-navigation/native'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'
import { Image } from 'expo-image'
import { HtmlRenderer } from '@shared/components/html-renderer/html-renderer'
import { BookmarkButton } from '@shared/components/bookmark-button/bookmark-button'

export const ArticleScreen = (): JSX.Element => {
  const { params } = useRoute()
  const { redirectId: id } = params as { redirectId: string }
  const { article, refetch } = useArticle({
    id
  })

  return (
    <View className='bg-background dark:bg-background-dark flex-1'>
      <Image
        source={{ uri: article.featuredImage?.node.mediaItemUrl ?? '' }}
        className='w-full h-1/2'
        cachePolicy={'memory-disk'}
      />
      <MotiView
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring'
        }}
        className='px-8 pt-10 bg-background dark:bg-background-dark rounded-t-[40px] flex-1 absolute w-full h-[75%] bottom-0'
      >
        <ScrollRefreshView
          refetch={[refetch]}
          showsVerticalScrollIndicator={false}
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
          <HtmlRenderer htmlString={article.htmlBlocks ?? ''} />
        </ScrollRefreshView>
      </MotiView>
    </View>
  )
}
