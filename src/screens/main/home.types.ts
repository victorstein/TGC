export enum TabName {
  HOME = 'Inicio',
  SEARCH = 'Buscar',
  PLAY = 'Reproducir'
}

export interface NavigatorOverride {
  [key: string]: undefined
  [TabName.HOME]: undefined
}
