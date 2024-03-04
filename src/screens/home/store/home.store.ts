import { type GetPosts } from '@integrations/graphql/operations'
import { createSelectors } from '@screens/utils/createSelectors'
import { create } from 'zustand'

interface IHomeStoreGetters {
  data: GetPosts | null
  loading: boolean
  error: Error | null
}

interface IHomeStoreSetters {
  resetStore: () => void
}

interface IHomeStore extends IHomeStoreGetters, IHomeStoreSetters {}

const initialState: IHomeStoreGetters = {
  loading: true,
  data: null,
  error: null
}

const HomeStore = create<IHomeStore>()((set) => ({
  ...initialState,
  resetStore: () => set(initialState)
}))

export const homeStore = createSelectors(HomeStore)
