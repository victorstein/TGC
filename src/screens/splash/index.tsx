import LottieView from 'lottie-react-native'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FadeOut } from 'react-native-reanimated'
import { splashStore } from './store/store'
import { useFonts } from 'expo-font'
import {
  ColorScheme,
  mainStore,
  useMainStoreHydration
} from '@screens/main/store/store'
import * as NativeSplashScreen from 'expo-splash-screen'
import { MotiView } from 'moti'
import { theme } from '@tailwind'

const { colors } = theme.extend

export const SplashScreen = (): JSX.Element | null => {
  const setLoadingAnimation = splashStore.use.setLoadingAnimation()
  const loadingAnimation = splashStore.use.loadingAnimation()
  const loadingFonts = splashStore.use.loadingFonts()
  const setLoading = splashStore.use.setLoading()
  const colorScheme = mainStore.use.colorScheme()
  const [animationCounter, setAnimationCounter] = useState(0)
  const animation = useRef<LottieView>(null)
  const setLoadingFonts = splashStore.use.setLoadingFonts()
  const isStoreHydrated = useMainStoreHydration()

  useEffect(() => {
    if (!loadingAnimation && !loadingFonts) {
      setLoading(false)
    }
  }, [loadingAnimation, loadingFonts, setLoading])

  const playLoading = (): void => {
    if (animationCounter > 0) {
      setLoadingAnimation(false)
    }

    if (animation.current !== null) {
      animation.current.play(74, 105)
      return setAnimationCounter(animationCounter + 1)
    }
  }

  const [fontsLoaded, fontError] = useFonts({
    'lato-bold': require('@assets/fonts/lato-bold.ttf'),
    'lato-extra-bold': require('@assets/fonts/lato-extra-bold.ttf'),
    'lato-medium': require('@assets/fonts/lato-medium.ttf'),
    'lato-regular': require('@assets/fonts/lato-regular.ttf'),
    'lato-semibold': require('@assets/fonts/lato-semi-bold.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || fontError !== null) {
      setLoadingFonts(false)
    }
  }, [fontsLoaded, fontError, setLoadingFonts])

  const onAnimationLoaded = useCallback(() => {
    NativeSplashScreen.hideAsync().catch(() => {})
  }, [])

  if (!isStoreHydrated) {
    return null
  }

  return (
    <>
      <MotiView
        exiting={FadeOut}
        from={{
          backgroundColor: colors.background.DEFAULT
        }}
        transition={{ type: 'timing', duration: 200 }}
        animate={{
          backgroundColor:
            colorScheme === ColorScheme.Dark
              ? colors.background.dark
              : colors.background.DEFAULT
        }}
        className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
      >
        {colorScheme === ColorScheme.Light ? (
          <LottieView
            onLayout={onAnimationLoaded}
            autoPlay
            style={{
              width: 450,
              height: 450
            }}
            hardwareAccelerationAndroid
            loop={false}
            onAnimationFinish={playLoading}
            ref={animation}
            source={require('../../assets/animations/splash.json')}
          />
        ) : (
          <LottieView
            onLayout={onAnimationLoaded}
            autoPlay
            style={{
              width: 450,
              height: 450
            }}
            hardwareAccelerationAndroid
            loop={false}
            onAnimationFinish={playLoading}
            ref={animation}
            source={require('../../assets/animations/splash-dark.json')}
          />
        )}
      </MotiView>
    </>
  )
}
