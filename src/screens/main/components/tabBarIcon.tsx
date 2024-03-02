import { type EnhancedSvgProps } from '@shared/components/icons/svg.types'
import { View, AnimatePresence, MotiText } from 'moti'
import { type FC } from 'react'

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
      style={[
        {
          backgroundColor: focused ? 'rgba(233, 0, 100, 0.08)' : 'transparent'
        }
      ]}
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
          <MotiText
            numberOfLines={1}
            className='text-primary font-lato-bold'
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 200, delay: 200 }}
            exit={{ opacity: 0 }}
          >
            {label}
          </MotiText>
        )}
      </AnimatePresence>
    </View>
  )
}
