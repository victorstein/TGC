import * as Linking from 'expo-linking'
import { useNavigation } from '@react-navigation/native'
import { NavigationRoutes } from '@screens/home/types/home-types'
import { useEffect } from 'react'

export const useArticleDeepLinking = (): void => {
  const url = Linking.useURL()
  const navigator = useNavigation()

  useEffect(() => {
    if (url !== null) {
      const { path, queryParams } = Linking.parse(url)
      if (path === null || path.includes(NavigationRoutes.ARTICLE) === false) {
        return
      }

      navigator.navigate(NavigationRoutes.HOME, {
        screen: NavigationRoutes.ARTICLE,
        params: queryParams as Record<string, string>
      })
    }
  }, [url, navigator])
}
