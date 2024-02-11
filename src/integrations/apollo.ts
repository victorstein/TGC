import { ApolloClient, InMemoryCache } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist'
import { useEffect } from 'react'
import { Constants } from '../shared/constants'
import { create } from 'zustand'
import { createSelectors } from '../screens/utils/createSelectors'

const cache = new InMemoryCache()
const persistLayer = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

interface IApolloStore {
  client: ApolloClient<unknown> | null
  setClient: (client: ApolloClient<unknown>) => void
}

const ApolloStore = create<IApolloStore>()((set) => ({
  client: null,
  setClient: (client: ApolloClient<unknown>) => set({ client })
}))

export const apolloStore = createSelectors(ApolloStore)

export const useApolloCachedClient = (): ApolloClient<unknown> | null => {
  const client = apolloStore.use.client()
  const setClient = apolloStore.use.setClient()

  useEffect(() => {
    const init = async (): Promise<void> => {
      await persistLayer.restore()
      const client = new ApolloClient({
        uri: Constants.GRAPHQL_ENDPOINT,
        cache,
        defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } }
      })

      client.onClearStore(async () => {
        await persistLayer.purge()
      })

      setClient(client)
    }

    init().catch((e) => e)
  }, [])

  return client
}
