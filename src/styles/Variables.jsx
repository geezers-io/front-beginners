import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // 초기 색상
    useSystemColorMode: false, // 시스템 색상 사용여부
  },
  colors: {
    pink: {
      50: '#fff5f7',
      100: '#fed7e2',
    },
    black: '#141414',
    coral: {
      50: '#fef5e7',
      100: '#feb670',
    },
    mustard: {
      50: '#fffbdd',
      100: '#ffea83',
    },
    mint: {
      50: '#ecfdf5',
      100: '#6cf0c8',
    },
    azure: {
      50: '#ebf7ff',
      100: '#63b4f7',
    },
  },
});

export default theme;
