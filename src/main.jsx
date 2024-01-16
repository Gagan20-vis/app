import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
