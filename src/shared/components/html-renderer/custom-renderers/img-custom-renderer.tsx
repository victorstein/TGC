import { Image } from 'expo-image'
import { View } from 'react-native'
import {
  type CustomBlockRenderer,
  useInternalRenderer
} from 'react-native-render-html'

export const ImgRenderer: CustomBlockRenderer = (props) => {
  const { rendererProps } = useInternalRenderer('img', props)

  return (
    <View className='flex-1 h-52'>
      <Image
        source={rendererProps.source.uri}
        alt={rendererProps.alt}
        contentFit='cover'
        contentPosition={'top left'}
        cachePolicy={'memory-disk'}
        className='mb-5 w-full h-auto flex-1'
      />
    </View>
  )
}
