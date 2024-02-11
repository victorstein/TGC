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
        }
      }
    }
  },
  plugins: []
}
