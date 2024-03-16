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

export const NavigationRoutes = {
  ...TabName,
  ...HomeScreen
}

export type NavigationRoutesEnum = typeof NavigationRoutes

export type NavigationRoutesNames = `${TabName}` | `${HomeScreen}`

export type NavigatorOverride = Record<
  NavigationRoutesNames,
  object | undefined
>
