import LottieView from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Pressable, View } from 'react-native'
import Header from './components/header'

export const HomeScreen = (): JSX.Element => {
  const { toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1 bg-background dark:bg-background-dark'>
      <Header />
      <View className='flex-1 items-center justify-center'>
        <Pressable onPress={toggleColorScheme}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200
            }}
            source={require('@assets/animations/animation.json')}
          />
        </Pressable>
      </View>
    </View>
  )
}
