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
};

const theme = extendTheme({ config, colors });
export default theme;
