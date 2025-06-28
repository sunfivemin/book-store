// App.tsx
import { ThemeProvider } from '@/providers/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Error from '@/components/common/Error';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'books',
        element: <div>도서 목록</div>,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
