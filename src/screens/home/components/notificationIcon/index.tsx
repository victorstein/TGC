import { ColorScheme, mainStore } from '@screens/main/store/store'
import type { FC } from 'react'
import { View, StyleSheet } from 'react-native'
// rneui
import { Avatar, Badge } from '@rneui/themed'

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
          color: coloScheme === ColorScheme.Dark ? '#FFFFFF' : '#212121'
        }}
        containerStyle={styles.bodyStylesAvatar}
      />
      <Badge
        badgeStyle={{
          ...styles.badgeStyles,
          borderColor: coloScheme === ColorScheme.Dark ? '#212121' : '#FFFFFF'
        }}
      />
    </View>
  )
}

export default NotificationIcon
