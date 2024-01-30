import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const SearchScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center'
    >
      <Text>SEARCH screen</Text>
    </Animated.View>
  )
}
