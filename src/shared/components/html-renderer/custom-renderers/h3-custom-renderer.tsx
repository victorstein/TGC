import { Text } from 'react-native'
import type { CustomTextualRenderer } from 'react-native-render-html'

export const H3Renderer: CustomTextualRenderer = ({
  TNodeChildrenRenderer,
  tnode
}) => {
  return (
    <Text className='text-text dark:text-text-dark font-lato-bold mb-4 leading-5'>
      <TNodeChildrenRenderer tnode={tnode} />
    </Text>
  )
}
