import { createBrowserRouter } from 'react-router-dom';
import App from './app/app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <div>dashboard</div>,
      },
      {
        path: '/users',
        element: <div>users</div>,
      },
      {
        path: '/products',
        element: <div>products</div>,
      },
      {
        path: '/warehouse',
        element: <div>warehouse</div>,
      },
      {
        path: '/sells',
        element: <div>sells</div>,
      },
      {
        path: '/treasury',
        children: [
          {
            path: '/treasury/newBankAccount',
            element: <div>new bank account</div>,
          },
          { path: '/treasury/option2', element: <div>Option 2</div> },
          { path: '/treasury/option3', element: <div>Option 3</div> },
        ],
      },
      {
        path: '/accounting',
        element: <div>accounting</div>,
      },
      {
        path: '/settings',
        element: <div>settings</div>,
      },
      {
        path: '/help',
        element: <div>help</div>,
      },
      {
        path: '/support',
        element: <div>support</div>,
      },
    ],
  },
]);
