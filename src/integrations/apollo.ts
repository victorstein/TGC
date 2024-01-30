import { ApolloClient, InMemoryCache } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist'
import { useEffect, useState } from 'react'
import { Constants } from '../shared/constants'

const cache = new InMemoryCache()
const persistLayer = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

export const useApolloCachedClient = (): ApolloClient<unknown> | null => {
  const [client, setClient] = useState<ApolloClient<unknown> | null>(null)

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
