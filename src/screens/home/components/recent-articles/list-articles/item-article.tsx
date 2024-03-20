import { Button } from '@rneui/base'
import { Image } from 'expo-image'
import { type FC } from 'react'
import { View, Text } from 'react-native'
import { theme } from '@tailwind'
import { useNavigation } from '@react-navigation/native'

const { colors } = theme.extend

export interface IitemArticle {
  title: string
  urlImg: string | any
  subTitle: string
  postId: string
}

const ItemArticle: FC<IitemArticle> = () => {
  const imgRito = require('../../../../../../assets/lolLogo.jpg')
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    navigation.navigate('Articulo', { id: '1' })
  }

  return (
    <View className='mb-[24px] flex flex-row'>
      <Image
        className='w-[110px] h-[110px] mr-[12px] rounded-[24px]'
        source={imgRito}
        cachePolicy='memory-disk'
      />
      <View className='flex flex-col w-full max-w-[68%]'>
        <Text
          numberOfLines={2}
          className='font-lato-bold text-background-dark dark:text-background'
        >
          Riot Games recorta 530 puestos de trabajo y cierra la división
          editorial
        </Text>
        <Text
          numberOfLines={1}
          className='font-lato-regular  text-xs text-text/80 dark:text-text-dark/80 py-2'
        >
          Gaming | 25:30
        </Text>
        <Button
          onPress={() => navigateHandler()}
          title='Leer articulo'
          containerStyle={{
            width: 'auto',
            borderRadius: 50
          }}
          buttonStyle={{
            backgroundColor: `${colors.primary.DEFAULT}`,
            width: '100%',
            maxWidth: '55%',
            borderRadius: 50
          }}
        />
      </View>
    </View>
  )
}

export default ItemArticle
