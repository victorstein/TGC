import type { FC } from 'react'
import { StyleSheet } from 'react-native'
import { ColorScheme, mainStore } from '@screens/main/store/store'
import { SearchBar } from '@rneui/themed'
import { theme } from '@tailwind'
import SearchIcon from '@shared/components/icons/search-icon'
const { colors } = theme.extend

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    fontFamily: 'lato-regular',
    height: 50
  },
  containerStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent'
  }
})

const SearchBarHome: FC = () => {
  const coloScheme = mainStore.use.colorScheme()
  return (
    <>
      <SearchBar
        placeholderTextColor={
          coloScheme === ColorScheme.Dark
            ? colors.background.DEFAULT
            : colors.background.dark
        }
        loadingProps={{
          color: colors.primary.DEFAULT
        }}
        searchIcon={
          <SearchIcon
            size={18}
            activeTintColor={`${coloScheme === ColorScheme.Dark ? colors.background.DEFAULT : colors.background.dark}`}
          />
        }
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        inputContainerStyle={{
          backgroundColor:
            coloScheme === ColorScheme.Dark
              ? colors.background['search-dark']
              : colors.background.search
        }}
        placeholder='Busca un post o podcast...'
        round
      />
    </>
  )
}

export default SearchBarHome
