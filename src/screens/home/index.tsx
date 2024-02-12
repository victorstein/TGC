import LottieView from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Pressable, View, Text } from 'react-native'

export const HomeScreen = (): JSX.Element => {
  const { toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1 items-center justify-center bg-background dark:bg-background-dark'>
      <Pressable onPress={toggleColorScheme}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200
          }}
          source={require('../../assets/animation.json')}
        />
        <Text>perra</Text>
      </Pressable>
    </View>
  )
}
