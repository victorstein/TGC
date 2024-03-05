import { ScrollView, View } from 'react-native'
// components
import Header from './components/header'
import NotificationCard from './components/notificationCard'
import { TabName } from '@screens/main/home.types'
import SearchBar from '../../shared/components/search-bar'
import HomeTabs from './components/homeTabs'
import MainBanner from './components/mainBanner'

export const HomeScreen = (): JSX.Element => {
  return (
    <ScrollView className='bg-pink-300'>
      <View className='flex-1 bg-background dark:bg-background-dark'>
        <Header />
        <View className='px-4'>
          <SearchBar />
        </View>
        <HomeTabs />
      </View>
      {/* <View>
        {new Array(10).fill(0).map((_, index) => (
          <NotificationCard
            redirect={TabName.SEARCH}
            date='12 de Feb 2023'
            key={`notification-${index}`}
            isRead={false}
            delay={index * 200}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tortor vitae nisi pellentesque, eu posuere erat lobortis. Phasellus auctor ullamcorper risus sed rutrum. Maecenas porttitor eros ipsum, eu aliquet nunc rutrum et.'
            photoURL='https://s3-alpha-sig.figma.com/img/d455/56e1/2924f00073b9f3212b507abc986a7a4d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BcYak7vQ44Q6NwJcvwArd1qlfeXADcGORV7iWTfDjGPyjZlR9eXxXCjrUTHcUFVVFbQc9bRsUH-LKS-n-856LtDDAdEiGChaE0Fv6uKVbC-xuVHpUVpt2cQ5zE6bG7OcDhxScPqdutw-vCJxBykEY7PzVDdEHmSntr03KlELu2K40jy2Eo2aXWLeIubeFSOEiZl3AplNVYpENIuYtAaZO31usc2~SyjmT42HchVIBX6G~~GOYTpyCTiW9wkU5DKaSm3g0Eqdnoq7-z4Cif1xAQtQwyWlxjFtczdvujwZtP0mWfsaTq7RNgzs7qVa-2dcRfwo2~KI2gXMWSRFysQpCw__'
          />
        ))}
      </View> */}
    </ScrollView>
  )
}
