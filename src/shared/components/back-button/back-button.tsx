import { useNavigation } from '@react-navigation/native'
import { Avatar, type AvatarProps, Icon, type IconProps } from '@rneui/base'
import { type FC, useCallback } from 'react'
import { theme } from '@tailwind'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { type NavigationRoutesEnum } from '@screens/home/types/home-types'
interface IBaseBackButtonProps {
  onPress?: () => void
  backScreen?: NavigationRoutesEnum[keyof NavigationRoutesEnum]
  isIcon: boolean
}
export interface IIconBackButtonProps extends IBaseBackButtonProps {
  isIcon: true
  iconProps?: Omit<IconProps, 'name' | 'type'>
}

export interface IAvatarBackButtonProps extends IBaseBackButtonProps {
  isIcon: false
  avatarProps?: Omit<AvatarProps, 'name' | 'type'>
}

export type IBackButtonProps = IIconBackButtonProps | IAvatarBackButtonProps

const { colors } = theme.extend

export const BackButton: FC<IBackButtonProps> = ({
  onPress,
  isIcon,
  backScreen,
  ...props
}) => {
  const navigation = useNavigation()
  const colorScheme = mainStore.use.colorScheme()
  const { iconProps = {} } = props as IIconBackButtonProps
  const { avatarProps = {} } = props as IAvatarBackButtonProps

  const handleBack = useCallback(() => {
    backScreen !== undefined
      ? navigation.navigate(backScreen)
      : navigation.goBack()
  }, [navigation, backScreen])

  const AvatarComponent: FC = () => (
    <Avatar
      rounded
      onPress={onPress ?? handleBack}
      icon={{
        name: 'arrow-back',
        type: 'ionicons',
        color: colors.primary.DEFAULT
      }}
      containerStyle={{
        backgroundColor: '#FDEBF3'
      }}
      size={62}
      {...avatarProps}
    />
  )

  const IconComponent: FC = () => (
    <Icon
      name='arrow-back'
      type='ionicons'
      onPress={onPress ?? handleBack}
      size={22}
      color={
        colorScheme === ColorScheme.Dark
          ? colors.background.DEFAULT
          : colors.background.dark
      }
      {...iconProps}
    />
  )

  return <>{isIcon ? <IconComponent /> : <AvatarComponent />}</>
}
