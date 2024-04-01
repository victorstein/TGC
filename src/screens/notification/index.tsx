import { useEffect, type FC } from 'react'
import { View } from 'react-native'
import ApolloWrapper from '@integrations/components/apollo-wrapper'
import { NotificationWrapper } from './components/notification-wrapper'
import { useNavigation } from '@react-navigation/native'

const NotificationScreenComponent: FC = () => {
  const navigation = useNavigation()

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
    <View className='bg-background dark:bg-background-dark flex-1'>
      <NotificationWrapper />
    </View>
  )
}

const NotificationsScreen: FC = () => (
  <ApolloWrapper>
    <NotificationScreenComponent />
  </ApolloWrapper>
)

export default NotificationsScreen
