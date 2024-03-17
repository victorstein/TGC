import { ColorScheme, mainStore } from '@screens/main/store/store'
import type { FC } from 'react'
import { View, StyleSheet } from 'react-native'
// rneui
import { Avatar, Badge } from '@rneui/themed'
import { theme } from '@tailwind'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  badgeStyles: {
    backgroundColor: 'red',
    borderWidth: 1,
    left: 24,
    position: 'absolute',
    top: -32,
    zIndex: 10
  },
  bodyStylesAvatar: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    zIndex: 0
  }
})

const { colors } = theme.extend

const NotificationIcon: FC = () => {
  const navigation = useNavigation()
  const coloScheme = mainStore.use.colorScheme()

  const openNotificationHandler = (): void => {
    navigation.navigate('Notificaciones')
  }

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
        onPress={openNotificationHandler}
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
