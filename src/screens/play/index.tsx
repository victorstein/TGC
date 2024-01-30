import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const PlayScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center'
    >
      <Text>PLAY screen</Text>
    </Animated.View>
  )
}
