import { type NavigationRoutesNames } from '@screens/home/types/home-types'

export interface INotificationCardProps {
  photoURL: string
  title: string
  date: string
  redirect: NavigationRoutesNames
  isRead?: boolean
  delay?: number
}
