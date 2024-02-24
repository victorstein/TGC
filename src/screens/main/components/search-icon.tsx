import Svg, { Path } from 'react-native-svg'
import { type EnhancedSvgProps } from './svg.types'

const SearchIcon = (props: EnhancedSvgProps): JSX.Element => (
  <Svg fill='none' width={props.size} height={props.size} viewBox='0 0 24 24'>
    <Path
      stroke={props.focused ? props.activeTintColor : props.inactiveTintColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M11.766 20.755a8.989 8.989 0 1 0 0-17.977 8.989 8.989 0 0 0 0 17.977ZM18.018 18.485 21.542 22'
    />
  </Svg>
)
export default SearchIcon
