import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/news",
      element: <NewsPage />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


