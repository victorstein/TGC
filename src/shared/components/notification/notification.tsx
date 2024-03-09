import { MotiView } from 'moti'
import { Text } from 'react-native'
import { notificationStore } from './store/notification-store'
import notification from './hooks/notification'
import { useMemo } from 'react'
import { useColorBasedOnBg } from '@shared/hooks/use-color-based-on-bg'
import { ColorScheme } from '@screens/main/store/store'
import { theme } from '@tailwind'

const { colors } = theme.extend

export const Notification = (): JSX.Element => {
  const open = notificationStore.use.open()
  const type = notificationStore.use.type()
  const message = notificationStore.use.message()
  const backgroundColor = useMemo(
    () => notification.getColorBasedOnNotificationType(type),
    [type]
  )

  console.log('backgroundColor', useColorBasedOnBg(backgroundColor))

  return (
    <MotiView
      animate={{
        opacity: open ? 1 : 0,
        height: open ? 28 : 0
      }}
      transition={{ type: 'timing', duration: 100 }}
      className='flex items-center justify-center w-full py-1'
      style={{
        backgroundColor
      }}
    >
      <Text
        className='font-lato-regular text-sm'
        style={{
          color:
            useColorBasedOnBg(backgroundColor) === ColorScheme.Dark
              ? colors.text.DEFAULT
              : colors.text.dark
        }}
      >
        {message}
      </Text>
    </MotiView>
  )
}
