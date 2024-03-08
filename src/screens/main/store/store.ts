import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createSelectors } from '../../utils/create-selectors'
import { useEffect, useState } from 'react'

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

export interface IMainStoreGetters {
  colorScheme: ColorScheme
  isConnected: boolean
}

export interface IMainStoreSetters {
  setIsConnected: (connected: boolean) => void
  toggleColorScheme: () => void
  setColorScheme: (colorScheme: ColorScheme) => void
  resetStore: () => void
}

export interface IMainStore extends IMainStoreGetters, IMainStoreSetters {}

const mainStoreInitialState: IMainStoreGetters = {
  colorScheme: ColorScheme.Light,
  isConnected: true
}

export const MainStore = create<IMainStore>()(
  persist(
    (set, get) => ({
      ...mainStoreInitialState,
      toggleColorScheme: () => {
        const colorScheme =
          get().colorScheme === ColorScheme.Light
            ? ColorScheme.Dark
            : ColorScheme.Light
        set((state) => ({
          ...state,
          colorScheme
        }))
      },
      setColorScheme: (colorScheme: ColorScheme) => {
        set((state) => ({
          ...state,
          colorScheme
        }))
      },
      resetStore: () => {
        set(mainStoreInitialState)
      },
      setIsConnected: (connected: boolean) => {
        set((state) => ({
          ...state,
          isConnected: connected
        }))
      }
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        colorScheme: state.colorScheme
      })
    }
  )
)

export const useMainStoreHydration = (): boolean => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsubHydrate = mainStore.persist.onHydrate(() => setHydrated(false))
    const unsubFinishHydration = mainStore.persist.onFinishHydration(() =>
      setHydrated(true)
    )

    setHydrated(mainStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}

export const mainStore = createSelectors(MainStore)
