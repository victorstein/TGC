import { type GetPosts } from '@integrations/graphql/operations'
import type { ApolloQueryResult } from '@apollo/client'
import { useGetPosts } from '../graphql/home.queries.generated'
import { htmlStripper } from '@shared/utils/html-stripper'
import { type CategoryEnum } from '../types/home-types'
import { OrderEnum, PostObjectsConnectionOrderbyEnum } from '@appTypes/schema'
import { combineHTMLBlocks } from '@shared/utils/combine-html-blocks'

type Post = NonNullable<GetPosts['posts']>['nodes'][number] & {
  stringifiedBlocks: string
  stringifiedHTMLBlocks: string
}

export interface IUseHomeOutput {
  posts: Post[]
  error?: Error
  loading: boolean
  latestPost?: Post[][0]
  refetch: () => Promise<ApolloQueryResult<GetPosts>>
}

export interface IUseHomeInput {
  categoryName?: CategoryEnum
}

export const usePosts = ({
  categoryName
}: IUseHomeInput = {}): IUseHomeOutput => {
  const { loading, error, data, refetch } = useGetPosts({
    variables: {
      input: {
        categoryName,
        orderby: [
          {
            field: PostObjectsConnectionOrderbyEnum.Date,
            order: OrderEnum.Desc
          }
        ]
      },
      first: 1
    }
  })

  const unParsed = data?.posts?.nodes ?? []

  const posts = unParsed.map((item) => {
    return {
      ...item,
      excerpt: htmlStripper(item.excerpt ?? ''),
      stringifiedBlocks: htmlStripper(combineHTMLBlocks(item.blocks ?? [])),
      stringifiedHTMLBlocks: combineHTMLBlocks(item.blocks ?? [])
    }
  })

  return {
    posts,
    latestPost: posts[0],
    error,
    loading,
    refetch
  }
}
