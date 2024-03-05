import { type TabName } from '@screens/main/home.types'

export interface INotificationCardProps {
  photoURL: string
  title: string
  date: string
  redirect: TabName
  isRead?: boolean
  delay?: number
}
