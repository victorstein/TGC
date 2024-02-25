import LottieView from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Pressable, View } from 'react-native'
// components
import Header from './components/header'
import SearchBar from '../../shared/components/search-bar'

export const HomeScreen = (): JSX.Element => {
  const { toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1 bg-background dark:bg-background-dark'>
      <Header />
      <View className='px-4'>
        <SearchBar />
      </View>
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
