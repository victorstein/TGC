import Svg, { Path } from 'react-native-svg'
import { type EnhancedSvgProps } from './svg-types'

const BookmarkIcon = ({
  focused = true,
  ...props
}: EnhancedSvgProps): JSX.Element => (
  <Svg
    width={props.size}
    height={props.size}
    fill='none'
    {...props}
    viewBox='0 0 32 32'
  >
    <Path
      fill={focused ? props.activeTintColor : props.inactiveTintColor}
      d='M19.688.75C21.21.75 22.5 2.04 22.5 3.563v25.312c0 1.465-1.582 2.344-2.871 1.64l-8.379-4.921-8.438 4.922C1.524 31.219 0 30.34 0 28.875V3.562A2.813 2.813 0 0 1 2.813.75h16.875Zm0 26.484V3.914c0-.176-.176-.352-.41-.352H3.104c-.175 0-.292.176-.292.352v23.32l8.437-4.922 8.438 4.922Z'
    />
  </Svg>
)

export default BookmarkIcon
