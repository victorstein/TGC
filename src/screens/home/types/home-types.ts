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

export enum HomeTabsNavigation {
  PODCAST_TAB = 'Podcast',
  GAMING_TAB = 'Gaming',
  TECH_TAB = 'Tech',
  CODING_TAB = 'Coding'
}

export const NavigationRoutes = {
  ...TabName,
  ...HomeScreen,
  ...HomeTabsNavigation
}

export type NavigationRoutesEnum = typeof NavigationRoutes

export type NavigationRoutesNames =
  | `${TabName}`
  | `${HomeScreen}`
  | `${HomeTabsNavigation}`

export type NavigatorOverride = Record<
  NavigationRoutesNames,
  object | undefined
>
