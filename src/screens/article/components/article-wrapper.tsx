import { useMemo, type FC } from 'react'
import { useArticle } from '../hooks/use-article'
import { Article } from './article'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { Dimensions, View } from 'react-native'
import { MotiView } from 'moti'
import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
import { generateSkeletonWidth } from '@shared/utils/generate-skeleting-width'

export interface IArticleWrapperProps {
  articleId: string
}

const { height, width } = Dimensions.get('window')
export const ArticleWrapper: FC<IArticleWrapperProps> = ({ articleId }) => {
  const initialPosition = height * 0.25
  const { article, loading } = useArticle({
    id: articleId
  })

  const skeleton = useMemo(
    () => (
      <>
        <SkeletonComponent height={height / 2} width='100%' />
        <MotiView
          from={{
            opacity: 0,
            transform: [{ translateY: height }]
          }}
          animate={{
            opacity: 1,
            transform: [{ translateY: initialPosition }]
          }}
          transition={{
            type: 'spring'
          }}
          className='bg-background dark:bg-background-dark absolute w-full h-full rounded-t-[40px]'
        >
          <View className='px-8 pt-10 z-10'>
            <View className='items-baseline mb-10'>
              <View className='py-1 rounded-lg mb-4'>
                <SkeletonComponent height={18} width={width * 0.2} />
              </View>
              <View className='flex flex-row mb-2'>
                <SkeletonComponent height={16} width={width * 0.7} />
              </View>
            </View>
            <View>
              {Array.from({ length: 20 }).map((_, index) => (
                <View key={index} className='mb-5'>
                  <SkeletonComponent
                    height={16}
                    width={generateSkeletonWidth(width)}
                  />
                </View>
              ))}
            </View>
          </View>
        </MotiView>
      </>
    ),
    [initialPosition]
  )

  return (
    <>
      <LoadingWrapper loading={loading} skeleton={skeleton}>
        <Article
          category={article.categories?.nodes[0].name ?? ''}
          featuredImage={article.featuredImage?.node.mediaItemUrl ?? ''}
          htmlString={article.htmlBlocks ?? ''}
          title={article.title ?? ''}
        />
      </LoadingWrapper>
    </>
  )
}
