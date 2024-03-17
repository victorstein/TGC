import { type FC } from 'react'
import { View } from 'react-native'
import ApolloWrapper from '@integrations/components/apollo-wrapper'
import { NotificationWrapper } from './components/notification-wrapper'
// components

const NotificationScreen: FC = () => {
  return (
    <ApolloWrapper>
      <View className='bg-background dark:bg-background-dark flex-1'>
        <NotificationWrapper />
      </View>
    </ApolloWrapper>
  )
}

export default NotificationScreen
