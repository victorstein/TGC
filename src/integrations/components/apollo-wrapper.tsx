import { ApolloProvider } from '@apollo/client'
import { apolloStore } from '@integrations/store/store'
import { type FC } from 'react'

interface ApolloWrapperProps {
  children: React.ReactNode
}

const ApolloWrapper: FC<ApolloWrapperProps> = ({ children }) => {
  const client = apolloStore.use.client()
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
