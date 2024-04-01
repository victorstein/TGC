import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SimplifiedPost = { id: string, excerpt?: string | null, title?: string | null, date?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null };

export type GetPostsVariables = Types.Exact<{
  input: Types.RootQueryToPostConnectionWhereArgs;
  first: Types.Scalars['Int']['input'];
}>;


export type GetPosts = { posts?: { nodes: Array<{ id: string, excerpt?: string | null, title?: string | null, date?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null }> } | null };

export type LastPostsVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type LastPosts = { posts?: { pageInfo: { endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ id: string, excerpt?: string | null, title?: string | null, date?: string | null, categories?: { nodes: Array<{ name?: string | null }> } | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null }> } | null };

export const SimplifiedPost = gql`
    fragment simplifiedPost on Post {
  id
  excerpt
  title
  date
  featuredImage {
    node {
      mediaItemUrl
    }
  }
}
    `;
export const GetPostsDocument = gql`
    query getPosts($input: RootQueryToPostConnectionWhereArgs!, $first: Int!) {
  posts(where: $input, first: $first) {
    nodes {
      ...simplifiedPost
    }
  }
}
    ${SimplifiedPost}`;

/**
 * __useGetPosts__
 *
 * To run a query within a React component, call `useGetPosts` and pass it any options that fit your needs.
 * When your component renders, `useGetPosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPosts({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPosts(baseOptions: Apollo.QueryHookOptions<GetPosts, GetPostsVariables> & ({ variables: GetPostsVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPosts, GetPostsVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPosts, GetPostsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPosts, GetPostsVariables>(GetPostsDocument, options);
        }
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPosts, GetPostsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPosts, GetPostsVariables>(GetPostsDocument, options);
        }
export type GetPostsHookResult = ReturnType<typeof useGetPosts>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPosts, GetPostsVariables>;
export function refetchGetPosts(variables: GetPostsVariables) {
      return { query: GetPostsDocument, variables: variables }
    }
export const LastPostsDocument = gql`
    query lastPosts($after: String, $first: Int) {
  posts(first: $first, after: $after, where: {orderby: {field: DATE, order: ASC}}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...simplifiedPost
      categories {
        nodes {
          name
        }
      }
    }
  }
}
    ${SimplifiedPost}`;

/**
 * __useLastPosts__
 *
 * To run a query within a React component, call `useLastPosts` and pass it any options that fit your needs.
 * When your component renders, `useLastPosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastPosts({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useLastPosts(baseOptions?: Apollo.QueryHookOptions<LastPosts, LastPostsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastPosts, LastPostsVariables>(LastPostsDocument, options);
      }
export function useLastPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastPosts, LastPostsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastPosts, LastPostsVariables>(LastPostsDocument, options);
        }
export function useLastPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LastPosts, LastPostsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LastPosts, LastPostsVariables>(LastPostsDocument, options);
        }
export type LastPostsHookResult = ReturnType<typeof useLastPosts>;
export type LastPostsLazyQueryHookResult = ReturnType<typeof useLastPostsLazyQuery>;
export type LastPostsSuspenseQueryHookResult = ReturnType<typeof useLastPostsSuspenseQuery>;
export type LastPostsQueryResult = Apollo.QueryResult<LastPosts, LastPostsVariables>;
export function refetchLastPosts(variables?: LastPostsVariables) {
      return { query: LastPostsDocument, variables: variables }
    }