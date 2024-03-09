import { createSelectors } from '@screens/utils/create-selectors'
import { create } from 'zustand'

export interface IHomeGetters {
  isRefreshing: boolean
}

export interface IHomeSetters {
  setIsRefreshing: (isRefreshing: boolean) => void
  resetStore: () => void
}

export interface IHomeStore extends IHomeGetters, IHomeSetters {}

const homeStoreInitialState: IHomeGetters = {
  isRefreshing: false
}

export const HomeStore = create<IHomeStore>((set) => ({
  ...homeStoreInitialState,
  setIsRefreshing: (isRefreshing) => set({ isRefreshing }),
  resetStore: () => set(homeStoreInitialState)
}))

export const homeStore = createSelectors(HomeStore)
