import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMainBannerVariables = Types.Exact<{
  input: Types.RootQueryToPostConnectionWhereArgs;
  first: Types.Scalars['Int']['input'];
}>;


export type GetMainBanner = { posts?: { nodes: Array<{ id: string, excerpt?: string | null, title?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null }> } | null };


export const GetMainBannerDocument = gql`
    query getMainBanner($input: RootQueryToPostConnectionWhereArgs!, $first: Int!) {
  posts(where: $input, first: $first) {
    nodes {
      id
      excerpt
      title
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
 * __useGetMainBanner__
 *
 * To run a query within a React component, call `useGetMainBanner` and pass it any options that fit your needs.
 * When your component renders, `useGetMainBanner` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMainBanner({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetMainBanner(baseOptions: Apollo.QueryHookOptions<GetMainBanner, GetMainBannerVariables> & ({ variables: GetMainBannerVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMainBanner, GetMainBannerVariables>(GetMainBannerDocument, options);
      }
export function useGetMainBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMainBanner, GetMainBannerVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMainBanner, GetMainBannerVariables>(GetMainBannerDocument, options);
        }
export function useGetMainBannerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMainBanner, GetMainBannerVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMainBanner, GetMainBannerVariables>(GetMainBannerDocument, options);
        }
export type GetMainBannerHookResult = ReturnType<typeof useGetMainBanner>;
export type GetMainBannerLazyQueryHookResult = ReturnType<typeof useGetMainBannerLazyQuery>;
export type GetMainBannerSuspenseQueryHookResult = ReturnType<typeof useGetMainBannerSuspenseQuery>;
export type GetMainBannerQueryResult = Apollo.QueryResult<GetMainBanner, GetMainBannerVariables>;
export function refetchGetMainBanner(variables: GetMainBannerVariables) {
      return { query: GetMainBannerDocument, variables: variables }
    }