import { useColorScheme } from 'nativewind'
import {
  type ColorScheme,
  mainStore,
  useMainStoreHydration
} from '../store/store'
import { useEffect } from 'react'
import { usePrevious } from '../../utils/usePrevious'

export const useMain = (): null => {
  const setScheme = mainStore.use.setColorScheme()
  const storeColorScheme = mainStore.use.colorScheme()
  const { setColorScheme, colorScheme } = useColorScheme()
  const previousColorScheme = usePrevious(colorScheme)
  const previousStoreColorScheme = usePrevious(storeColorScheme)
  const isStoreHydrated = useMainStoreHydration()

  useEffect(() => {
    if (isStoreHydrated) {
      return
    }

    if (colorScheme !== previousColorScheme) {
      return setScheme(colorScheme as ColorScheme)
    }

    if (storeColorScheme !== previousStoreColorScheme) {
      return setColorScheme(storeColorScheme as ColorScheme)
    }

    if (colorScheme !== storeColorScheme) {
      return setColorScheme(storeColorScheme as ColorScheme)
    }
  }, [
    storeColorScheme,
    setScheme,
    setColorScheme,
    colorScheme,
    previousColorScheme,
    previousStoreColorScheme,
    isStoreHydrated
  ])

  return null
}
