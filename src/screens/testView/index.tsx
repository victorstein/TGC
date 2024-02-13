import { Text, View } from 'react-native'
// layout
import LayoutScreen from '../main/layout'

export const TesScreen = (): JSX.Element => {
  return (
    <LayoutScreen>
      <View className='h-full items-center justify-center bg-background dark:bg-background-dark'>
        <Text>TesScreen</Text>
      </View>
    </LayoutScreen>
  )
}
