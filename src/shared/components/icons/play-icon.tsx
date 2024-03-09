import Svg, { Path } from 'react-native-svg'
import { type EnhancedSvgProps } from './svg-types'

const PlayIcon = ({
  focused = true,
  ...props
}: EnhancedSvgProps): JSX.Element => (
  <Svg fill='none' width={props.size} height={props.size} viewBox='0 0 24 24'>
    <Path
      stroke={focused ? props.activeTintColor : props.inactiveTintColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12 2.5c5.246 0 9.5 4.253 9.5 9.5s-4.254 9.5-9.5 9.5A9.5 9.5 0 0 1 2.5 12 9.5 9.5 0 0 1 12 2.5Z'
      clipRule='evenodd'
    />
    <Path
      stroke={focused ? props.activeTintColor : props.inactiveTintColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15 11.995c0-.811-4.158-3.406-4.63-2.94-.47.467-.516 5.369 0 5.88.518.512 4.63-2.129 4.63-2.94Z'
      clipRule='evenodd'
    />
  </Svg>
)
export default PlayIcon
