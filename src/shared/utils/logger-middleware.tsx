import AsyncStorage from '@react-native-async-storage/async-storage'
import type { State, StateCreator, StoreMutatorIdentifier } from 'zustand'

type Logger = <
  T extends State,
  Mps extends Array<[StoreMutatorIdentifier, unknown]> = [],
  Mcs extends Array<[StoreMutatorIdentifier, unknown]> = []
>(
  f: StateCreator<T, Mps, Mcs>,
  name: string
) => StateCreator<T, Mps, Mcs>

type LoggerImpl = <T extends State>(
  f: StateCreator<T, [], []>,
  name: string
) => StateCreator<T, [], []>

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...a) => {
    set(...a)
    console.log(...(name !== undefined ? [`${name}:`] : []), get())
    console.log(
      AsyncStorage.getItem('app-storage')
        .then((data): void => {
          console.log('app-storage AsyncStorage:', data)
        })
        .catch(() => {})
    )
  }
  const setState = store.setState
  store.setState = (...a) => {
    setState(...a)
    console.log(...(name !== undefined ? [`${name}:`] : []), store.getState())
  }

  return f(loggedSet, get, store)
}

export const loggerMiddleware = loggerImpl as unknown as Logger
