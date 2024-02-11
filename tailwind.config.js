// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#d73636',
          DEFAULT: '#d73636'
        },
        background: {
          dark: '#23343b',
          DEFAULT: '#ffffff'
        },
        text: {
          dark: '#000000',
          DEFAULT: '#ffffff'
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
