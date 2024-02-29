/// <reference types="nativewind/types" />

import { type NavigatorOverride } from '@screens/main/home.types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigatorOverride {}
  }
}
