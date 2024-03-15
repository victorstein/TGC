import { type FC } from 'react'
import { View } from 'react-native'
import { useNotifications } from './hooks/use-notifications'
import withApollo from '@integrations/components/with-apollo'
// components

const NotificationScreen: FC = () => {
  const { notifications, loading } = useNotifications()

  console.log('notifications', notifications)
  console.log('loading', loading)
  return <View className='bg-background dark:bg-background-dark flex-1'></View>
}

export default withApollo(NotificationScreen)
