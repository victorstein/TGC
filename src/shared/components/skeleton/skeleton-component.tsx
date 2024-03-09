import { Skeleton, type SkeletonProps } from '@rneui/base'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { theme } from '@tailwind'
import { type ViewStyle } from 'react-native'

const { colors } = theme.extend

export interface ISkeletonComponentProps extends SkeletonProps {}

export const SkeletonComponent = (
  props: ISkeletonComponentProps
): JSX.Element => {
  const colorScheme = mainStore.use.colorScheme()

  return (
    <Skeleton
      animation='pulse'
      {...props}
      skeletonStyle={{
        backgroundColor:
          colorScheme === ColorScheme.Dark
            ? colors.notification.bg.dark
            : colors.notification.bg.DEFAULT,
        ...(props.skeletonStyle as ViewStyle)
      }}
      style={{
        opacity: 0.7,
        borderRadius: 16,
        backgroundColor:
          colorScheme === ColorScheme.Dark
            ? colors.background['search-dark']
            : colors.background.search,
        ...(props.style as ViewStyle)
      }}
    />
  )
}
