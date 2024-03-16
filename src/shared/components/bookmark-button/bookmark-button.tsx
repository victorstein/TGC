import { Pressable, View } from 'react-native'
import BookmarkIcon from '../icons/bookmark-icon'
import { theme } from '@tailwind'

const { colors } = theme.extend

export interface IBookmarkButtonProps {
  size?: number
  color?: string
}

export const BookmarkButton = ({
  size = 24,
  color = colors.primary.DEFAULT
}: IBookmarkButtonProps): JSX.Element => {
  return (
    <Pressable>
      <View className='p-5'>
        <BookmarkIcon activeTintColor={color} size={size} />
      </View>
    </Pressable>
  )
}
