/* modules */
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages';
import About from '@/pages/about';

/* css */
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

const App = () => {
  return (
    <ChakraProvider theme={{}}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
