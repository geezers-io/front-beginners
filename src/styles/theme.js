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
    body: 'Pretendard',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'black',
      },
    },
  },
});
export default theme;
