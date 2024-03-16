import { type GetPosts } from '@integrations/graphql/operations'
import type { ApolloQueryResult } from '@apollo/client'
import { useGetPosts } from '../graphql/home.queries.generated'
import { htmlStripper } from '@shared/utils/html-stripper'
import { type CategoryEnum } from '../types/home-types'
import { OrderEnum, PostObjectsConnectionOrderbyEnum } from '@appTypes/schema'

type Post = NonNullable<GetPosts['posts']>['nodes'][number]

export interface IUseHomeOutput {
  posts: Post[]
  error?: Error
  loading: boolean
  latestPost?: Post[][0]
  refetch: () => Promise<ApolloQueryResult<GetPosts>>
}

export interface IUseHomeInput {
  categoryName?: CategoryEnum
  first?: number
}

export const usePosts = ({
  categoryName,
  first = 1
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
      first
    }
  })

  const unParsed = data?.posts?.nodes ?? []

  const [latestPost, ...posts] = unParsed.map((item) => {
    return {
      ...item,
      excerpt: htmlStripper(String(item.excerpt) ?? '')
    }
  })

  return {
    posts,
    latestPost,
    error,
    loading,
    refetch
  }
}
