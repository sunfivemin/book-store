// App.tsx
import { ThemeProvider } from '@/providers/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Error from '@/components/common/Error';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from '@/pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';

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
        element: <Books />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'reset',
        element: <ResetPassword />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'book/:bookId',
        element: <BookDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order',
        element: <Order />,
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
