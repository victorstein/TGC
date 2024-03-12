import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
export type BlockFragment_CoreArchivesBlock = { name: string };

export type BlockFragment_CoreAudioBlock = { name: string, attributes?: { src?: string | null, caption?: string | null } | {} | null };

export type BlockFragment_CoreAvatarBlock = { name: string };

export type BlockFragment_CoreBlock = { name: string };

export type BlockFragment_CoreButtonBlock = { name: string };

export type BlockFragment_CoreButtonsBlock = { name: string };

export type BlockFragment_CoreCalendarBlock = { name: string };

export type BlockFragment_CoreCategoriesBlock = { name: string };

export type BlockFragment_CoreCodeBlock = { name: string };

export type BlockFragment_CoreColumnBlock = { name: string };

export type BlockFragment_CoreColumnsBlock = { name: string };

export type BlockFragment_CoreCommentAuthorNameBlock = { name: string };

export type BlockFragment_CoreCommentContentBlock = { name: string };

export type BlockFragment_CoreCommentDateBlock = { name: string };

export type BlockFragment_CoreCommentEditLinkBlock = { name: string };

export type BlockFragment_CoreCommentReplyLinkBlock = { name: string };

export type BlockFragment_CoreCommentTemplateBlock = { name: string };

export type BlockFragment_CoreCommentsBlock = { name: string };

export type BlockFragment_CoreCommentsPaginationBlock = { name: string };

export type BlockFragment_CoreCommentsPaginationNextBlock = { name: string };

export type BlockFragment_CoreCommentsPaginationNumbersBlock = { name: string };

export type BlockFragment_CoreCommentsPaginationPreviousBlock = { name: string };

export type BlockFragment_CoreCommentsTitleBlock = { name: string };

export type BlockFragment_CoreCoverBlock = { name: string };

export type BlockFragment_CoreDetailsBlock = { name: string };

export type BlockFragment_CoreEmbedBlock = { name: string };

export type BlockFragment_CoreFileBlock = { name: string };

export type BlockFragment_CoreFootnotesBlock = { name: string };

export type BlockFragment_CoreFreeformBlock = { name: string };

export type BlockFragment_CoreGalleryBlock = { name: string };

export type BlockFragment_CoreGroupBlock = { name: string };

export type BlockFragment_CoreHeadingBlock = { name: string, attributes?: { content: string } | {} | null };

export type BlockFragment_CoreHomeLinkBlock = { name: string };

export type BlockFragment_CoreHtmlBlock = { name: string };

export type BlockFragment_CoreImageBlock = { name: string, attributes?: { url?: string | null } | {} | null };

export type BlockFragment_CoreLatestCommentsBlock = { name: string };

export type BlockFragment_CoreLatestPostsBlock = { name: string };

export type BlockFragment_CoreLegacyWidgetBlock = { name: string };

export type BlockFragment_CoreListBlock = { name: string, innerBlocks?: Array<{ originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null } | { originalContent?: string | null }> | null };

export type BlockFragment_CoreListItemBlock = { name: string };

export type BlockFragment_CoreLoginoutBlock = { name: string };

export type BlockFragment_CoreMediaTextBlock = { name: string };

export type BlockFragment_CoreMissingBlock = { name: string };

export type BlockFragment_CoreMoreBlock = { name: string };

export type BlockFragment_CoreNavigationBlock = { name: string };

export type BlockFragment_CoreNavigationLinkBlock = { name: string };

export type BlockFragment_CoreNavigationSubmenuBlock = { name: string };

export type BlockFragment_CoreNextpageBlock = { name: string };

export type BlockFragment_CorePageListBlock = { name: string };

export type BlockFragment_CorePageListItemBlock = { name: string };

export type BlockFragment_CoreParagraphBlock = { name: string, attributes?: { content: string, anchor?: string | null } | {} | null };

export type BlockFragment_CorePatternBlock = { name: string };

export type BlockFragment_CorePostAuthorBiographyBlock = { name: string };

export type BlockFragment_CorePostAuthorBlock = { name: string };

export type BlockFragment_CorePostAuthorNameBlock = { name: string };

export type BlockFragment_CorePostCommentsFormBlock = { name: string };

export type BlockFragment_CorePostContentBlock = { name: string };

export type BlockFragment_CorePostDateBlock = { name: string };

export type BlockFragment_CorePostExcerptBlock = { name: string };

export type BlockFragment_CorePostFeaturedImageBlock = { name: string };

export type BlockFragment_CorePostNavigationLinkBlock = { name: string };

export type BlockFragment_CorePostTemplateBlock = { name: string };

export type BlockFragment_CorePostTermsBlock = { name: string };

export type BlockFragment_CorePostTitleBlock = { name: string };

export type BlockFragment_CorePreformattedBlock = { name: string };

export type BlockFragment_CorePullquoteBlock = { name: string };

export type BlockFragment_CoreQueryBlock = { name: string };

export type BlockFragment_CoreQueryNoResultsBlock = { name: string };

export type BlockFragment_CoreQueryPaginationBlock = { name: string };

export type BlockFragment_CoreQueryPaginationNextBlock = { name: string };

export type BlockFragment_CoreQueryPaginationNumbersBlock = { name: string };

export type BlockFragment_CoreQueryPaginationPreviousBlock = { name: string };

export type BlockFragment_CoreQueryTitleBlock = { name: string };

export type BlockFragment_CoreQuoteBlock = { name: string };

export type BlockFragment_CoreReadMoreBlock = { name: string };

export type BlockFragment_CoreRssBlock = { name: string };

export type BlockFragment_CoreSearchBlock = { name: string };

export type BlockFragment_CoreSeparatorBlock = { name: string };

export type BlockFragment_CoreShortcodeBlock = { name: string };

export type BlockFragment_CoreSiteLogoBlock = { name: string };

export type BlockFragment_CoreSiteTaglineBlock = { name: string };

export type BlockFragment_CoreSiteTitleBlock = { name: string };

export type BlockFragment_CoreSocialLinkBlock = { name: string };

export type BlockFragment_CoreSocialLinksBlock = { name: string };

export type BlockFragment_CoreSpacerBlock = { name: string };

export type BlockFragment_CoreTableBlock = { name: string };

export type BlockFragment_CoreTagCloudBlock = { name: string };

export type BlockFragment_CoreTemplatePartBlock = { name: string };

export type BlockFragment_CoreTermDescriptionBlock = { name: string };

export type BlockFragment_CoreTextColumnsBlock = { name: string };

export type BlockFragment_CoreVerseBlock = { name: string };

export type BlockFragment_CoreVideoBlock = { name: string };

export type BlockFragment_CoreWidgetGroupBlock = { name: string };

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