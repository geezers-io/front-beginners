import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieListPage from '@/pages';
import AboutPage from '@/pages/about';
import theme from '@/styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
]);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
