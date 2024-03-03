import LottieView from 'lottie-react-native'
import { useCallback, useEffect, useRef, useState } from 'react'
import Animated, { FadeOut } from 'react-native-reanimated'
import { splashStore } from './store/store'
import { useFonts } from 'expo-font'
import {
  ColorScheme,
  mainStore,
  useMainStoreHydration
} from '@screens/main/store/store'
import * as NativeSplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dialog } from '@rneui/base'
import { Text } from 'react-native'

export const SplashScreen = (): JSX.Element => {
  const setLoadingAnimation = splashStore.use.setLoadingAnimation()
  const loadingAnimation = splashStore.use.loadingAnimation()
  const loadingFonts = splashStore.use.loadingFonts()
  const setLoading = splashStore.use.setLoading()
  const colorScheme = mainStore.use.colorScheme()
  const [animationCounter, setAnimationCounter] = useState(0)
  const animation = useRef<LottieView>(null)
  const setLoadingFonts = splashStore.use.setLoadingFonts()
  const [layoutLoaded, setLayoutLoaded] = useState(false)
  const isStoreHydrated = useMainStoreHydration()
  const [error, setError] = useState<string | null>(null)

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
    AsyncStorage.getItem('app-storage')
      .then((data): void => {
        setError(JSON.stringify(data))
      })
      .catch((e: Error) => {
        setError(e.message)
      })
  }, [])

  useEffect(() => {
    if (fontsLoaded || fontError !== null) {
      setLoadingFonts(false)
    }
  }, [fontsLoaded, fontError, setLoadingFonts])

  const onLayoutRootView = useCallback(() => {
    setLayoutLoaded(true)
    if (isStoreHydrated) {
      NativeSplashScreen.hideAsync().catch(() => {})
    }
  }, [isStoreHydrated])

  useEffect(() => {
    if (layoutLoaded && isStoreHydrated) {
      NativeSplashScreen.hideAsync().catch(() => {})
    }
  }, [layoutLoaded, isStoreHydrated])

  return (
    <>
      <Animated.View
        exiting={FadeOut}
        className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
        onLayout={onLayoutRootView}
      >
        {colorScheme === ColorScheme.Light ? (
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
            source={require('../../assets/animations/splash.json')}
          />
        ) : (
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
            source={require('../../assets/animations/splash-dark.json')}
          />
        )}
      </Animated.View>
      <Dialog isVisible={error !== null} onBackdropPress={() => setError(null)}>
        <Dialog.Title title='Dialog Title' />
        <Text style={{ color: 'white' }}>{error}</Text>
      </Dialog>
    </>
  )
}
