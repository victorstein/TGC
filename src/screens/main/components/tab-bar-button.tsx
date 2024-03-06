import { MotiView } from 'moti'
import { type FC } from 'react'
import { type BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import { Pressable } from 'react-native'
import { Easing } from 'react-native-reanimated'

export const TabBarButton: FC<BottomTabBarButtonProps> = ({
  ...props
}): JSX.Element => {
  const isFocused = props.accessibilityState?.selected ?? false
  return (
    <MotiView
      animate={{ width: isFocused ? '50%' : '25%' }}
      transition={{
        type: 'timing',
        duration: 200,
        easing: Easing.inOut(Easing.ease)
      }}
    >
      <Pressable {...props} />
    </MotiView>
  )
}
