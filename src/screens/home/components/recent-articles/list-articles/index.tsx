import { type FC } from 'react'
import { View } from 'react-native'
import ItemArticle, { type IitemArticle } from './item-article'
import ItemArticleSkeleton from './item-article-skeleton'

const ListArticles: FC = () => {
  const imgRito = require('../../../../../../assets/lolLogo.jpg')

  const listArticle: IitemArticle[] = [
    {
      postId: '1',
      subTitle: ' Gaming | 25:30',
      title:
        'Riot Games recorta 530 puestos de trabajo y cierra la división editorial',
      urlImg: imgRito
    },
    {
      postId: '2',
      subTitle: ' Gaming | 25:30',
      title:
        'Riot Games recorta 530 puestos de trabajo y cierra la división editorial',
      urlImg: imgRito
    },
    {
      postId: '3',
      subTitle: ' Gaming | 25:30',
      title:
        'Riot Games recorta 530 puestos de trabajo y cierra la división editorial',
      urlImg: imgRito
    }
  ]

  return (
    <View className='flex flex-col'>
      {listArticle.map((value: IitemArticle, key: number) => (
        <ItemArticle {...value} key={key} />
      ))}
      <ItemArticleSkeleton />
    </View>
  )
}

export default ListArticles
