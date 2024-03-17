import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist'
import { useEffect } from 'react'
import { Constants } from '../shared/constants'
import { apolloStore } from './store/store'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import notification from '@shared/components/notification/hooks/notification'
import { NotificationType } from '@shared/components/notification/store/notification-store'
import ApolloLinkTimeout from 'apollo-link-timeout'
import possibleTypes from './possible-types.json'

const cache = new InMemoryCache({
  possibleTypes
})

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      if (String(error.message).includes('network request failed')) {
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
    notification.show({
      type: NotificationType.Error,
      message: 'Ooops! Algo salió mal 🫠'
    })
  }
  if (
    networkError !== undefined &&
    (!String(networkError).toLowerCase().includes('network request failed') ||
      !String(networkError).toLowerCase().includes('timeout'))
  ) {
    notification.show({
      type: NotificationType.Warning,
      message: 'No hay conexión al servidor 📡'
    })
    console.log(`[Network error]: ${String(networkError)}`)
  }
})

const httpLink = new HttpLink({
  uri: Constants.GRAPHQL_ENDPOINT
})

const timeoutLink = new ApolloLinkTimeout(10000)
const timeoutHttpLink = timeoutLink.concat(httpLink)

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
        link: from([errorLink, retryLink, timeoutHttpLink]),
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
