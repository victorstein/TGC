import { type FC } from 'react'
import { Text, View } from 'react-native'
import { NotificationAnimation } from './components/animation'
// components

const NotificationScreen: FC = () => {
  return (
    <View className='relative bg-background dark:bg-background-dark flex-1'>
      <NotificationAnimation />
      <Text className='text-center font-bold text-2xl leading-[28.8px] text-text-notification-dark px-16 absolute top-96'>
        Sin notificaciones por ahora...
      </Text>
    </View>
  )
}

export default NotificationScreen
