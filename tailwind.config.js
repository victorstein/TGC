// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#D83636',
          DEFAULT: '#D83636'
        },
        background: {
          dark: '#23343b',
          DEFAULT: '#ffffff',
          search: '#F2F2F6',
          'search-dark': '#21313C',
          'articles-default': '#F5F5F8',
          'articles-dark': '#1F2D34'
        },
        text: {
          dark: '#ffffff',
          DEFAULT: '#212121',
          notification: {
            dark: '#D9D9D9'
          }
        },
        accent: {
          dark: '#1e2c34',
          DEFAULT: '#f5f5f7'
        },
        separator: {
          dark: '#145169',
          DEFAULT: '#D9D9D9'
        },
        notification: {
          bg: {
            DEFAULT: '#EDEDED',
            dark: '#145169',
            visited: {
              DEFAULT: '#FFF',
              dark: '#162C36'
            }
          },
          border: {
            new: {
              DEFAULT: '#D83636'
            }
          },
          warning: '#FFA500',
          error: '#D83636'
        },
        banner: {
          filter: {
            DEFAULT: '#250000'
          },
          text: {
            DEFAULT: '#FFF'
          }
        }
      },
      fontFamily: {
        'lato-regular': ['lato-regular'],
        'lato-bold': ['lato-bold'],
        'lato-extra-bold': ['lato-extra-bold'],
        'lato-medium': ['lato-medium'],
        'lato-semibold': ['lato-semibold']
      }
    }
  },
  plugins: []
}
