// App.tsx
import { ThemeProvider } from '@/providers/ThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Error from '@/components/common/Error';
import { Toaster } from 'react-hot-toast';

// 페이지 컴포넌트
import Home from './pages/Home';
import Books from './pages/Books';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderList from './pages/OrderList';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';

const routes = [
  { path: '', element: <Home /> },
  { path: 'books', element: <Books /> },
  { path: 'signup', element: <Signup /> },
  { path: 'reset', element: <ResetPassword /> },
  { path: 'login', element: <Login /> },
  { path: 'book/:bookId', element: <BookDetail /> },
  { path: 'cart', element: <Cart /> },
  { path: 'order', element: <Order /> },
  { path: 'orderlist', element: <OrderList /> },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: routes,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
