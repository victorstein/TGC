import LottieView from 'lottie-react-native'
import { useRef, useState } from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { splashStore } from './store/store'

export const SplashScreen = (): JSX.Element => {
  const setLoading = splashStore.use.setLoading()
  const [animationCounter, setAnimationCounter] = useState(0)
  const animation = useRef<LottieView>(null)

  const playLoading = (): void => {
    if (animationCounter > 0) {
      setLoading(false)
    }

    if (animation.current !== null) {
      animation.current.play(74, 105)
      return setAnimationCounter(animationCounter + 1)
    }
  }

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
    >
      <LottieView
        autoPlay
        style={{
          width: 450,
          height: 450
        }}
        hardwareAccelerationAndroid
        loop={false}
        onAnimationFinish={playLoading}
        ref={animation}
        source={require('../../assets/splash.json')}
      />
    </Animated.View>
  )
}
