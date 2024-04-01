import { useEffect, type FC } from 'react'
import { View } from 'react-native'
import ApolloWrapper from '@integrations/components/apollo-wrapper'
import { NotificationWrapper } from './components/notification-wrapper'
import { useNavigation } from '@react-navigation/native'
import { useHasUnDismissedNotifications } from '@screens/home/hooks/use-has-un-dismissed-notifications'
import NoNotification from './components/no-notification'

const NotificationScreen: FC = () => {
  const navigation = useNavigation()
  const hasUnDismissedNotifications = useHasUnDismissedNotifications()

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'beforeRemove',
      ({ data, preventDefault }) => {
        if (data.action.type === 'GO_BACK') {
          preventDefault()
          navigation.navigate('Inicio_Stack')
        }
      }
    )

    return unsubscribe
  }, [navigation])

  return (
    <ApolloWrapper>
      <View className='bg-background dark:bg-background-dark flex-1'>
        {hasUnDismissedNotifications ? (
          <NotificationWrapper />
        ) : (
          <NoNotification />
        )}
      </View>
    </ApolloWrapper>
  )
}

export default NotificationScreen
