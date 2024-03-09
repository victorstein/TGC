import { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import notification from '@shared/components/notification/hooks/notification'
import { NotificationType } from '@shared/components/notification/store/notification-store'

export interface INetwork {
  isConnected: boolean
}

export const useNetwork = (): INetwork => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        notification.hide()
      }

      if (!state.isConnected || state.isConnected === null) {
        notification.show({
          message: 'Sin Conexión',
          type: NotificationType.Error,
          autoClose: false
        })
      }
      setIsConnected(state.isConnected ?? false)
    })
    return unSubscribe
  }, [setIsConnected, isConnected])

  return { isConnected }
}
