import * as Types from '@appTypes/schema';

import { gql } from '@apollo/client';
export type GetPostsVariables = Types.Exact<{
  input: Types.RootQueryToPostConnectionWhereArgs;
  first: Types.Scalars['Int']['input'];
}>;


export type GetPosts = { posts?: { nodes: Array<{ excerpt?: string | null, title?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null, categories?: { nodes: Array<{ slug?: string | null, name?: string | null, databaseId: number }> } | null, blocks?: Array<{ name: string } | { name: string, attributes?: { src?: string | null, caption?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string, attributes?: { content: string } | {} | null } | { name: string } | { name: string } | { name: string, attributes?: { url?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string, innerBlocks?: Array<{ originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null }> | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string, attributes?: { content: string, anchor?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> | null }> } | null };


export const GetPosts = gql`
    query getPosts($input: RootQueryToPostConnectionWhereArgs!, $first: Int!) {
  posts(where: $input, first: $first) {
    nodes {
      excerpt
      title
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
      blocks {
        name
        ... on CoreAudioBlock {
          attributes {
            ... on CoreAudioBlockAttributes {
              src
              caption
            }
          }
        }
        ... on CoreHeadingBlock {
          attributes {
            ... on CoreHeadingBlockAttributes {
              content
            }
          }
        }
        ... on CoreListBlock {
          innerBlocks {
            originalContent
          }
        }
        ... on CoreImageBlock {
          attributes {
            ... on CoreImageBlockAttributes {
              url
            }
          }
        }
        ... on CoreParagraphBlock {
          attributes {
            ... on CoreParagraphBlockAttributes {
              content
              anchor
            }
          }
        }
      }
    }
  }
}
    `;