import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const SearchScreen = (): JSX.Element => {
  return (
    <Animated.View
      entering={FadeInDown}
      className='flex-1 items-center justify-center bg-background dark:bg-background-dark'
    >
      <Text>SEARCH screen</Text>
    </Animated.View>
  )
}
