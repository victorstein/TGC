import { MotiView } from 'moti'
import NetInfo from '@react-native-community/netinfo'
import { mainStore } from '@screens/main/store/store'
import { useEffect } from 'react'
import { Text } from 'react-native'

export const NetworkNotification = (): JSX.Element => {
  const isConnected = mainStore.use.isConnected()
  const setIsConnected = mainStore.use.setIsConnected()

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false)
    })

    return unSubscribe
  }, [setIsConnected, isConnected])

  return (
    <MotiView
      key='network-notification'
      animate={{
        opacity: isConnected ? 0 : 1,
        height: isConnected ? 'auto' : 0
      }}
      transition={{ type: 'timing', duration: 500 }}
      className='flex items-center justify-center w-full bg-primary py-0'
    >
      <Text className='font-lato-regular text-text dark:text-text-dark'>
        Modo fuera de linea
      </Text>
    </MotiView>
  )
}
