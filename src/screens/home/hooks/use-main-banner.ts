import { type GetMainBanner } from '@integrations/graphql/operations'
import type { ApolloQueryResult } from '@apollo/client'
import { useGetMainBanner } from '../graphql/home.queries.generated'
import { htmlStripper } from '@shared/utils/html-stripper'
import { type CategoryEnum } from '../types/home-types'
import { OrderEnum, PostObjectsConnectionOrderbyEnum } from '@appTypes/schema'

type Post = NonNullable<GetMainBanner['posts']>['nodes'][number]

export interface IUseHomeOutput {
  error?: Error
  loading: boolean
  latestPost?: Post[][0]
  refetch: () => Promise<ApolloQueryResult<GetMainBanner>>
}

export interface IUseHomeInput {
  categoryName?: CategoryEnum
}

export const useMainBanner = ({
  categoryName
}: IUseHomeInput = {}): IUseHomeOutput => {
  const { loading, error, data, refetch } = useGetMainBanner({
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
      excerpt: htmlStripper(String(item.excerpt) ?? '')
    }
  })

  return {
    latestPost: posts[0],
    error,
    loading,
    refetch
  }
}
