import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import type { FC } from 'react'
import NotificationCard from '../notification-card'
import { useNotifications } from '@screens/notification/hooks/use-notifications'
import { ScrollRefreshView } from '@shared/components/scroll-refresh-view'

export const NotificationWrapper: FC = () => {
  const { notifications, loading, refetch } = useNotifications()

  const Skeleton = <SkeletonComponent />

  return (
    <ScrollRefreshView refetch={[refetch]}>
      <LoadingWrapper loading={loading} skeleton={Skeleton}>
        {Object.entries(notifications).map(([key, notification]) => (
          <NotificationCard
            key={key}
            date={notification.date ?? ''}
            photoURL={notification.image ?? ''}
            title={notification.title ?? ''}
            isRead={notification.read}
            redirectId={key}
          />
        ))}
      </LoadingWrapper>
    </ScrollRefreshView>
  )
}
