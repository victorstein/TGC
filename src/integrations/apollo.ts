import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist'
import { useEffect } from 'react'
import { Constants } from '../shared/constants'
import { apolloStore } from './store/store'
import { onError } from '@apollo/client/link/error'
import Toast from 'react-native-toast-message'
import { RetryLink } from '@apollo/client/link/retry'

const cache = new InMemoryCache()

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      if (String(error.message).includes('failed to fetch')) {
        return true
      }
      return false
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors !== undefined) {
    for (const { message, locations, path } of graphQLErrors) {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${String(locations)}, Path: ${String(path)}`
      )
    }
    Toast.show({
      type: 'error',
      text1: 'Ooops! Algo salió mal 🫠'
    })
  }
  if (networkError !== undefined) {
    Toast.show({
      type: 'warning',
      text1: 'No hay conexión al servidor 📡',
      swipeable: true
    })
    console.log(`[Network error]: ${String(networkError)}`)
  }
})

const httpLink = new HttpLink({
  uri: Constants.GRAPHQL_ENDPOINT
})

const persistLayer = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage)
})

export const useApolloCachedClient = (): ApolloClient<unknown> | null => {
  const client = apolloStore.use.client()
  const setClient = apolloStore.use.setClient()

  useEffect(() => {
    const init = async (): Promise<void> => {
      await persistLayer.restore()
      const client = new ApolloClient({
        link: from([errorLink, retryLink, httpLink]),
        cache,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-and-network'
          }
        }
      })

      client.onClearStore(async () => {
        await persistLayer.purge()
      })

      setClient(client)
    }

    init().catch((e) => e)
  }, [setClient])

  return client
}
