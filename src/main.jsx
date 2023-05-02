import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Login from './Component/Page/Login/Login.jsx';
import Register from './Component/Page/Register/Register.jsx';
import ChefDetail from './Component/Page/ChefDetail/ChefDetail.jsx';
import Error from './Component/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/categories')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/category/:id',
        element: <ChefDetail></ChefDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
