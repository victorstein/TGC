import type { FC } from 'react'
import { Text, View } from 'react-native'
import type { ToastConfigParams, ToastConfig } from 'react-native-toast-message'
import { theme } from '@tailwind'

const { colors } = theme.extend

const Toast: FC<ToastConfigParams<{ color: string }>> = ({
  text1,
  text2,
  props,
  type
}) => (
  <View className='flex px-5 w-full'>
    <View
      className='rounded-full w-full p-2 flex text-center items-center'
      style={{
        elevation: 7,
        backgroundColor: props.color
      }}
    >
      <Text
        className={`${type === 'warning' ? 'text-text' : 'text-text-dark'} font-lato-regular`}
      >
        {text1}
      </Text>
      {text2 !== undefined && (
        <Text
          className={`${type === 'warning' ? 'text-text' : 'text-text-dark'} font-lato-regular`}
        >
          {text2}
        </Text>
      )}
    </View>
  </View>
)

export const toastConfig: ToastConfig = {
  error: (props) => (
    <Toast {...props} props={{ color: colors.notification.bg.toast.error }} />
  ),
  warning: (props) => (
    <Toast {...props} props={{ color: colors.notification.bg.toast.warning }} />
  )
}
