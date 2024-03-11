import type { FC } from 'react'
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native'
import { type IMainBannerProps } from './main-banner-types'
import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'

const MainBanner: FC<IMainBannerProps> = ({
  title,
  description,
  bgImageUrl,
  redirectId,
  duration
}) => {
  const navigation = useNavigation()

  const navigateHandler = (): void => {
    navigation.navigate('Articulo', { redirectId })
  }

  return (
    <MotiView
      from={{ opacity: 0 }}
      transition={{
        type: 'timing',
        duration: 500
      }}
      exitTransition={{ type: 'timing', duration: 200 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TouchableHighlight
        onPress={navigateHandler}
        activeOpacity={0.9}
        underlayColor='transparent'
      >
        <ImageBackground
          source={{ uri: bgImageUrl }}
          borderRadius={16}
          imageStyle={{ borderRadius: 16 }}
        >
          <View className='p-5 bg-banner-filter/75 rounded-2xl'>
            <Text
              className='text-base leading-6 font-bold text-banner-text mb-2'
              numberOfLines={2}
            >
              {title}
            </Text>
            <Text
              className='text-xs leading-5 font-normal text-banner-text'
              numberOfLines={3}
            >
              {description}
            </Text>
            {duration !== undefined && (
              <Text className='text-xs leading-3 font-normal text-banner-text/50 mt-4'>{`Duration: ${duration} Mins`}</Text>
            )}
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </MotiView>
  )
}

export default MainBanner
