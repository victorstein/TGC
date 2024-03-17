import type {
  BlockFragment,
  GetArticleById
} from '@integrations/graphql/operations'
import { useGetArticleById } from '../graphql/article.queries.generated'
import { combineHTMLBlocks } from '@shared/utils/combine-html-blocks'
import type { ApolloQueryResult } from '@apollo/client'

export type Article = GetArticleById['post'] & {
  htmlBlocks?: string
}

export interface IUseGetArticleByIdInput {
  id: string
}

export interface IUseGetArticleByIdOutput {
  loading: boolean
  article: Article
  error?: Error
  refetch: () => Promise<ApolloQueryResult<GetArticleById>>
}

export const useArticle = (
  input: IUseGetArticleByIdInput
): IUseGetArticleByIdOutput => {
  const { data, loading, error, refetch } = useGetArticleById({
    variables: { id: input.id }
  })

  const article: Article = data?.post ?? {}

  return {
    article: {
      ...article,
      htmlBlocks: combineHTMLBlocks((article?.blocks ?? []) as BlockFragment[])
    },
    loading,
    error,
    refetch
  }
}
