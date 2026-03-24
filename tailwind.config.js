/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  base: './',
  theme: {
    extend: {
      colors: {
        primary: '#c58940', // Cinematic Gold
        primaryDark: '#965a2a',
        primaryLight: '#e2c08c',
        secondary: '#839054', // Olive Green
        dark: '#0a0a0a',
        lightDark: '#141414',
        chess: {
          black: '#000000',
          white: '#ffffff',
          gray: '#525252',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Cinzel"', 'serif'], // Setting Cinzel as default for cinematic look
        arabic: ['Cairo', '"Noto Sans Arabic"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
