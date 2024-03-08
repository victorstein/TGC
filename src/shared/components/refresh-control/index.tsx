import { type FC } from 'react'
import { RefreshControl, type RefreshControlProps } from 'react-native'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'

const { colors } = theme.extend

export const RefreshIndicator: FC<RefreshControlProps> = (props) => {
  const colorScheme = mainStore.use.colorScheme()

  return (
    <RefreshControl
      onRefresh={props.onRefresh}
      colors={
        colorScheme === ColorScheme.Light
          ? [colors.primary.DEFAULT]
          : [colors.primary.dark]
      }
      progressBackgroundColor={
        colorScheme === ColorScheme.Light
          ? colors.background.DEFAULT
          : colors.background.dark
      }
      {...props}
      refreshing={props.refreshing}
    />
  )
}
