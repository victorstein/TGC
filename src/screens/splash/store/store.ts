import { createSelectors } from '../../../screens/utils/createSelectors'
import { create } from 'zustand'

interface ISplashStore {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const SplashStore = create<ISplashStore>()((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading })
}))

export const splashStore = createSelectors(SplashStore)
