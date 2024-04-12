import { ColorScheme as ThemeColor, mainStore } from '@screens/main/store/store'
import { LinearGradient } from 'expo-linear-gradient'
import { type FC } from 'react'
import { View, useWindowDimensions } from 'react-native'

const MainGradient: FC = () => {
  const { height } = useWindowDimensions()
  const storeColorScheme = mainStore.use.colorScheme()
  const dinamicHeight = ((height / 100) * 10).toFixed()
  const colors =
    storeColorScheme === ThemeColor.Dark
      ? [
          'rgba(35,52,59,0.30575980392156865)',
          'rgba(20,81,105,0.6839110644257703)'
        ]
      : [
          'rgba(255,255,255,0.16010154061624648)',
          'rgba(216,54,54,0.30575980392156865)'
        ]

  return (
    <View className={`absolute bottom-[70] h-[${dinamicHeight}] w-screen`}>
      <LinearGradient colors={colors} className={'h-full w-full'} />
    </View>
  )
}

export default MainGradient
