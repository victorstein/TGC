import { StatusBar } from 'expo-status-bar'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { notificationStore } from '@shared/components/notification/store/notification-store'
import { theme } from '@tailwind'
import notification from '@shared/components/notification/hooks/notification'
import { useColorBasedOnBg } from '@shared/hooks/use-color-based-on-bg'
import { useMemo } from 'react'

export const CustomStatusBar = (): JSX.Element => {
  const notificationOpen = notificationStore.use.open()
  const notificationType = notificationStore.use.type()
  const colorScheme = mainStore.use.colorScheme()

  const computeBackgroundColor: string = useMemo(() => {
    return notificationOpen
      ? notification.getColorBasedOnNotificationType(notificationType)
      : colorScheme === ColorScheme.Dark
        ? theme.extend.colors.background.dark
        : theme.extend.colors.background.DEFAULT
  }, [notificationOpen, notificationType, colorScheme])

  return (
    <StatusBar
      backgroundColor={computeBackgroundColor}
      style={useColorBasedOnBg(computeBackgroundColor)}
      translucent={false}
    />
  )
}
