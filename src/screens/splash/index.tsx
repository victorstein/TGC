import { Text } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

export const SplashScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
    >
      <Text>Splash Screen</Text>
    </Animated.View>
  )
}
