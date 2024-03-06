import { usePosts } from '@screens/home/hooks/use-posts'
import { type CategoryEnum } from '@screens/home/types/home-types'
import MainBanner from '.'
import { Skeleton } from '@rneui/base'
import { AnimatePresence, MotiView } from 'moti'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from '@screens/main/store/store'

export interface IMainBannerWrapperProps {
  categoryName: CategoryEnum
  loading?: boolean
}

const { colors } = theme.extend

export const MainBannerWrapper = ({
  categoryName,
  loading = false
}: IMainBannerWrapperProps): JSX.Element | null => {
  const colorScheme = mainStore.use.colorScheme()
  const { latestPost, loading: internalLoading } = usePosts({
    categoryName
  })

  if (internalLoading || loading) {
    return (
      <AnimatePresence>
        <MotiView
          className='flex flex-1'
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'timing',
            duration: 200
          }}
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
      </AnimatePresence>
    )
  }

  if (latestPost === undefined) {
    return null
  }

  return (
    <MainBanner
      title={latestPost.title ?? ''}
      description={latestPost.excerpt ?? ''}
      bgImageUrl={latestPost.featuredImage?.node.mediaItemUrl ?? ''}
    />
  )
}
