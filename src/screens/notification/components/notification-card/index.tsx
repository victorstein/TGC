import { View, TouchableHighlight, Text } from 'react-native'
import type { FC } from 'react'
import { type INotificationCardProps } from './notification-card-types'
import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'
import { Image } from 'expo-image'
import { notificationStore } from '@screens/notification/store/store'
import { NavigationRoutes } from '@screens/home/types/home-types'
import { Icon } from '@rneui/base'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from '@screens/main/store/store'

const { colors } = theme.extend

const NotificationCard: FC<INotificationCardProps> = ({
  photoURL,
  title,
  date,
  redirectId,
  isRead = false,
  delay = 0
}) => {
  const navigation = useNavigation()
  const colorScheme = mainStore.use.colorScheme()
  const setRead = notificationStore.use.setRead()
  const setDismissed = notificationStore.use.setDismissed()

  const redirectHandler = (): void => {
    setRead(redirectId)
    navigation.navigate(NavigationRoutes.ARTICLE, {
      id: redirectId,
      backScreen: NavigationRoutes.NOTIFICATIONS
    })
  }

  const dismissNotification = (): void => {
    setDismissed(redirectId)
  }

  return (
    <MotiView
      key={redirectId}
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
      exit={{
        opacity: 0,
        translateX: 100
      }}
      exitTransition={{
        type: 'timing',
        duration: 200
      }}
    >
      <TouchableHighlight onPress={redirectHandler} className='mx-2'>
        <View
          className={`w-full py-4 pl-4 border-none border-l-[5px] ${isRead ? 'border-notification-bg-visited dark:border-notification-bg-visited-dark bg-notification-bg-visited dark:bg-notification-bg-visited-dark' : 'border-notification-border-new bg-notification-bg dark:bg-notification-bg-dark'}`}
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
            <View className='flex w-3/4 flex-row'>
              <View className='flex flex-1'>
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
              <View
                collapsable={false}
                className='flex px-5 justify-center items-end'
              >
                <Icon
                  type='antdesign'
                  name='closecircleo'
                  onPress={dismissNotification}
                  color={
                    colorScheme === ColorScheme.Dark
                      ? colors.text.dark
                      : colors.text.DEFAULT
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </MotiView>
  )
}

export default NotificationCard
