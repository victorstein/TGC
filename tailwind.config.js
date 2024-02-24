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
          DEFAULT: '#ffffff'
        },
        text: {
          dark: '#ffffff',
          DEFAULT: '#212121'
        },
        accent: {
          dark: '#1e2c34',
          DEFAULT: '#f5f5f7'
        },
        separator: {
          dark: '#145169',
          DEFAULT: '#D9D9D9'
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
