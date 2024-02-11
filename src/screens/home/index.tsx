import LottieView from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Pressable } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const HomeScreen = (): JSX.Element => {
  const { toggleColorScheme } = useColorScheme()

  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
    >
      <Pressable onPress={toggleColorScheme}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200
          }}
          source={require('../../assets/animation.json')}
        />
      </Pressable>
    </Animated.View>
  )
}
