import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout";
import Category from "../Pages/Home/category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/login/Login";
import News from "../Pages/news/News";
import Register from "../Pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element:<Navigate to='category/0'></Navigate>
    },
      {
      path: '/login',
      element:<Login></Login>
      },
      {
        path: '/register',
      element: <Register></Register>  
      }
    ]
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
export default router