import { usePosts } from '@screens/home/hooks/use-posts'
import { type CategoryEnum } from '@screens/home/types/home-types'
import MainBanner from '.'
import { Skeleton } from '@rneui/base'
import { AnimatePresence, MotiView } from 'moti'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { homeStore } from '@screens/home/store/home-store'

export interface IMainBannerWrapperProps {
  categoryName: CategoryEnum
}

const { colors } = theme.extend

export const MainBannerWrapper = ({
  categoryName
}: IMainBannerWrapperProps): JSX.Element | null => {
  const colorScheme = mainStore.use.colorScheme()
  const homeLoading = homeStore.use.isRefreshing()
  const { latestPost, loading: internalLoading } = usePosts({
    categoryName
  })

  if (latestPost === undefined) {
    return null
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {internalLoading || homeLoading ? (
        <MotiView
          key='skeleton'
          className='flex flex-1'
          from={{ opacity: 0 }}
          transition={{
            type: 'timing',
            duration: 100
          }}
          exitTransition={{ type: 'timing', duration: 100 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Skeleton
            animation='pulse'
            height={160}
            skeletonStyle={{
              backgroundColor:
                colorScheme === ColorScheme.Dark
                  ? colors.notification.bg.dark
                  : colors.notification.bg.DEFAULT
            }}
            style={{
              borderRadius: 16,
              backgroundColor:
                colorScheme === ColorScheme.Dark
                  ? colors.background['search-dark']
                  : colors.background.search
            }}
          />
        </MotiView>
      ) : (
        <MainBanner
          key='main-banner'
          title={latestPost.title ?? ''}
          description={latestPost.excerpt ?? ''}
          bgImageUrl={latestPost.featuredImage?.node.mediaItemUrl ?? ''}
        />
      )}
    </AnimatePresence>
  )
}
