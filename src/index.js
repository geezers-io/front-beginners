import { createRoot } from 'react-dom/client';
import App from './App';
import theme from '@/styles/theme';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <>
    <App />
  </>,
);
