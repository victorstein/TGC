export enum CategoryEnum {
  CODE = 'code',
  TECH = 'tech',
  GAMING = 'gaming'
}

export enum TabName {
  HOME = 'Inicio',
  SEARCH = 'Buscar',
  PLAY = 'Reproducir'
}

export enum HomeScreen {
  HOME_STACK = 'Inicio_Stack',
  ARTICLE = 'Articulo'
}

export enum RootStack {
  MAIN = 'Main',
  NOTIFICATIONS = 'Notificaciones'
}

export const NavigationRoutes = {
  ...TabName,
  ...HomeScreen,
  ...RootStack
}

export type NavigationRoutesEnum = typeof NavigationRoutes

export type NavigationRoutesNames =
  | `${TabName}`
  | `${HomeScreen}`
  | `${RootStack}`

export type NavigatorOverride = Record<
  NavigationRoutesNames,
  object | undefined
>
