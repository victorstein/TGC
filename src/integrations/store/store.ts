import { type ApolloClient } from '@apollo/client'
import { createSelectors } from '../../screens/utils/createSelectors'
import { create } from 'zustand'

interface IApolloStore {
  client: ApolloClient<unknown> | null
  setClient: (client: ApolloClient<unknown>) => void
}

const ApolloStore = create<IApolloStore>()((set) => ({
  client: null,
  setClient: (client: ApolloClient<unknown>) => set({ client })
}))

export const apolloStore = createSelectors(ApolloStore)
