import LottieView from 'lottie-react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const HomeScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center'
    >
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200
        }}
        source={require('../../assets/animation.json')}
      />
    </Animated.View>
  )
}
