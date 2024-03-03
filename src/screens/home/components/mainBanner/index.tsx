import type { FC } from 'react'
// components
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native'
import { type IMainBannerProps } from './main-banner.types'
// types or hooks
import { TabName } from '@screens/main/home.types'
import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'

const MainBanner: FC<IMainBannerProps> = ({
  title,
  description,
  bgImageUrl,
  redirectId,
  duration,
  delay = 0
}) => {
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    navigation.navigate(TabName.SEARCH, { redirectId })
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: 'timing',
        duration: 400,
        delay
      }}
    >
      <TouchableHighlight
        onPress={navigateHandler}
        activeOpacity={0.4}
        underlayColor='transparent'
      >
        <ImageBackground
          source={{ uri: bgImageUrl }}
          borderRadius={16}
          imageStyle={{ borderRadius: 16 }}
          className='mx-2 my-4'
        >
          <View className='p-5 bg-banner-filter/75 rounded-2xl'>
            <Text className='text-base leading-6 font-bold text-banner-text mb-2'>
              {title}
            </Text>
            <Text className='text-xs leading-5 font-normal text-banner-text'>
              {description}
            </Text>
            <Text className='text-xs leading-3 font-normal text-banner-text/50 mt-4'>{`Duration: ${duration} Mins`}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </MotiView>
  )
}

export default MainBanner
