import { createSelectors } from '../../utils/create-selectors'
import { create } from 'zustand'

interface ISplashStore {
  loading: boolean
  loadingFonts: boolean
  loadingAnimation: boolean
  setLoading: (loading: boolean) => void
  setLoadingFonts: (loadingFonts: boolean) => void
  setLoadingAnimation: (loadingAnimation: boolean) => void
}

const SplashStore = create<ISplashStore>()((set) => ({
  loading: true,
  loadingFonts: true,
  loadingAnimation: true,
  setLoading: (loading) => set({ loading }),
  setLoadingFonts: (loadingFonts) => set({ loadingFonts }),
  setLoadingAnimation: (loadingAnimation) => set({ loadingAnimation })
}))

export const splashStore = createSelectors(SplashStore)
