import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import '@mantine/core/styles.css';
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
=======
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/Nav';
import HomeCaro from './Components/HomeCaro';
import '@mantine/core/styles.css';
import HomePage from './HomePage';
>>>>>>> 0e481734a697be9b5fda562ce283f93fd6306201

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
<<<<<<< HEAD
    <RouterProvider router = {router} />
=======
    <HomePage />
>>>>>>> 0e481734a697be9b5fda562ce283f93fd6306201
  </React.StrictMode>
);


