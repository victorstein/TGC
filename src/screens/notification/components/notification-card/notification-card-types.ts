import { type TabName } from '@screens/home/types/home-types'

export interface INotificationCardProps {
  photoURL: string
  title: string
  date: string
  redirect: TabName
  isRead?: boolean
  delay?: number
}
