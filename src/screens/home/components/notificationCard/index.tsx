import { View, Image, TouchableHighlight, Text } from 'react-native'
import type { FC } from 'react'
import { type IComponentProps } from './notification-card.types'
import { useNavigation } from '@react-navigation/native'
import { TabName } from '@screens/main/home.types'

const NotificationCard: FC<IComponentProps> = ({
  photoURL,
  title,
  date,
  redirect,
  isRead = false
}) => {
  const navigation = useNavigation()

  const redirectHandler = (): void => {
    navigation.navigate(TabName.SEARCH)
  }

  return (
    <TouchableHighlight onPress={redirectHandler}>
      <View className={`w-[375px] p-[16px] border-[0px] border-l-[5px] ${isRead ? 'border-[#FFF] bg-[#FFF]' : 'border-[#D83636] bg-[#EDEDED]'}`}>
        <View className='flex flex-row items-center'>
          <View>
            <Image
              className='w-[70px] h-[70px] rounded-[16px]'
              resizeMode='cover'
              source={{ uri: photoURL }}
            />
          </View>
          <View className='w-[268px] pl-[28px]'>
            <Text className='font-semibold text-[14px] leading-[18px] text-text mb-[10px]'>
              {title}
            </Text>
            <Text className='font-normal text-text/50'>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default NotificationCard
