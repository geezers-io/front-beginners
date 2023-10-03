import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  pink: {
    primary: '#fe0559',
    secondary: '#ff7471',
  },
  black: '#000000',
  white: '#ffffff',
  gray: '#333333',
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
  styles: {
    global: {
      html: {
        width: '100%',
        height: '100vh',
      },
      body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      },
      '#root': {
        width: '100%',
        height: '100%',
        scrollbarGutter: 'stable',
        overflow: 'auto',
      },
      '::-webkit-scrollbar': {
        width: '0.25rem',
        backgroundColor: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: 'pink.primary',
      },
    },
  },
});
export default theme;
