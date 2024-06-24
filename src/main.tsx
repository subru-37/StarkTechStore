import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ErrorPage from './error-page';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import productDetailsApi from './api/ProductQuery';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={productDetailsApi}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
