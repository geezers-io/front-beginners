import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
    </ChakraProvider>
  );
}

export default App;
