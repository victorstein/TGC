import type { LastPosts } from '@integrations/graphql/operations'
import { useLastPosts } from '../graphql/home.queries.generated'
import { useState, useEffect, useCallback } from 'react'

type Post = NonNullable<LastPosts['posts']>['nodes'][number]

export interface IUsePaginatedPostOutput {
  nextCursor?: string
  hasNextPage: boolean
  posts: Post[]
  error?: Error
  loading: boolean
  isFirtsLoad: boolean
  refetch: () => Promise<void>
  getNextPage: () => void
}

export interface IUsePaginatedPostInput {
  first?: number
}

const usePaginatedPost = ({
  first = 2
}: IUsePaginatedPostInput = {}): IUsePaginatedPostOutput => {
  const [after, setAfter] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])

  const {
    data,
    loading,
    error,
    refetch: refetchApi
  } = useLastPosts({
    variables: {
      after,
      first
    }
  })

  const isFirtsLoad = after === '' && loading === true
  const nextCursor = data?.posts?.pageInfo.endCursor ?? ''
  const hasNextPage = data?.posts?.pageInfo.hasNextPage ?? false

  const getNextPage = (): void => {
    if (hasNextPage === true) setAfter(String(nextCursor))
  }

  const refetch = useCallback(async () => {
    setPosts([])
    setAfter('')
    await refetchApi()
  }, [setPosts, refetchApi])

  useEffect(() => {
    const apiPosts = data?.posts?.nodes ?? []
    if (apiPosts.length > 0) {
      setPosts((lastPost) => [...lastPost, ...apiPosts])
    }
  }, [setPosts, data])

  return {
    isFirtsLoad,
    getNextPage,
    nextCursor,
    hasNextPage,
    refetch,
    posts,
    loading,
    error
  }
}

export default usePaginatedPost
