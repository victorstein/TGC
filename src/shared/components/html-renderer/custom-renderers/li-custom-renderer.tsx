import { Text } from 'react-native'
import type { CustomTextualRenderer } from 'react-native-render-html'

export const LiRenderer: CustomTextualRenderer = ({
  TNodeChildrenRenderer,
  tnode
}) => {
  return (
    <Text className='text-text dark:text-text-dark font-lato-regular mb-4 pl-2'>
      <TNodeChildrenRenderer tnode={tnode} />
    </Text>
  )
}
