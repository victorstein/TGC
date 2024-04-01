import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { useMemo, type FC } from 'react'
import NotificationCard from '../notification-card'
import { useNotifications } from '@screens/notification/hooks/use-notifications'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'
import { AnimatePresence, View } from 'moti'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const elementHeight = 103
export const NotificationWrapper: FC = () => {
  const { notifications, loading, refetch } = useNotifications()

  const Skeleton = useMemo(
    () => (
      <>
        {Array.from({ length: height / elementHeight + 1 }).map((_, index) => (
          <View className='px-4 mt-5 first:mt-10' key={index}>
            <SkeletonComponent width='100%' height={elementHeight} />
          </View>
        ))}
      </>
    ),
    []
  )

  return (
    <ScrollRefreshView refetch={[refetch]}>
      <LoadingWrapper loading={loading} skeleton={Skeleton}>
        <AnimatePresence>
          {Object.entries(notifications).map(([key, notification], index) => (
            <NotificationCard
              delay={index * 100}
              key={key}
              date={notification.date ?? ''}
              photoURL={notification.image ?? ''}
              title={notification.title ?? ''}
              isRead={notification.read}
              redirectId={key}
            />
          ))}
        </AnimatePresence>
      </LoadingWrapper>
    </ScrollRefreshView>
  )
}
