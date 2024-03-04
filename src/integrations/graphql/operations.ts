import * as Types from '@appTypes/schema';

import { gql } from '@apollo/client';
export type GetPostsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPosts = { posts?: { nodes: Array<{ excerpt?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null, categories?: { nodes: Array<{ slug?: string | null, name?: string | null, databaseId: number }> } | null, blocks?: Array<{ name: string } | { name: string, attributes?: { src?: string | null, caption?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string, attributes?: { content: string, anchor?: string | null } | {} | null } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string } | { name: string }> | null }> } | null };


export const GetPosts = gql`
    query getPosts {
  posts {
    nodes {
      excerpt
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