import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieListPage from '@/pages';
import AboutPage from '@/pages/about';
import theme from '@/styles/theme';
import Layout from './components/layout/layout';
import InfiniteScroll from 'react-infinite-scroll-component';
import '@/App.css';

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
    <InfiniteScroll>
      <Layout>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </Layout>
    </InfiniteScroll>
  );
};

export default App;
