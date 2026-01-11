export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F',
        surface: '#AFE',
        primary: '#B',
        accent: '#BF',
        text: '#FFAFB',
        'text-muted': '#CAAF',
        border: '#D'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      spacing: {
        '.': '.rem'
      },
      borderRadius: {
        '.': '.rem'
      }
    }
  },
  plugins:
}