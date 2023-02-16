/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      green: {
        light: '#69FFA5',
        DEFAULT: '#18FF74',
        opacity_10: 'rgba(105, 255, 165, 0.1);',
      },
      blue: {
        light: '#55ADFF',
        DEFAULT: '#1890FF',
      },
      violet: {
        light: '#6236FD',
        DEFAULT: '#9577FF',
      },
      gray: {
        900: '#080808',
        700: '#2D2D2D',
        600: '#515151',
        500: '#747474',
        400: '#A3A3A3',
        300: '#C9C9C9',
        100: '#FEFEFE',
      },
    },
    backgroundImage: {
      green_gradient: 'linear-gradient(64.24deg, #18FF74 12.45%, #18ACFF 100%)',
      blue_gradient:
        'linear-gradient(61.53deg, #2400A2 -5.41%, #374BFF 35.21%, #18FF74 100%)',
      violent_gradient:
        'linear-gradient(61.53deg, #673CFF 30.27%, #1D77FF 100%)',
    },
    boxShadow: {
      shadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.1)',
      blur: '0px 0px 20px rgba(164, 170, 172, 0.25)',
    },
    screens: {
      mobile: '375px',
    },
    fontSize: {
      title1: ['30px', '38px'],
      title2: ['24px', '32px'],
      headline: ['20px', '28px'],
      subtitle: ['18px', '26px'],
      body1: ['16px', '24px'],
      body2: ['14px', '22px'],
      caption: ['12px', '20px'],
    },
    fontFamily: {
      pretendard: ['PretendardVariable', 'sans-serif'],
    },
    animation: {
      fadeIn: 'fadeIn .2s ease-in',
      fadeOut: 'fadeOut .2s ease-out',
      slideIn: 'slideIn .3s ease-in',
      slideOut: 'slideOut .3s ease-out',
      slideUp: 'slideUp .3s ease-out',
      slideDown: 'slideDown .3s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0)' },
        '50%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.3)' },
        '100%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.6)' },
      },
      slideIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      fadeOut: {
        '0%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.6)' },
        '50%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.3)' },
        '100%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.0)' },
      },
      slideOut: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      slideUp: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideDown: {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(100%)' },
      },
    },
  },
  plugins: [],
}
