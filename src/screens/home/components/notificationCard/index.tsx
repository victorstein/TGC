import { View, Image, TouchableHighlight, Text } from 'react-native'
import type { FC } from 'react'
import { type IComponentProps } from './notification-card.types'
import { useNavigation } from '@react-navigation/native'

const NotificationCard: FC<IComponentProps> = ({
  photoURL,
  title,
  date,
  redirect,
  isRead = false
}) => {
  const navigation = useNavigation()

  const redirectHandler = (): void => {
    navigation.navigate(redirect)
  }

  return (
    <TouchableHighlight onPress={redirectHandler} className='mx-2'>
      <View
        className={`w-full p-4 border-none border-l-[5px] ${isRead ? 'border-notification-bg-visited dark:border-notification-bg-visited-dark bg-notification-bg-visited dark:bg-notification-bg-visited-dark' : 'border-notification-border-new bg-notification-bg dark:bg-notification-bg-dark'}`}
      >
        <View className='flex flex-row items-center'>
          <View className='w-1/4'>
            <Image
              className='w-[70px] h-[70px] rounded-2xl'
              resizeMode='cover'
              source={{ uri: photoURL }}
            />
          </View>
          <View className='w-3/4'>
            <Text numberOfLines={2} className='font-semibold text-sm leading-5 text-text mb-3 dark:text-text-dark'>
              {title}
            </Text>
            <Text className='font-normal text-text/50 dark:text-text-notification-dark'>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default NotificationCard
