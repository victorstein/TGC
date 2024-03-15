import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { type FC } from 'react'

function withApollo<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType
): FC {
  const client = apolloStore.use.client()

  const withApolloElements = (props: T): JSX.Element => (
    // @ts-expect-error Client is not null Trust me bro!
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  )

  return withApolloElements
}

export default withApollo
