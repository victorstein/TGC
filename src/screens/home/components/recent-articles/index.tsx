// import { LoadingWrapper } from '@shared/components/loading-wrapper/loading-wrapper'
// import { SkeletonComponent } from '@shared/components/skeleton/skeleton-component'
import { type FC } from 'react'
import { Icon } from '@rneui/themed'
import { View, Text, TouchableHighlight } from 'react-native'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import ListArticles from './list-articles'

const { colors } = theme.extend

const RecentArticles: FC = () => {
  const coloScheme = mainStore.use.colorScheme()
  return (
    <View className='bg-background-articles-default dark:bg-background-articles-dark h-full w-full rounded-t-[24px]'>
      <View className='px-4 my-6'>
        <TouchableHighlight
          onPress={() => {}}
          activeOpacity={0.9}
          underlayColor='transparent'
        >
          <View className='mb-6 flex flex-row justify-between items-center'>
            <Text className='font-lato-bold text-lg text-background-dark dark:text-background'>
              Los artículos mas recientes
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
        <ListArticles />
      </View>
    </View>
  )
}

export default RecentArticles
