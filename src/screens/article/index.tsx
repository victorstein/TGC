import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ArticleWrapper } from './components/article-wrapper'

export const ArticleScreen = (): JSX.Element => {
  const { params } = useRoute()
  const { redirectId: id } = params as { redirectId: string }

  return (
    <View className='bg-background dark:bg-background-dark flex-1'>
      <ArticleWrapper articleId={id} />
    </View>
  )
}
