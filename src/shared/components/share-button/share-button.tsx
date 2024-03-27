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

export interface IShareCommonProps {
  isIcon?: boolean
  screen: NavigationRoutesNames
  id: string
  message?: string
}
export interface IShareIconProps extends IShareCommonProps {
  isIcon: true
  iconProps?: Omit<IconProps, 'name' | 'type'>
}

export interface IShareAvatarProps extends IShareCommonProps {
  isIcon: false
  avatarProps?: Omit<AvatarProps, 'name' | 'type'>
}

export type TShareButtonProps = IShareIconProps | IShareAvatarProps

export const ShareButton: FC<TShareButtonProps> = ({
  screen,
  id,
  isIcon = false,
  message = 'comparte este artículo con tus amigos y familiares!',
  ...props
}) => {
  const colorScheme = mainStore.use.colorScheme()
  const { iconProps = {} } = props as IShareIconProps
  const { avatarProps = {} } = props as IShareAvatarProps

  const onPress = (): void => {
    const url = Linking.createURL(`/Main/Inicio/${screen}`, {
      queryParams: { id },
      isTripleSlashed: false
    })

    Share.share({
      message: `${message} ${url}`,
      url,
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
