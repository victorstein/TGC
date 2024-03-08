import { type EnhancedSvgProps } from '@shared/components/icons/svg-types'
import { View, AnimatePresence } from 'moti'
import { type FC } from 'react'
import { Text } from 'react-native'

export interface TabBarIconProps {
  Icon: FC<EnhancedSvgProps>
  focused: boolean
  color: string
  size: number
  label: string
}

export const TabBarIcon: FC<TabBarIconProps> = ({
  focused,
  Icon,
  color,
  size,
  label
}): JSX.Element => {
  return (
    <View
      className='flex flex-row px-8 py-3 rounded-full items-center justify-center'
      style={{
        backgroundColor: focused ? 'rgba(233, 0, 100, 0.08)' : 'transparent'
      }}
    >
      <View className='flex max-h-6 mr-2'>
        <Icon
          size={size}
          focused={focused}
          activeTintColor={color}
          inactiveTintColor={color}
        />
      </View>
      <AnimatePresence>
        {focused && (
          <Text numberOfLines={1} className='text-primary font-lato-bold'>
            {label}
          </Text>
        )}
      </AnimatePresence>
    </View>
  )
}
