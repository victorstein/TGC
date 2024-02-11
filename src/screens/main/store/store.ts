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
  toggleColorScheme: () => void
  setColorScheme: (colorScheme: ColorScheme) => void
}

export const MainStore = create<IMainStore>()(
  persist(
    (set, get) => ({
      colorScheme: ColorScheme.Light,
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
      }
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export const mainStore = createSelectors(MainStore)
