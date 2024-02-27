import { type TabName } from '@screens/main/home.types'

export interface IComponentProps {
  photoURL: string
  title: string
  date: string
  redirect: TabName
  isRead?: boolean
}
