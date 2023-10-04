import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Gallery } from './pages/Gallery';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/gallery/:pageId",
    element: <Projects />
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
