import { type ApolloClient } from '@apollo/client'
import { createSelectors } from '../../screens/utils/create-selectors'
import { create } from 'zustand'

interface IApolloStoreGetters {
  client: ApolloClient<unknown>
}

interface IApolloStoreSetters {
  setClient: (client: ApolloClient<unknown>) => void
}
interface IApolloStore extends IApolloStoreGetters, IApolloStoreSetters {}

const initialState: IApolloStoreGetters = {
  client: {} as ApolloClient<unknown>
}

const ApolloStore = create<IApolloStore>()((set) => ({
  ...initialState,
  setClient: (client: ApolloClient<unknown>) => set({ client })
}))

export const apolloStore = createSelectors(ApolloStore)
