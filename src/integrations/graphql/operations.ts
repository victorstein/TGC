import * as Types from '@appTypes/schema';

import { gql } from '@apollo/client';
export type GetMainBannerVariables = Types.Exact<{
  input: Types.RootQueryToPostConnectionWhereArgs;
  first: Types.Scalars['Int']['input'];
}>;


export type GetMainBanner = { posts?: { nodes: Array<{ id: string, excerpt?: string | null, title?: string | null, featuredImage?: { node: { mediaItemUrl?: string | null } } | null }> } | null };

type BlockFragment_CoreArchivesBlock = { name: string };

type BlockFragment_CoreAudioBlock = { name: string, attributes?: { src?: string | null, caption?: string | null } | {} | null };

type BlockFragment_CoreAvatarBlock = { name: string };

type BlockFragment_CoreBlock = { name: string };

type BlockFragment_CoreButtonBlock = { name: string };

type BlockFragment_CoreButtonsBlock = { name: string };

type BlockFragment_CoreCalendarBlock = { name: string };

type BlockFragment_CoreCategoriesBlock = { name: string };

type BlockFragment_CoreCodeBlock = { name: string };

type BlockFragment_CoreColumnBlock = { name: string };

type BlockFragment_CoreColumnsBlock = { name: string };

type BlockFragment_CoreCommentAuthorNameBlock = { name: string };

type BlockFragment_CoreCommentContentBlock = { name: string };

type BlockFragment_CoreCommentDateBlock = { name: string };

type BlockFragment_CoreCommentEditLinkBlock = { name: string };

type BlockFragment_CoreCommentReplyLinkBlock = { name: string };

type BlockFragment_CoreCommentTemplateBlock = { name: string };

type BlockFragment_CoreCommentsBlock = { name: string };

type BlockFragment_CoreCommentsPaginationBlock = { name: string };

type BlockFragment_CoreCommentsPaginationNextBlock = { name: string };

type BlockFragment_CoreCommentsPaginationNumbersBlock = { name: string };

type BlockFragment_CoreCommentsPaginationPreviousBlock = { name: string };

type BlockFragment_CoreCommentsTitleBlock = { name: string };

type BlockFragment_CoreCoverBlock = { name: string };

type BlockFragment_CoreDetailsBlock = { name: string };

type BlockFragment_CoreEmbedBlock = { name: string };

type BlockFragment_CoreFileBlock = { name: string };

type BlockFragment_CoreFootnotesBlock = { name: string };

type BlockFragment_CoreFreeformBlock = { name: string };

type BlockFragment_CoreGalleryBlock = { name: string };

type BlockFragment_CoreGroupBlock = { name: string };

type BlockFragment_CoreHeadingBlock = { name: string, attributes?: { content: string } | {} | null };

type BlockFragment_CoreHomeLinkBlock = { name: string };

type BlockFragment_CoreHtmlBlock = { name: string };

type BlockFragment_CoreImageBlock = { name: string, attributes?: { url?: string | null } | {} | null };

type BlockFragment_CoreLatestCommentsBlock = { name: string };

type BlockFragment_CoreLatestPostsBlock = { name: string };

type BlockFragment_CoreLegacyWidgetBlock = { name: string };

type BlockFragment_CoreListBlock = { name: string, innerBlocks?: Array<{ originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null }> | null };

type BlockFragment_CoreListItemBlock = { name: string };

type BlockFragment_CoreLoginoutBlock = { name: string };

type BlockFragment_CoreMediaTextBlock = { name: string };

type BlockFragment_CoreMissingBlock = { name: string };

type BlockFragment_CoreMoreBlock = { name: string };

type BlockFragment_CoreNavigationBlock = { name: string };

type BlockFragment_CoreNavigationLinkBlock = { name: string };

type BlockFragment_CoreNavigationSubmenuBlock = { name: string };

type BlockFragment_CoreNextpageBlock = { name: string };

type BlockFragment_CorePageListBlock = { name: string };

type BlockFragment_CorePageListItemBlock = { name: string };

type BlockFragment_CoreParagraphBlock = { name: string, attributes?: { content: string, anchor?: string | null } | {} | null };

type BlockFragment_CorePatternBlock = { name: string };

type BlockFragment_CorePostAuthorBiographyBlock = { name: string };

type BlockFragment_CorePostAuthorBlock = { name: string };

type BlockFragment_CorePostAuthorNameBlock = { name: string };

type BlockFragment_CorePostCommentsFormBlock = { name: string };

type BlockFragment_CorePostContentBlock = { name: string };

type BlockFragment_CorePostDateBlock = { name: string };

type BlockFragment_CorePostExcerptBlock = { name: string };

type BlockFragment_CorePostFeaturedImageBlock = { name: string };

type BlockFragment_CorePostNavigationLinkBlock = { name: string };

type BlockFragment_CorePostTemplateBlock = { name: string };

type BlockFragment_CorePostTermsBlock = { name: string };

type BlockFragment_CorePostTitleBlock = { name: string };

type BlockFragment_CorePreformattedBlock = { name: string };

type BlockFragment_CorePullquoteBlock = { name: string };

type BlockFragment_CoreQueryBlock = { name: string };

type BlockFragment_CoreQueryNoResultsBlock = { name: string };

type BlockFragment_CoreQueryPaginationBlock = { name: string };

type BlockFragment_CoreQueryPaginationNextBlock = { name: string };

type BlockFragment_CoreQueryPaginationNumbersBlock = { name: string };

type BlockFragment_CoreQueryPaginationPreviousBlock = { name: string };

type BlockFragment_CoreQueryTitleBlock = { name: string };

type BlockFragment_CoreQuoteBlock = { name: string };

type BlockFragment_CoreReadMoreBlock = { name: string };

type BlockFragment_CoreRssBlock = { name: string };

type BlockFragment_CoreSearchBlock = { name: string };

type BlockFragment_CoreSeparatorBlock = { name: string };

type BlockFragment_CoreShortcodeBlock = { name: string };

type BlockFragment_CoreSiteLogoBlock = { name: string };

type BlockFragment_CoreSiteTaglineBlock = { name: string };

type BlockFragment_CoreSiteTitleBlock = { name: string };

type BlockFragment_CoreSocialLinkBlock = { name: string };

type BlockFragment_CoreSocialLinksBlock = { name: string };

type BlockFragment_CoreSpacerBlock = { name: string };

type BlockFragment_CoreTableBlock = { name: string };

type BlockFragment_CoreTagCloudBlock = { name: string };

type BlockFragment_CoreTemplatePartBlock = { name: string };

type BlockFragment_CoreTermDescriptionBlock = { name: string };

type BlockFragment_CoreTextColumnsBlock = { name: string };

type BlockFragment_CoreVerseBlock = { name: string };

type BlockFragment_CoreVideoBlock = { name: string };

type BlockFragment_CoreWidgetGroupBlock = { name: string };

export type BlockFragment = BlockFragment_CoreArchivesBlock | BlockFragment_CoreAudioBlock | BlockFragment_CoreAvatarBlock | BlockFragment_CoreBlock | BlockFragment_CoreButtonBlock | BlockFragment_CoreButtonsBlock | BlockFragment_CoreCalendarBlock | BlockFragment_CoreCategoriesBlock | BlockFragment_CoreCodeBlock | BlockFragment_CoreColumnBlock | BlockFragment_CoreColumnsBlock | BlockFragment_CoreCommentAuthorNameBlock | BlockFragment_CoreCommentContentBlock | BlockFragment_CoreCommentDateBlock | BlockFragment_CoreCommentEditLinkBlock | BlockFragment_CoreCommentReplyLinkBlock | BlockFragment_CoreCommentTemplateBlock | BlockFragment_CoreCommentsBlock | BlockFragment_CoreCommentsPaginationBlock | BlockFragment_CoreCommentsPaginationNextBlock | BlockFragment_CoreCommentsPaginationNumbersBlock | BlockFragment_CoreCommentsPaginationPreviousBlock | BlockFragment_CoreCommentsTitleBlock | BlockFragment_CoreCoverBlock | BlockFragment_CoreDetailsBlock | BlockFragment_CoreEmbedBlock | BlockFragment_CoreFileBlock | BlockFragment_CoreFootnotesBlock | BlockFragment_CoreFreeformBlock | BlockFragment_CoreGalleryBlock | BlockFragment_CoreGroupBlock | BlockFragment_CoreHeadingBlock | BlockFragment_CoreHomeLinkBlock | BlockFragment_CoreHtmlBlock | BlockFragment_CoreImageBlock | BlockFragment_CoreLatestCommentsBlock | BlockFragment_CoreLatestPostsBlock | BlockFragment_CoreLegacyWidgetBlock | BlockFragment_CoreListBlock | BlockFragment_CoreListItemBlock | BlockFragment_CoreLoginoutBlock | BlockFragment_CoreMediaTextBlock | BlockFragment_CoreMissingBlock | BlockFragment_CoreMoreBlock | BlockFragment_CoreNavigationBlock | BlockFragment_CoreNavigationLinkBlock | BlockFragment_CoreNavigationSubmenuBlock | BlockFragment_CoreNextpageBlock | BlockFragment_CorePageListBlock | BlockFragment_CorePageListItemBlock | BlockFragment_CoreParagraphBlock | BlockFragment_CorePatternBlock | BlockFragment_CorePostAuthorBiographyBlock | BlockFragment_CorePostAuthorBlock | BlockFragment_CorePostAuthorNameBlock | BlockFragment_CorePostCommentsFormBlock | BlockFragment_CorePostContentBlock | BlockFragment_CorePostDateBlock | BlockFragment_CorePostExcerptBlock | BlockFragment_CorePostFeaturedImageBlock | BlockFragment_CorePostNavigationLinkBlock | BlockFragment_CorePostTemplateBlock | BlockFragment_CorePostTermsBlock | BlockFragment_CorePostTitleBlock | BlockFragment_CorePreformattedBlock | BlockFragment_CorePullquoteBlock | BlockFragment_CoreQueryBlock | BlockFragment_CoreQueryNoResultsBlock | BlockFragment_CoreQueryPaginationBlock | BlockFragment_CoreQueryPaginationNextBlock | BlockFragment_CoreQueryPaginationNumbersBlock | BlockFragment_CoreQueryPaginationPreviousBlock | BlockFragment_CoreQueryTitleBlock | BlockFragment_CoreQuoteBlock | BlockFragment_CoreReadMoreBlock | BlockFragment_CoreRssBlock | BlockFragment_CoreSearchBlock | BlockFragment_CoreSeparatorBlock | BlockFragment_CoreShortcodeBlock | BlockFragment_CoreSiteLogoBlock | BlockFragment_CoreSiteTaglineBlock | BlockFragment_CoreSiteTitleBlock | BlockFragment_CoreSocialLinkBlock | BlockFragment_CoreSocialLinksBlock | BlockFragment_CoreSpacerBlock | BlockFragment_CoreTableBlock | BlockFragment_CoreTagCloudBlock | BlockFragment_CoreTemplatePartBlock | BlockFragment_CoreTermDescriptionBlock | BlockFragment_CoreTextColumnsBlock | BlockFragment_CoreVerseBlock | BlockFragment_CoreVideoBlock | BlockFragment_CoreWidgetGroupBlock;

export const BlockFragment = gql`
    fragment BlockFragment on Block {
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
    `;
export const GetMainBanner = gql`
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