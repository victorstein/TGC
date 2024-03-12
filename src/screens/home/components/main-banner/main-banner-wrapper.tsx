import { usePosts } from '@screens/home/hooks/use-posts'
import { type CategoryEnum } from '@screens/home/types/home-types'
import MainBanner from '.'
import { homeStore } from '@screens/home/store/home-store'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'

export interface IMainBannerWrapperProps {
  categoryName: CategoryEnum
}

export const MainBannerWrapper = ({
  categoryName
}: IMainBannerWrapperProps): JSX.Element | null => {
  const homeLoading = homeStore.use.isRefreshing()
  const { latestPost, loading: internalLoading } = usePosts({
    categoryName
  })

  return (
    <LoadingWrapper
      loading={homeLoading || internalLoading}
      skeleton={<SkeletonComponent height={132} />}
    >
      {latestPost !== undefined && (
        <MainBanner
          key='main-banner'
          title={latestPost?.title ?? ''}
          description={latestPost?.excerpt ?? ''}
          bgImageUrl={latestPost?.featuredImage?.node.mediaItemUrl ?? ''}
        />
      )}
    </LoadingWrapper>
  )
}
