import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostsVariables = Types.Exact<{
  input: Types.RootQueryToPostConnectionWhereArgs;
  first: Types.Scalars['Int']['input'];
}>;


export type GetPosts = { posts?: { nodes: Array<{ id: string, excerpt?: string | null, title?: string | null, date?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null }> } | null };


export const GetPostsDocument = gql`
    query getPosts($input: RootQueryToPostConnectionWhereArgs!, $first: Int!) {
  posts(where: $input, first: $first) {
    nodes {
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
  }
}
    `;

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