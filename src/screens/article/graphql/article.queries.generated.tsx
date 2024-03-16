import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
import { BlockFragment } from '../../../shared/graphql/fragments/block.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetArticleByIdVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetArticleById = { post?: { title?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null, categories?: { nodes: Array<{ slug?: string | null, name?: string | null, databaseId: number }> } | null, blocks?: Array<{ name: string } | { name: string, attributes?: { src?: string | null, caption?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string, attributes?: { content: string } | {} | null } | { name: string } | { name: string } | { name: string, attributes?: { url?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string, innerBlocks?: Array<{ originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null }> | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string, attributes?: { content: string, anchor?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> | null } | null };


export const GetArticleByIdDocument = gql`
    query getArticleById($id: ID!) {
  post(id: $id) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    categories {
      nodes {
        slug
        name
        databaseId
      }
    }
    title
    blocks {
      ...BlockFragment
    }
  }
}
    ${BlockFragment}`;

/**
 * __useGetArticleById__
 *
 * To run a query within a React component, call `useGetArticleById` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleById` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleById({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleById(baseOptions: Apollo.QueryHookOptions<GetArticleById, GetArticleByIdVariables> & ({ variables: GetArticleByIdVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleById, GetArticleByIdVariables>(GetArticleByIdDocument, options);
      }
export function useGetArticleByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleById, GetArticleByIdVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleById, GetArticleByIdVariables>(GetArticleByIdDocument, options);
        }
export function useGetArticleByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArticleById, GetArticleByIdVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticleById, GetArticleByIdVariables>(GetArticleByIdDocument, options);
        }
export type GetArticleByIdHookResult = ReturnType<typeof useGetArticleById>;
export type GetArticleByIdLazyQueryHookResult = ReturnType<typeof useGetArticleByIdLazyQuery>;
export type GetArticleByIdSuspenseQueryHookResult = ReturnType<typeof useGetArticleByIdSuspenseQuery>;
export type GetArticleByIdQueryResult = Apollo.QueryResult<GetArticleById, GetArticleByIdVariables>;
export function refetchGetArticleById(variables: GetArticleByIdVariables) {
      return { query: GetArticleByIdDocument, variables: variables }
    }