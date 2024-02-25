import { type SvgProps } from 'react-native-svg'

export interface EnhancedSvgProps extends SvgProps {
  activeTintColor?: string
  inactiveTintColor?: string
  size: number
  focused: boolean
}
