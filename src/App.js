import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieListPage from '@/pages';
import AboutPage from '@/pages/about';
import theme from '@/styles/theme';
import Layout from '@/components/layout/Layout';
import Detail from '@/pages/detail/[id]';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MovieListPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
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
