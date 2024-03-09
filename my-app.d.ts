/// <reference types="nativewind/types" />

import { type NavigatorOverride } from '@screens/home/types/home-types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigatorOverride {}
  }
}
