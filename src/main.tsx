import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'sanitize.css';
import './styles/tailwind.css';
import './styles/global.css.ts';

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mock/browser');
  await worker.start();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
