import { View, TouchableHighlight, Text } from 'react-native'
import type { FC } from 'react'
import { type INotificationCardProps } from './notification-card-types'
import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'
import { Image } from 'expo-image'

const NotificationCard: FC<INotificationCardProps> = ({
  photoURL,
  title,
  date,
  redirectId,
  isRead = false,
  delay = 0
}) => {
  const navigation = useNavigation()

  const redirectHandler = (): void => {
    navigation.navigate('Articulo', { id: redirectId })
  }

  return (
    <MotiView
      from={{
        opacity: 0,
        translateX: -10
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      transition={{
        type: 'timing',
        duration: 200,
        delay
      }}
    >
      <TouchableHighlight onPress={redirectHandler} className='mx-2'>
        <View
          className={`w-full p-4 border-none border-l-[5px] ${isRead ? 'border-notification-bg-visited dark:border-notification-bg-visited-dark bg-notification-bg-visited dark:bg-notification-bg-visited-dark' : 'border-notification-border-new bg-notification-bg dark:bg-notification-bg-dark'}`}
        >
          <View className='flex flex-row items-center'>
            <View className='w-1/4'>
              <Image
                className='w-[70px] h-[70px] rounded-2xl'
                contentFit='cover'
                cachePolicy='memory-disk'
                source={{ uri: photoURL }}
              />
            </View>
            <View className='w-3/4'>
              <Text
                numberOfLines={2}
                className='font-semibold text-sm leading-5 text-text mb-3 dark:text-text-dark'
              >
                {title}
              </Text>
              <Text className='font-normal text-text/50 dark:text-text-notification-dark'>
                {date}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </MotiView>
  )
}

export default NotificationCard
