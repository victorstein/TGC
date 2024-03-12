import LottieView from 'lottie-react-native'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { View } from 'react-native'
// import { MotiView } from 'moti'

export const NotificationAnimation = (): JSX.Element => {
  const colorScheme = mainStore.use.colorScheme()

  return (
    <View className='flex-1 items-center pt-16'>
      {colorScheme === ColorScheme.Light ? (
        <LottieView
          autoPlay
          style={{
            width: 490,
            height: 351
          }}
          hardwareAccelerationAndroid
          source={require('@assets/animations/notification.json')}
        />
      ) : (
        <LottieView
          autoPlay
          style={{
            width: 490,
            height: 351
          }}
          hardwareAccelerationAndroid
          source={require('@assets/animations/notification-dark.json')}
        />
      )}
    </View>
  )
}
