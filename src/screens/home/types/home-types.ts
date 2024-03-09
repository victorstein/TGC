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

export interface NavigatorOverride {
  [key: string]: Record<string, unknown> | undefined
  [TabName.HOME]: Record<string, unknown> | undefined
}
