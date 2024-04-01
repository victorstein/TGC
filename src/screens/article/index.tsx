import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ArticleWrapper } from './components/article-wrapper'
import { type NavigationRoutesEnum } from '@screens/home/types/home-types'

export const ArticleScreen = (): JSX.Element => {
  const { params } = useRoute()
  const { id, backScreen } = params as {
    id: string
    backScreen?: NavigationRoutesEnum[keyof NavigationRoutesEnum]
  }

  return (
    <View className='bg-background dark:bg-background-dark flex-1'>
      <ArticleWrapper articleId={id} backScreen={backScreen} />
    </View>
  )
}
