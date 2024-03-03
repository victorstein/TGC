import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createSelectors } from '../../utils/createSelectors'
import { useEffect, useState } from 'react'

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

export interface IMainStore {
  colorScheme: ColorScheme
  toggleColorScheme: () => void
  setColorScheme: (colorScheme: ColorScheme) => void
  resetStore: () => void
}

const mainStoreInitialState: Pick<IMainStore, 'colorScheme'> = {
  colorScheme: ColorScheme.Light
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
