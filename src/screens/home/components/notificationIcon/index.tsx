import { ColorScheme, mainStore } from '@screens/main/store/store'
import type { FC } from 'react'
import { View, StyleSheet } from 'react-native'
// rneui
import { Avatar, Badge } from '@rneui/themed'
import { theme } from '@tailwind'

const styles = StyleSheet.create({
  bodyStylesAvatar: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    zIndex: 0
  },
  badgeStyles: {
    backgroundColor: 'red',
    borderWidth: 1,
    position: 'absolute',
    top: -32,
    left: 24,
    zIndex: 10
  }
})

const { colors } = theme.extend

const NotificationIcon: FC = () => {
  const coloScheme = mainStore.use.colorScheme()

  return (
    <View className='pr-3 relative'>
      <Avatar
        size={45}
        rounded
        icon={{
          name: 'notifications-outline',
          type: 'ionicon',
          color:
            coloScheme === ColorScheme.Dark
              ? colors.text.dark
              : colors.text.DEFAULT
        }}
        containerStyle={styles.bodyStylesAvatar}
      />
      <Badge
        badgeStyle={{
          ...styles.badgeStyles,
          borderColor:
            coloScheme === ColorScheme.Dark
              ? colors.background.dark
              : colors.background.DEFAULT
        }}
      />
    </View>
  )
}

export default NotificationIcon
