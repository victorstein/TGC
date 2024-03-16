import { Avatar, type AvatarProps, Icon, type IconProps } from '@rneui/base'
import { Pressable, Share } from 'react-native'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { type FC } from 'react'
import Notification from '../notification/hooks/notification'
import { NotificationType } from '../notification/store/notification-store'
import { type NavigationRoutesNames } from '@screens/home/types/home-types'
import * as Linking from 'expo-linking'

const { colors } = theme.extend

export interface IShareButtonProps {
  isIcon?: boolean
  screen: NavigationRoutesNames
  id: string
  avatarProps?: AvatarProps
  iconProps?: IconProps
}

export const ShareButton: FC<IShareButtonProps> = ({
  screen,
  id,
  isIcon = false,
  avatarProps,
  iconProps
}) => {
  const colorScheme = mainStore.use.colorScheme()

  const onPress = (): void => {
    Share.share({
      message: `comparte este artículo con tus amigos y familiares:
      ${Linking.createURL(`/Main/Inicio/${screen}`, { queryParams: { id } })}`,
      title: 'Compartir artículo'
    }).catch(() => {
      Notification.show({
        message: 'Hubo une error al compartir el artículo',
        type: NotificationType.Error
      })
    })
  }

  const IconComponent: FC = () => (
    <Icon
      name='share-2'
      type='feather'
      size={22}
      color={
        colorScheme === ColorScheme.Dark
          ? colors.background.DEFAULT
          : colors.background.dark
      }
      {...iconProps}
    />
  )

  const AvatarComponent: FC = () => (
    <Avatar
      rounded
      icon={{
        name: 'share-2',
        type: 'feather',
        color: colors.primary.DEFAULT
      }}
      containerStyle={{
        backgroundColor: '#FDEBF3'
      }}
      size={62}
      {...avatarProps}
    />
  )

  return (
    <Pressable onPress={onPress}>
      {isIcon ? <IconComponent /> : <AvatarComponent />}
    </Pressable>
  )
}
