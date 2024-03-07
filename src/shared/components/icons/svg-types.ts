import { type SvgProps } from 'react-native-svg'

export interface EnhancedSvgProps extends Omit<SvgProps, 'color'> {
  activeTintColor?: string
  inactiveTintColor?: string
  size: number
  focused?: boolean
}
