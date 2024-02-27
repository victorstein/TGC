import LottieView from 'lottie-react-native'
import { useColorScheme } from 'nativewind'
import { Pressable, View } from 'react-native'
import Header from './components/header'
import NotificationCard from './components/notificationCard'
import { TabName } from '@screens/main/home.types'

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
        <NotificationCard
          redirect={TabName.SEARCH}
          date='12 de Feb 2023'
          isRead={false}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tortor vitae nisi pellentesque, eu posuere erat lobortis. Phasellus auctor ullamcorper risus sed rutrum. Maecenas porttitor eros ipsum, eu aliquet nunc rutrum et.'
          photoURL='https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=contain%2Cheight=240%2Cq=99%2Csharpen=1%2Cwidth=240/wp-content/uploads/something.png'
        />
      </View>
    </View>
  )
}
