import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const SplashScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
    >
      <Text>Splash Screen</Text>
    </Animated.View>
  )
}
