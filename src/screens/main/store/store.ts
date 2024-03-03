import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createSelectors } from '../../utils/createSelectors'

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

export interface IMainStore {
  colorScheme: ColorScheme
  storeHydrated: boolean
  toggleColorScheme: () => void
  setColorScheme: (colorScheme: ColorScheme) => void
  setStoreHydrated: (storeHydrated: boolean) => void
  resetStore: () => void
}

const mainStoreInitialState: Pick<IMainStore, 'colorScheme' | 'storeHydrated'> =
  {
    colorScheme: ColorScheme.Light,
    storeHydrated: false
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
      setStoreHydrated: (storeHydrated: boolean) => {
        set((state) => ({
          ...state,
          storeHydrated
        }))
      },
      resetStore: () => {
        set(mainStoreInitialState)
      }
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (state) => {
        console.log('state BEFORE hydration:', state)
        return () => {
          state.setStoreHydrated(true)
        }
      }
    }
  )
)

export const mainStore = createSelectors(MainStore)
