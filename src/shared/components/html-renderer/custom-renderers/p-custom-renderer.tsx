import { Text } from 'react-native'
import type { CustomTextualRenderer } from 'react-native-render-html'

export const PRenderer: CustomTextualRenderer = ({
  TNodeChildrenRenderer,
  tnode
}) => {
  return (
    <Text className='text-text dark:text-text-dark font-lato-regular mb-4 leading-5'>
      <TNodeChildrenRenderer tnode={tnode} />
    </Text>
  )
}
