// inline CSS에서 사용하기 위한 스타일 상수

export const theme = {
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
    violent_gradient: 'linear-gradient(61.53deg, #673CFF 30.27%, #1D77FF 100%)',
  },
  boxShadow: {
    shadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.1)',
    blur: '0px 0px 20px rgba(164, 170, 172, 0.25)',
  },
  screens: {
    mobile: '375px',
  },
  fontSize: {
    title1: ['30px', '38px'], // [fontSize, lineHeight]
    title2: ['24px', '32px'],
    headline: ['20px', '28px'],
    subtitle: ['18px', '26px'],
    body1: ['16px', '24px'],
    body2: ['14px', '22px'],
    caption: ['12px', '20px'],
  },
}

export const FORM_INPUT_STYLE =
  'placeholder-text-body1 w-[343px] h-[52px] px-[18px] py-[14px] text-body1 rounded-[8px] bg-gray-700 border-[1px] border-gray-600 focus:outline-none focus:border-green-light'

export const ALIGN_CENTER = 'flex justify-center items-center'

// TODO: 추후 해당 스타일 사용하는 부분 리팩터링
export const TEXT_OVERFLOW_STYLE =
  'overflow-hidden text-ellipsis whitespace-nowrap'

export const ProfileButtonStyle =
  'flex h-[50px] items-center justify-center gap-[9.25px] rounded-[8px] bg-gray-100 px-[25px] py-[15px] text-body1 font-bold text-gray-900 flex-grow'
