import type { FC } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from '@rneui/themed'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import { useNavigation } from '@react-navigation/native'
import { TabName } from '@screens/home/types/home-types'
import SimpleCarousel from './simple-carousel'

const SimpleCarrousel: FC = () => {
  const coloScheme = mainStore.use.colorScheme()
  const { colors } = theme.extend
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    navigation.navigate(TabName.SEARCH)
  }

  return (
    <>
      <TouchableHighlight
        onPress={navigateHandler}
        activeOpacity={0.9}
        underlayColor='transparent'
      >
        <View className='mb-4 my-5 mx-2 flex flex-row justify-between items-center'>
          <Text className='font-lato-bold text-lg text-background-dark dark:text-background'>
            Ultimos Podcasts
          </Text>
          <Icon
            size={18}
            type='ionicon'
            name='chevron-forward-outline'
            color={
              coloScheme === ColorScheme.Dark
                ? colors.text.dark
                : colors.text.DEFAULT
            }
          />
        </View>
      </TouchableHighlight>
      <SimpleCarousel />
    </>
  )
}

export default SimpleCarrousel
