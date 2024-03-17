import * as Types from '../../../types/schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotificationsVariables = Types.Exact<{ [key: string]: never; }>;


export type Notifications = { notificationCenter?: Array<{ id?: string | null, title?: string | null, excerpt?: string | null, date?: string | null, image?: string | null } | null> | null };


export const NotificationsDocument = gql`
    query notifications {
  notificationCenter {
    id
    title
    excerpt
    date
    image
  }
}
    `;

/**
 * __useNotifications__
 *
 * To run a query within a React component, call `useNotifications` and pass it any options that fit your needs.
 * When your component renders, `useNotifications` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotifications({
 *   variables: {
 *   },
 * });
 */
export function useNotifications(baseOptions?: Apollo.QueryHookOptions<Notifications, NotificationsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Notifications, NotificationsVariables>(NotificationsDocument, options);
      }
export function useNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Notifications, NotificationsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Notifications, NotificationsVariables>(NotificationsDocument, options);
        }
export function useNotificationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Notifications, NotificationsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Notifications, NotificationsVariables>(NotificationsDocument, options);
        }
export type NotificationsHookResult = ReturnType<typeof useNotifications>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsSuspenseQueryHookResult = ReturnType<typeof useNotificationsSuspenseQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<Notifications, NotificationsVariables>;
export function refetchNotifications(variables?: NotificationsVariables) {
      return { query: NotificationsDocument, variables: variables }
    }