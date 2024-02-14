import { ColorScheme, mainStore } from '@screens/main/store/store'
import type { FC } from 'react'
import { View } from 'react-native'
import { Avatar, Badge } from 'react-native-paper'

const NotificationIcon: FC = () => {
  const coloScheme = mainStore.use.colorScheme()

  return (
    <View className='pr-3 relative'>
      <Avatar.Icon
        className='bg-transparent p-0 m-0 z-0'
        color={coloScheme === ColorScheme.Dark ? '#FFFFFF' : '#212121'}
        size={40}
        icon='notifications-outline'
      />
      <Badge
        className='border border-background dark:border-background-dark absolute top-[10px] left-[22px] z-10'
        size={9}
      />
    </View>
  )
}

export default NotificationIcon
